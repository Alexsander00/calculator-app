import { CombinedState } from 'redux'

import { IStore } from 'store'

type State = CombinedState<{
	calculator: IStore
}>

export const getDisplay = (state: State) => state.calculator.display
export const getRecords = (state: State) => state.calculator.operationRecord
