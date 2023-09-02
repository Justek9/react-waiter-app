import { fetchTables } from './redux/tablesRedux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from './components/views/Home'
import EditTable from './components/features/EditTable'
import Header from './components/views/Header'
import NotFound from './components/pages/NotFound'
import AddTable from './components/pages/AddTable'

const App = () => {
	const dispatch = useDispatch()

	// fetch tables from server and add them to initial state
	useEffect(() => dispatch(fetchTables()), [dispatch])

	return (
		<Container>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/table/:id' element={<EditTable />}></Route>
				<Route path='/table/add' element={<AddTable />}></Route>
				<Route path='/*' element={<NotFound />}></Route>
			</Routes>
		</Container>
	)
}

export default App
