import TableForm from './TableForm'
import { useDispatch } from 'react-redux'
import { addTableRequest } from '../../redux/tablesRedux'
import { useNavigate } from 'react-router-dom'

const AddTableForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = table => {
		dispatch(addTableRequest(table))
		navigate('/')
	}

	return <TableForm action={handleSubmit} actionText='Add Table' />
}
export default AddTableForm
