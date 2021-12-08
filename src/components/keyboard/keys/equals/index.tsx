import styled from 'styled-components'

import { Key } from 'components/keyboard/keys'

const CustomKey = styled(Key)`
	background-color: ${({ theme }) => theme.keyPad.keys.equals.background};
	border-bottom: 5px solid ${({ theme }) => theme.keyPad.keys.equals.shadow};
	color: ${({ theme }) => theme.keyPad.keys.equals.text};

	&:hover {
		background-color: ${({ theme }) => theme.keyPad.keys.equals.shadow};
	}
`

const EqualsKey = () => <CustomKey>=</CustomKey>

export default EqualsKey
