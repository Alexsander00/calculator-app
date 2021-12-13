import { Operations } from 'types'

export enum Actions {
	OperationPressed = '@calculator/operationPressed',
	NumberPressed = '@calculator/numberPressed',
	EqualsPressed = '@calculator/equalsPressed',
	DelPressed = '@calculator/delPressed',
	ResetPressed = '@calculator/resetPressed',
}

interface IOperationPressed {
	type: Actions.OperationPressed
	payload: Operations
}

interface INumberPressed {
	type: Actions.NumberPressed
	payload: string
}

interface IEqualsPressed {
	type: Actions.EqualsPressed
}

interface IDelPressed {
	type: Actions.DelPressed
}

interface IResetPressed {
	type: Actions.ResetPressed
}

export type ActionType =
	| IOperationPressed
	| INumberPressed
	| IEqualsPressed
	| IDelPressed
	| IResetPressed
