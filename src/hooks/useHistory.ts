import { useContext } from 'react'

import { HistoryContext } from 'context/historyContext'

const useHistory = () => {
	const { show, setShow } = useContext(HistoryContext)

	return {
		show,
		setShow,
	}
}

export default useHistory
