import { combineReducers } from 'redux';
import bookReducer from './books'
import sessionReducer from './session'

const rootReducer = combineReducers({
    books: bookReducer,
    sessions: sessionReducer
})

export default rootReducer