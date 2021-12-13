import React from 'react'

import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { large } from 'constants/layout'
import { HistoryProvider } from 'context/historyContext'
import { getDisplay } from 'store/selectors'

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

	@media screen and (min-width: ${large}) {
		justify-self: end;
	}
`

const App = () => {
	const display = useSelector(getDisplay)

	return (
		<React.StrictMode>
			<GlobalStlye />
			<HistoryProvider>
				<Container>
					<Menu />
					<Display value={display} />
					<Keyboard />
				</Container>
				<History />
			</HistoryProvider>
		</React.StrictMode>
	)
}

export default App
