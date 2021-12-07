import styled from 'styled-components'

import Options from './Options'
import ToggleSwitch from './ToggleSwitch'

const Container = styled.div`
	align-items: center;
	display: grid;
	font-size: 1rem;
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
`

const Tittle = styled.p`
	color: ${({ theme }) => theme.main.text};
	grid-row: span 2;
	margin: 0 1em 0 0;
`

const ThemePicker = () => (
	<Container>
		<Tittle>THEME</Tittle>
		<Options />
		<ToggleSwitch />
	</Container>
)

export default ThemePicker
