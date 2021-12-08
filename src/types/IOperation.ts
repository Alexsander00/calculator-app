import Operations from './Operations'

export interface IOperation {
	id: number
	firstValue: string
	secondValue: string
	type: Operations
	result: string
}
