import { render, screen } from 'utils/test'

import Display from '.'

it('renders', () => {
	render(<Display value='0' />)

	const display = screen.getByText(/0/)

	expect(display).toBeInTheDocument()
})
