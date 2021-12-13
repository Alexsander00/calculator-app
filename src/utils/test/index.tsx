import React, { ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { ThemeProvider } from 'context/themeContext'
import { rootReducer } from 'store/reducers'

const Providers: React.FC = ({ children }) => {
	const store = createStore(rootReducer)

	return (
		<Provider store={store}>
			<ThemeProvider>{children}</ThemeProvider>
		</Provider>
	)
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
