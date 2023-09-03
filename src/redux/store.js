import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import initialState from './initialState'
import tablesReducer from './tablesRedux'
import errorReducer from './errorRedux'
import isloadingReducer from './isLoadingRedux'

const subreducers = {
	tables: tablesReducer,
	loading: isloadingReducer,
	error: errorReducer,
}

const reducer = combineReducers(subreducers)
const store = createStore(
	reducer,
	initialState,

	compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
)

export default store
