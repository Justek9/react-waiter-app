import Table from './Table'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import Row from 'react-bootstrap/esm/Row'

const AllTables = () => {
	const tables = useSelector(state => getAllTables(state))

	return (
		<Row>
			{tables.map(table => (
				<Table key={table.id} table={table}></Table>
			))}
		</Row>
	)
}
export default AllTables
