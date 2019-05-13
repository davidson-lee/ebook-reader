import { BOOK_TYPES } from '../types'

const INITIAL_STATE = {
    books: [null],
    loadingBooks: false,
    error: null
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case BOOK_TYPES.LOADING_BOOK: {
            return {...state, loadingBooks: action.payload};
        }
        case BOOK_TYPES.SET_BOOK: {
            return {...state, books: action.payload, loadingBooks: false};
        }
        case BOOK_TYPES.ACKNOWLEDGE_ERROR: {
            return {...state, error: action.payload, loadingBooks: false};
        }
        case BOOK_TYPES.INIT: {
            return {...INITIAL_STATE};
        }
        default:
            return state;
    }
};

export default bookReducer