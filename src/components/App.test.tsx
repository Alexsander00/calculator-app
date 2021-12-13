import { Operations } from 'types'
import { render, screen, fireEvent, within } from 'utils/test'

import App from '.'

beforeEach(() => render(<App />))

function useSetup() {
	const display = screen.getByText('0', { selector: 'p' })
	const numberKeys = screen.getAllByRole('button', { name: /[0-9.]/ })
	const equalsKey = screen.getByRole('button', { name: '=' })

	const setDisplay = (number: string) => {
		number
			.split('')
			.map(digit =>
				fireEvent.click(
					numberKeys.find(button => button.textContent === digit) as HTMLElement,
				),
			)
	}

	const clickEquals = () => fireEvent.click(equalsKey)
	const setOperation = (first: string, type: Operations, second: string) => {
		setDisplay(first)
		fireEvent.click(screen.getByRole('button', { name: type }))
		setDisplay(second)
	}

	return {
		display,
		setDisplay,
		clickEquals,
		setOperation,
	}
}

describe('number key pressed', () => {
	it('changes the current display', () => {
		const { display, setDisplay } = useSetup()

		setDisplay('10')
		expect(display).toHaveTextContent('10')
	})

	it('changes the current display after pressing an operation key', () => {
		const { display, setOperation } = useSetup()

		setOperation('200', Operations.Sum, '100')
		expect(display).toHaveTextContent('100')
	})
})

describe('equals key', () => {
	it('doesnt change the current display', () => {
		const { display, clickEquals } = useSetup()

		clickEquals()
		expect(display).toHaveTextContent('0')
	})

	describe('after setting an operation', () => {
		it('changes the current display', () => {
			const { display, setOperation, clickEquals } = useSetup()

			setOperation('100', Operations.Sum, '200')
			clickEquals()

			expect(display).toHaveTextContent('300')
		})

		it('renders a operation record', () => {
			const { setOperation, clickEquals } = useSetup()

			setOperation('300', Operations.Subtraction, '100')
			clickEquals()

			const record = screen.getAllByRole('listitem')[0]
			const operationItem = within(record).getByText('300 - 100 =')
			const resultItem = within(record).getByText('200')

			expect(operationItem).toBeInTheDocument()
			expect(resultItem).toBeInTheDocument()
		})

		it('renders multiple operation record', () => {
			const { setOperation, clickEquals } = useSetup()

			setOperation('100', Operations.Sum, '100')
			clickEquals()
			clickEquals()

			const records = screen.getAllByRole('listitem')
			expect(records).toHaveLength(2)
		})
	})
})
