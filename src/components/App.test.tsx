import { render, screen } from '@testing-library/react'

import App from 'components'

it('renders', () => {
	render(<App />)

	const text = screen.getByText(/hello world/i)

	expect(text).toBeInTheDocument()
})
