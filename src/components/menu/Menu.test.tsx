import { Theme1, Theme2, Theme3 } from 'constants/themes'
import { fireEvent, render, screen } from 'utils/test'

import Menu from '.'

beforeEach(() => {
	render(<Menu />)
})

it('renders', () => {
	const tittle = screen.getByText(/calc/i)
	const historyIcon = screen.getByRole('button')
	const pickerTittle = screen.getByText(/theme/i)
	const options = screen.getAllByText(/[123]/)
	const button = screen.getByRole('switch')

	expect(tittle).toBeInTheDocument()
	expect(historyIcon).toBeInTheDocument()
	expect(pickerTittle).toBeInTheDocument()
	expect(options).toHaveLength(3)
	expect(button).toBeInTheDocument()
})

it('changes the current theme on clicking the button', () => {
	const tittle = screen.getByText(/calc/i)
	const button = screen.getByRole('switch')

	fireEvent.click(button)
	expect(tittle).toHaveStyle(`color: ${Theme2.main.text}`)

	fireEvent.click(button)
	expect(tittle).toHaveStyle(`color: ${Theme3.main.text}`)

	fireEvent.click(button)
	expect(tittle).toHaveStyle(`color: ${Theme1.main.text}`)
})
