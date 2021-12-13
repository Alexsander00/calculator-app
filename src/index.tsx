import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from 'components'
import { rootReducer } from 'store/reducers'

import { ThemeProvider } from './context/themeContext'

const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
)
