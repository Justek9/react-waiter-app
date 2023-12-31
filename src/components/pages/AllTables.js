import Table from '../features/Table'
import Row from 'react-bootstrap/esm/Row'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'

const AllTables = () => {
	const tables = useSelector(state => getAllTables(state))

	return (
		<>
			<Row>
				{tables.map((table, i) => (
					<Table key={i} table={table}></Table>
				))}
			</Row>
		</>
	)
}
export default AllTables
