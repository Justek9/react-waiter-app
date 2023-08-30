import { fetchTables } from './redux/tablesRedux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
	const dispatch = useDispatch()

	// fetch tables from server and add them to initial state
	useEffect(()=>dispatch(fetchTables()), [dispatch])

	return <div>Test</div>
}

export default App
