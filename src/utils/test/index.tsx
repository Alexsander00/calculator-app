import React, { ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'context/themeContext'

const Providers: React.FC = ({ children }) => (
	<ThemeProvider>{children}</ThemeProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
