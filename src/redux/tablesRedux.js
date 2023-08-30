//selectors
const URL = 'http://localhost:3131/tables'

// actions
const createActionName = actionName => `app/tables/${actionName}`
const LOAD_TABLES = createActionName('LOAD_TABLES')
const EDIT_TABLE = createActionName('EDIT_TABLE')

// action creators
export const loadTables = payload => ({ type: LOAD_TABLES, payload })
export const editTable = payload => ({ type: EDIT_TABLE, payload })
export const editTableRequest =()=>{
	// return (dispatch)=>{
	// 	const options = {
	// 		method: "PATCH",
	// 		headers: {
	// 			"Contest-Type":"applcation/json"
	// 		},
	// 		body: JSON.stringify({})
	// 	}

	// 	fetch(`${URL}/id`, options).then(()=>dispatch(editTable()))
	// }
}

export const fetchTables = () => {
	return dispatch => {
		fetch(URL)
			.then(res => res.json())
			.then(tables => dispatch(loadTables(tables)))
	}
}

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case LOAD_TABLES:
			return [...action.payload]
		case EDIT_TABLE:
			return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table))
		default:
			return statePart
	}
}

export default tablesReducer
