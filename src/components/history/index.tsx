import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

import { large } from 'constants/layout'
import useHistory from 'hooks/useHistory'
import { Operations, IOperation } from 'types'

import Record from './Record'

const Container = styled.ul<{ show: boolean }>`
	background-color: ${({ theme }) => theme.history.background};
	bottom: ${props => (props.show ? '0%' : '-100%')};
	display: flex;
	flex-flow: column nowrap;
	height: 100%;
	overflow-y: auto;
	position: absolute;
	transition: bottom 0.5s ease-in-out;
	width: 100%;

	@media screen and (min-width: ${large}) {
		display: flex;
		grid-area: history;
		position: static;
	}
`

const CloseButton = styled(AiOutlineClose)`
	align-self: flex-end;
	color: ${({ theme }) => theme.main.text};
	cursor: pointer;
	margin: 10px;
	min-height: 35px;
	min-width: 35px;

	@media screen and (min-width: ${large}) {
		display: none;
	}
`

const History = () => {
	const { show, setShow } = useHistory()

	const close = () => {
		setShow(false)
	}

	const records: IOperation[] = [
		{
			id: 1,
			firstValue: '10',
			type: Operations.Sum,
			secondValue: '20',
			result: '30',
		},
	]

	return (
		<Container show={show}>
			<CloseButton onClick={close} />
			{records.map(operation => (
				<Record key={operation.id} value={operation} />
			))}
		</Container>
	)
}

export default History
