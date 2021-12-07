import React, { createContext, useMemo, useState } from 'react'

import {
	DefaultTheme,
	ThemeProvider as StyledThemeProvider,
} from 'styled-components'

import { Theme1 } from 'constants/themes'

interface IThemeContext {
	theme: DefaultTheme
	setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
export const ThemeProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState(Theme1)
	const contextValue = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme],
	)

	return (
		<ThemeContext.Provider value={contextValue}>
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}
