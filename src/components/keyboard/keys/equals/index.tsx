import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import Key from 'components/keyboard/keys'
import { equalsPressed } from 'store/actions/actionCreators'

const CustomKey = styled(Key)`
	background-color: ${({ theme }) => theme.keyPad.keys.equals.background};
	border-bottom: 5px solid ${({ theme }) => theme.keyPad.keys.equals.shadow};
	color: ${({ theme }) => theme.keyPad.keys.equals.text};

	&:hover {
		background-color: ${({ theme }) => theme.keyPad.keys.equals.shadow};
	}
`

const EqualsKey = () => {
	const dispatch = useDispatch()
	const onClick = () => dispatch(equalsPressed())

	return <CustomKey onClick={onClick}>=</CustomKey>
}

export default EqualsKey
