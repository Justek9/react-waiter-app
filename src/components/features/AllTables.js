import Table from './Table'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import Row from 'react-bootstrap/esm/Row'

const AllTables = () => {
	const tables = useSelector(state => getAllTables(state))

	return (
		<Row>
			{tables.map((table, i) => (
				<Table key={table.id} table={table} i={i}></Table>
			))}
		</Row>
	)
}
export default AllTables
