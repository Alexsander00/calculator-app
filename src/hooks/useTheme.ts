import { useContext } from 'react'

import { Theme1, Theme2, Theme3 } from 'constants/themes'
import { ThemeContext } from 'context/themeContext'

const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const changeToTheme1 = () => setTheme(Theme1)
	const changeToTheme2 = () => setTheme(Theme2)
	const changeToTheme3 = () => setTheme(Theme3)

	return {
		theme,
		changeToTheme1,
		changeToTheme2,
		changeToTheme3,
	}
}

export default useTheme
