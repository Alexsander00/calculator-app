import { Theme1, Theme2, Theme3 } from 'constants/themes'
import { fireEvent, render, screen } from 'utils/test'

import Menu from '.'

it('changes the current theme on clicking the button', () => {
	render(<Menu />)

	const tittle = screen.getByText(/calc/i)
	const button = screen.getByRole('switch')

	fireEvent.click(button)
	expect(tittle).toHaveStyle(`color: ${Theme2.main.text}`)

	fireEvent.click(button)
	expect(tittle).toHaveStyle(`color: ${Theme3.main.text}`)

	fireEvent.click(button)
	expect(tittle).toHaveStyle(`color: ${Theme1.main.text}`)
})
