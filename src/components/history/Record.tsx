import styled from 'styled-components'

import { IOperation } from 'types'

const Container = styled.li`
	align-items: flex-end;
	background-color: ${({ theme }) => theme.history.items.background};
	color: ${({ theme }) => theme.main.text};
	display: flex;
	flex-flow: column nowrap;
	font-size: 0.7rem;
	justify-content: center;
	margin: 0.35em 1em;

	& > p {
		margin: 0.5em;
	}
`

interface IRecord {
	value: IOperation
}

const Record = ({ value }: IRecord) => {
	const { firstValue, type, secondValue, result } = value

	return (
		<Container>
			<p>
				{firstValue} {type} {secondValue} =
			</p>
			<p>{result}</p>
		</Container>
	)
}

export default Record
