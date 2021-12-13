import { IOperation, Operations } from 'types'

import { format } from '../format'

function calculateOperation(operation: IOperation): IOperation {
	const { firstValue, secondValue, type } = operation
	const first = parseFloat(firstValue)
	const second = parseFloat(secondValue)

	let result = ''

	switch (type) {
		case Operations.Sum:
			result = format((first + second).toString())
			break
		case Operations.Subtraction:
			result = format((first - second).toString())
			break
		case Operations.Multiplication:
			result = format((first * second).toString())
			break
		case Operations.Division:
			result = format((first / second).toString())
			break
		default:
			result = ''
	}

	return {
		...operation,
		result,
	}
}

export default calculateOperation
