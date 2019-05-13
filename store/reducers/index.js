import { combineReducers } from 'redux';
import bookReducer from './books'
import sessionReducer from './session'
import styleReducer from './style'

const rootReducer = combineReducers({
    books: bookReducer,
    sessions: sessionReducer,
    style: styleReducer
})

export default rootReducer