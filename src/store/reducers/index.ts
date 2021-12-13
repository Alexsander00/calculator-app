import { combineReducers } from 'redux'

import calculatorReducer from './calculator'

export const rootReducer = combineReducers({
	calculator: calculatorReducer,
})

export type RootReducerType = ReturnType<typeof rootReducer>
