import AllTables from '../features/AllTables'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'

const ShowAllTables = () => {
	const tables = useSelector(state => getAllTables(state))

	return (
		<>
			<h2>All tables</h2>
			{tables.length === 0 ? <Spinner animation='border' variant='primary' /> : <AllTables />}
		</>
	)
}

export default ShowAllTables
