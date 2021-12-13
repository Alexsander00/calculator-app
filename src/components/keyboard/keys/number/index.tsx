import { useDispatch } from 'react-redux'

import Key from 'components/keyboard/keys'
import { numberPressed } from 'store/actions/actionCreators'

interface INumberKey {
	number: string
}

const NumberKey = ({ number }: INumberKey) => {
	const dispatch = useDispatch()

	const onClick = () => dispatch(numberPressed(number))

	return <Key onClick={onClick}>{number}</Key>
}

export default NumberKey
