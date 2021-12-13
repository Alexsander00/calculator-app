import { defaultState } from 'store'
import {
	delPressed,
	equalsPressed,
	numberPressed,
	operationPressed,
	resetPressed,
} from 'store/actions/actionCreators'
import { Buttons, Operations } from 'types'

import calculatorReducer from '.'

describe('action type is numberPressed', () => {
	describe('when display length is less than the max length', () => {
		it('returns a new state with the display and prevButton modified', () => {
			const state = calculatorReducer(
				{
					...defaultState,
					display: '230,000',
				},
				numberPressed('0'),
			)

			expect(state).toStrictEqual({
				...defaultState,
				display: '2,300,000',
				prevButton: Buttons.Number,
			})
		})

		describe('when the payload is .', () => {
			it('returns a new state with the display ending in .', () => {
				const { display } = calculatorReducer(
					{ ...defaultState, display: '10' },
					numberPressed('.'),
				)

				expect(display).toBe('10.')
			})

			it('returns a new state with the same display when the display is 0.', () => {
				const { display } = calculatorReducer(
					{ ...defaultState, display: '0.' },
					numberPressed('.'),
				)

				expect(display).toBe('0.')
			})
		})
	})

	describe('when display length is equals the max length', () => {
		it('returns the same state', () => {
			const initialState = {
				...defaultState,
				display: '1,000,000,000,000',
				prevButton: Buttons.Number,
			}

			const newState = calculatorReducer(initialState, numberPressed('0'))

			expect(initialState).toStrictEqual(newState)
		})
	})
})

describe('action type is operationPressed', () => {
	it('returns a new state with the prevButton and currentOperation modified', () => {
		const initialState = {
			...defaultState,
			display: '1,000',
			prevButton: Buttons.Number,
		}

		const newState = calculatorReducer(
			initialState,
			operationPressed(Operations.Sum),
		)

		expect(newState).toStrictEqual({
			...initialState,
			prevButton: Buttons.Operation,
			currentOperation: {
				...initialState.currentOperation,
				firstValue: '1000',
				type: Operations.Sum,
			},
		})
	})
})

describe('action type is equalsPressed', () => {
	it('returns a new state with the display, prevButton, currentOperation and operationRecord modified', () => {
		const initialState = {
			...defaultState,
			display: '100',
			prevButton: Buttons.Number,
			currentOperation: {
				...defaultState.currentOperation,
				firstValue: '50',
				type: Operations.Sum,
			},
		}

		const newState = calculatorReducer(initialState, equalsPressed())

		expect(newState).toStrictEqual({
			...initialState,
			display: '150',
			prevButton: Buttons.Equals,
			currentOperation: {
				...initialState.currentOperation,
				id: 2,
				firstValue: '150',
				secondValue: '100',
				result: '',
			},
			operationRecord: [
				{
					...initialState.currentOperation,
					id: 1,
					secondValue: '100',
					result: '150',
				},
			],
		})
	})

	it('returns the same state when operation is none', () => {
		const state = calculatorReducer(defaultState, equalsPressed())

		expect(state).toStrictEqual({
			...defaultState,
			prevButton: Buttons.Equals,
		})
	})
})

describe('action type is delPressed', () => {
	it('returns a new state with the display and prevButton modified', () => {
		const state = calculatorReducer(
			{
				...defaultState,
				display: '1,000,000,000,000',
				prevButton: Buttons.Number,
			},
			delPressed(),
		)

		expect(state).toStrictEqual({
			...defaultState,
			display: '100,000,000,000',
			prevButton: Buttons.Special,
		})
	})

	it('returns a new state with the same display when display is 0', () => {
		const { display } = calculatorReducer(defaultState, delPressed())

		expect(display).toEqual('0')
	})
})

describe('action type is resetPressed', () => {
	it('returns the defaultState', () =>
		expect(calculatorReducer(defaultState, resetPressed())).toStrictEqual({
			...defaultState,
			prevButton: Buttons.Special,
		}))
})
