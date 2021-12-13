import { Key } from 'components/keyboard/keys'
import { Operations } from 'types'

interface IOperationKey {
	type: Operations
}

const OperationKey = ({ type }: IOperationKey) => <Key>{type}</Key>

export default OperationKey
