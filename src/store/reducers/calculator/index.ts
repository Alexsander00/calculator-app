/* eslint-disable default-param-last */

import { defaultState, IStore } from 'store'
import { Actions, ActionType } from 'store/actions'
import { Buttons, Operations } from 'types'

import { concat, del, unformat } from './utils/format'
import calculateOperation from './utils/operation'

function getDisplay(payload: string, { display, prevButton }: IStore) {
	if (prevButton === Buttons.Operation && payload === '.') return '0.'
	if (display === '0' && payload === '.') return '0.'
	if (display === '0' || prevButton === Buttons.Operation) return payload

	return concat(display, payload)
}

const calculatorReducer = (
	state = defaultState,
	action: ActionType,
): IStore => {
	switch (action.type) {
		case Actions.NumberPressed:
			return {
				...state,
				display: getDisplay(action.payload, state),
				prevButton: Buttons.Number,
			}

		case Actions.OperationPressed:
			return {
				...state,
				prevButton: Buttons.Operation,
				currentOperation: {
					...state.currentOperation,
					firstValue: parseFloat(unformat(state.display)).toString(),
					type: action.payload,
				},
			}

		case Actions.EqualsPressed: {
			if (state.currentOperation.type === Operations.None)
				return { ...state, prevButton: Buttons.Equals }

			const operationID =
				state.currentOperation.id === 1 ? 1 : state.currentOperation.id + 1

			const operation = calculateOperation({
				...state.currentOperation,
				id: operationID,
				secondValue:
					state.prevButton === Buttons.Equals
						? state.currentOperation.secondValue
						: unformat(state.display),
			})

			return {
				display: operation.result,
				prevButton: Buttons.Equals,
				currentOperation: {
					...operation,
					id: operationID + 1,
					firstValue: unformat(operation.result),
					result: '',
				},
				operationRecord: [operation, ...state.operationRecord],
			}
		}

		case Actions.DelPressed:
			return {
				...state,
				display: del(state.display),
				prevButton: Buttons.Special,
			}

		case Actions.ResetPressed:
			return {
				...defaultState,
				prevButton: Buttons.Special,
			}
		default:
			return state
	}
}

export default calculatorReducer
