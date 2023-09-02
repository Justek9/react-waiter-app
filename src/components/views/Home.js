import AllTables from '../features/AllTables'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const Home = () => {
	const tables = useSelector(state => getAllTables(state))

	return (
		<>
			<div className='d-flex justify-content-between mb-4'>
				<h2>All tables</h2>
				<Button variant='outline-info' as={NavLink} to='/table/add'>
					Add table
				</Button>
			</div>
			{tables.length === 0 ? <Spinner animation='border' variant='primary' /> : <AllTables />}
		</>
	)
}

export default Home
