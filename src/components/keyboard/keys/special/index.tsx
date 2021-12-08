import styled from 'styled-components'

import { IKey, Key } from 'components/keyboard/keys'

const CustomKey = styled(Key)`
	background-color: ${({ theme }) => theme.keyPad.keys.special.background};
	border-bottom: 5px solid ${({ theme }) => theme.keyPad.keys.special.shadow};
	color: ${({ theme }) => theme.keyPad.keys.special.text};

	&:hover {
		background-color: ${({ theme }) => theme.keyPad.keys.special.shadow};
	}
`

const SpecialKey = ({ value }: IKey) => <CustomKey>{value}</CustomKey>

export default SpecialKey
