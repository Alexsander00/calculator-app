import styled from 'styled-components'

import { Operations } from 'types'

import EqualsKey from './keys/equals'
import NumberKey from './keys/number'
import OperationKey from './keys/operation'
import SpecialKey from './keys/special'

const Container = styled.div`
	background-color: ${({ theme }) => theme.keyPad.background};
	border-radius: 15px;
	display: grid;
	gap: 1em;
	grid-template: repeat(5, 1fr) / repeat(4, 1fr);
	padding: 1.5em;

	& > button {
		&:nth-last-child(1) {
			grid-column: 3 / 5;
		}

		&:nth-last-child(2) {
			grid-column: 1 / 3;
		}
	}
`

const Keyboard = () => (
	<Container>
		<NumberKey value='9' />
		<NumberKey value='7' />
		<NumberKey value='8' />
		<SpecialKey value='DEL' />

		<NumberKey value='4' />
		<NumberKey value='5' />
		<NumberKey value='6' />
		<OperationKey type={Operations.Sum} />

		<NumberKey value='1' />
		<NumberKey value='2' />
		<NumberKey value='3' />
		<OperationKey type={Operations.Subtraction} />

		<NumberKey value='.' />
		<NumberKey value='0' />
		<OperationKey type={Operations.Division} />
		<OperationKey type={Operations.Multiplication} />

		<SpecialKey value='RESET' />
		<EqualsKey />
	</Container>
)

export default Keyboard
