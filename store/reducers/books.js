const INITIAL_STATE = {
    books: null,
};

const applySetBooks = (state, action) => ({
    ...state,
    books: action.books
});

const bookReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'BOOKS_SET': {
            return applySetBooks(state, action);
        }
        default:
            return state;
    }
};

export default bookReducer