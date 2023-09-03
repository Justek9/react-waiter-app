import { fetchTables } from './redux/tablesRedux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import EditTable from './components/features/EditTable'
import Header from './components/views/Header'
import NotFound from './components/pages/NotFound'
import AddTable from './components/features/AddTable'
import Footer from './components/views/Footer'

const App = () => {
	const dispatch = useDispatch()

	// fetch tables from server and add them to initial state
	useEffect(() => dispatch(fetchTables()), [dispatch])

	return (
		<Container>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/tables/:id' element={<EditTable />}></Route>
				<Route path='/table/add' element={<AddTable />}></Route>
				<Route path='/*' element={<NotFound />}></Route>
			</Routes>
			<Footer />
		</Container>
	)
}

export default App
