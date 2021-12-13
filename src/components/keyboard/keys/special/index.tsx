import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import Key from 'components/keyboard/keys'
import { delPressed, resetPressed } from 'store/actions/actionCreators'

export enum SpecialType {
	Delete = 'DEL',
	Reset = 'RESET',
}

interface ISpecialKey {
	type: SpecialType
}

const CustomKey = styled(Key)`
	background-color: ${({ theme }) => theme.keyPad.keys.special.background};
	border-bottom: 5px solid ${({ theme }) => theme.keyPad.keys.special.shadow};
	color: ${({ theme }) => theme.keyPad.keys.special.text};

	&:hover {
		background-color: ${({ theme }) => theme.keyPad.keys.special.shadow};
	}
`

export const SpecialKey = ({ type }: ISpecialKey) => {
	const dispatch = useDispatch()
	const onClick = () => {
		if (type === SpecialType.Delete) {
			dispatch(delPressed())
			return
		}

		if (type === SpecialType.Reset) dispatch(resetPressed())
	}

	return <CustomKey onClick={onClick}>{type}</CustomKey>
}
