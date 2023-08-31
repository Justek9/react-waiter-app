import { fetchTables } from './redux/tablesRedux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import ShowAllTables from './components/views/ShowAllTables'
import EditTable from './components/features/EditTable'

const App = () => {
	const dispatch = useDispatch()

	// fetch tables from server and add them to initial state
	useEffect(() => dispatch(fetchTables()), [dispatch])

	return (
		<Container>
			<Routes>
				<Route path='/' element={<ShowAllTables />}></Route>
				<Route path='/table/:id' element={<EditTable />}></Route>
			</Routes>
		</Container>
	)
}

export default App
