import React, { createContext, SetStateAction, useState, useMemo } from 'react'

interface IHistoryContext {
	show: boolean
	setShow: React.Dispatch<SetStateAction<boolean>>
}

export const HistoryContext = createContext<IHistoryContext>(
	{} as IHistoryContext,
)

export const HistoryProvider: React.FC = ({ children }) => {
	const [show, setShow] = useState(false)
	const contextValue = useMemo(
		() => ({
			show,
			setShow,
		}),
		[show],
	)

	return (
		<HistoryContext.Provider value={contextValue}>
			{children}
		</HistoryContext.Provider>
	)
}
