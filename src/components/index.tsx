import React from 'react'

import styled from 'styled-components'

import GlobalStlye from './GlobalStyles'
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
		<Container>
			<Menu />
		</Container>
	</React.StrictMode>
)

export default App
