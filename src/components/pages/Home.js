import AllTables from './AllTables'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import { NavLink } from 'react-router-dom'
import { getIsLoading } from '../../redux/isLoadingRedux'
import { getIsError } from '../../redux/errorRedux'

const Home = () => {
	const tables = useSelector(state => getAllTables(state))
	const isLoading = useSelector(state => getIsLoading(state))
	const isError = useSelector(state => getIsError(state))

	return (
		<>
			<div className='d-flex justify-content-between mb-4'>
				<h2>All tables</h2>
				<Button variant='outline-info' as={NavLink} to='/table/add'>
					Add table
				</Button>
			</div>
			{isError && <p>Error occured while fetching data...</p>}
			{tables.length === 0 && !isLoading && <p>Nothing to show...</p>}
			{isLoading && <Spinner animation='border' variant='primary' />}
			{!isLoading && !isError && <AllTables />}
		</>
	)
}

export default Home
