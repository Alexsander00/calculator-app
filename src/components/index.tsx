import React from 'react'

import styled from 'styled-components'

import { HistoryProvider } from 'context/historyContext'

import Display from './display'
import GlobalStlye from './GlobalStyles'
import History from './history'
import Keyboard from './keyboard'
import Menu from './menu'

const Container = styled.div`
	align-self: center;
	display: grid;
	gap: 2em;
	grid-area: calc;
	grid-template-rows: auto auto 1fr;
	height: 90%;
	justify-self: center;
	width: 80%;
`

const App = () => (
	<React.StrictMode>
		<GlobalStlye />
		<HistoryProvider>
			<Container>
				<Menu />
				<Display value='0' />
				<Keyboard />
			</Container>
			<History />
		</HistoryProvider>
	</React.StrictMode>
)

export default App
