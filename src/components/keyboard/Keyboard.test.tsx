import { render, screen } from 'utils/test'

import Keyboard from '.'

it('renders', () => {
	render(<Keyboard />)

	const numbers = screen.getAllByRole('button', { name: /[0-9.]/ })
	const operations = screen.getAllByRole('button', { name: /[x+\-/]/ })
	const specials = screen.getAllByRole('button', { name: /[DEL|RESET]/ })
	const equals = screen.getByRole('button', { name: /=/ })

	expect(numbers).toHaveLength(11)
	expect(operations).toHaveLength(4)
	expect(specials).toHaveLength(2)
	expect(equals).toBeInTheDocument()
})
