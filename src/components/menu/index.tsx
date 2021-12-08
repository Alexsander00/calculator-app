import { FaHistory } from 'react-icons/fa'
import styled from 'styled-components'

import { large } from 'constants/layout'
import useHistory from 'hooks/useHistory'

import ThemePicker from './themePicker'

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	font-size: 1.35rem;
	justify-content: space-between;
`

const Tittle = styled.p`
	color: ${({ theme }) => theme.main.text};
`

const HistoryContainer = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
`

const HistoryIcon = styled(FaHistory)`
	cursor: pointer;
	fill: ${({ theme }) => theme.main.text};
	height: 1.5em;
	margin-right: 0.65em;
	padding: 0.35em;
	width: 1.5em;

	&:hover {
		background-color: ${({ theme }) => theme.keyPad.background};
	}

	@media screen and (min-width: ${large}) {
		display: none;
	}
`

const Menu = () => {
	const { setShow } = useHistory()

	const showHistory = () => setShow(true)

	return (
		<Container>
			<Tittle>calc</Tittle>
			<HistoryContainer>
				<HistoryIcon role='button' onClick={showHistory} />
			</HistoryContainer>
			<ThemePicker />
		</Container>
	)
}

export default Menu
