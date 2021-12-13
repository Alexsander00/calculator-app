import { Buttons, IOperation, Operations } from 'types'

export interface IStore {
	display: string
	prevButton: Buttons
	currentOperation: IOperation
	operationRecord: IOperation[]
}

export const defaultState: IStore = {
	display: '0',
	prevButton: Buttons.None,
	currentOperation: {
		id: 1,
		firstValue: '',
		secondValue: '',
		type: Operations.None,
		result: '',
	},
	operationRecord: [],
}
