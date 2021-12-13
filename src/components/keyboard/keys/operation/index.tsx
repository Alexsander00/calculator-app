import { useDispatch } from 'react-redux'

import Key from 'components/keyboard/keys'
import { operationPressed } from 'store/actions/actionCreators'
import { Operations } from 'types'

interface IOperationKey {
	type: Operations
}

const OperationKey = ({ type }: IOperationKey) => {
	const dispatch = useDispatch()
	const onClick = () => dispatch(operationPressed(type))

	return <Key onClick={onClick}>{type}</Key>
}

export default OperationKey
