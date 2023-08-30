import { getTableById, editTable } from '../../redux/tablesRedux'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import TableForm from './TableForm'

const EditTableForm = () => {
	const { id } = useParams()
	const table = useSelector(state => getTableById(state, id))
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubit = table => {
		dispatch(editTable(...table, id))
		navigate('/')
	}

	if (!table) return <Navigate to='/' />
	else
		return (
			<TableForm
				action={handleSubit}
				status={table.status}
				id={table.id}
				maxPeople={table.maxPeople}
				people={table.people}
				bill={table.bill}
			/>
		)
}

export default EditTableForm
