import { setLoading } from './isLoadingRedux'
import { setError } from './errorRedux'
import { API_URL } from '../config'

//selectors
export const getAllTables = ({ tables }) => {
	return tables
}

export const getTableById = ({ tables }, id) => {
	return tables.filter(table => table.id === Number(id))[0]
}

// actions
const createActionName = actionName => `app/tables/${actionName}`
const LOAD_TABLES = createActionName('LOAD_TABLES')
const EDIT_TABLE = createActionName('EDIT_TABLE')
const DELETE_TABLE = createActionName('DELETE_TABLE')
const ADD_TABLE = createActionName('ADD_TABLE')

// action creators
export const loadTables = payload => ({ type: LOAD_TABLES, payload })
export const editTable = payload => ({ type: EDIT_TABLE, payload })
export const deleteTable = payload => ({ type: DELETE_TABLE, payload })
export const addTable = payload => ({ type: ADD_TABLE, payload })

export const editTableRequest = table => {
	return dispatch => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...table,
			}),
		}
		fetch(`${API_URL}/tables/${table.id}`, options).then(() => dispatch(editTable(table, table.id)))
	}
}

export const deleteTableRequest = table => {
	return dispatch => {
		const options = {
			method: 'DELETE',
		}
		fetch(`${API_URL}/tables/${table.id}`, options).then(() => dispatch(deleteTable(table.id)))
	}
}

export const addTableRequest = table => {
	return dispatch => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(table),
		}
		fetch(`${API_URL}/tables`, options)
			.then(() => {
				dispatch(addTable(table))
			})
			.then(() => {
				dispatch(fetchTables())
			})
	}
}

export const fetchTables = () => {
	return dispatch => {
		dispatch(setLoading(true))
		fetch(`${API_URL}/tables`)
			.then(res => res.json())
			.then(tables => {
				dispatch(setLoading(false))
				dispatch(loadTables(tables))
			})
			.catch(error => {
				console.error(error)
				dispatch(setLoading(false))
				dispatch(setError(true))
			})
	}
}

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case LOAD_TABLES:
			return [...action.payload]
		case EDIT_TABLE:
			return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table))
		case DELETE_TABLE:
			return statePart.filter(table => table.id !== action.payload)
		case ADD_TABLE:
			return [...statePart, { ...action.payload }]
		default:
			return statePart
	}
}

export default tablesReducer
