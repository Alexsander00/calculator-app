import styled from 'styled-components'

import { Operations } from 'types'

import EqualsKey from './keys/equals'
import NumberKey from './keys/number'
import OperationKey from './keys/operation'
import { SpecialKey, SpecialType } from './keys/special'

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
		<NumberKey number='9' />
		<NumberKey number='7' />
		<NumberKey number='8' />
		<SpecialKey type={SpecialType.Delete} />

		<NumberKey number='4' />
		<NumberKey number='5' />
		<NumberKey number='6' />
		<OperationKey type={Operations.Sum} />

		<NumberKey number='1' />
		<NumberKey number='2' />
		<NumberKey number='3' />
		<OperationKey type={Operations.Subtraction} />

		<NumberKey number='.' />
		<NumberKey number='0' />
		<OperationKey type={Operations.Division} />
		<OperationKey type={Operations.Multiplication} />

		<SpecialKey type={SpecialType.Reset} />
		<EqualsKey />
	</Container>
)

export default Keyboard
