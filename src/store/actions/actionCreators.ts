import { Operations } from 'types'

import { Actions, ActionType } from '.'

export const operationPressed = (operation: Operations): ActionType => ({
	type: Actions.OperationPressed,
	payload: operation,
})

export const numberPressed = (number: string): ActionType => ({
	type: Actions.NumberPressed,
	payload: number,
})

export const equalsPressed = (): ActionType => ({
	type: Actions.EqualsPressed,
})

export const delPressed = (): ActionType => ({
	type: Actions.DelPressed,
})

export const resetPressed = (): ActionType => ({
	type: Actions.ResetPressed,
})
