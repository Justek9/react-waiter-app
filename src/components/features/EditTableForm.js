import { getTableById, editTableRequest, getAllTables } from '../../redux/tablesRedux'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import TableForm from './TableForm'

const EditTableForm = () => {
	const { id } = useParams()
	const table = useSelector(state => getTableById(state, Number(id)))
	const tables = useSelector(state => getAllTables(state))
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = table => {
		dispatch(editTableRequest(table))
		navigate('/')
	}

	if (!table) return <Navigate to='/' />

	return (
		<>
			<h2 className='mb-3'>Table: {tables.indexOf(table)+1}</h2>
			<TableForm
				action={handleSubmit}
				actionText='Update'
				status={table.status}
				id={table.id}
				maxPeople={table.maxPeople}
				people={table.people}
				bill={table.bill}
			/>
		</>
	)
}

export default EditTableForm
