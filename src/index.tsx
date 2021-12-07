import ReactDOM from 'react-dom'

import App from 'components'

import { ThemeProvider } from './context/themeContext'

ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById('root'),
)
