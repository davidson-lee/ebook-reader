import { BOOK_TYPES } from '../types'

export const requestBooks = () => dispatch => {
    dispatch({
        type: BOOK_TYPES.LOADING_BOOK,
        payload: true
    })
    fetch(`https://us-central1-ebook-reader-35aa2.cloudfunctions.net/parseData`)
    .then(res => res.json())
    .then(json => {
        if (json.result !== 'error') {
            dispatch({
                type: BOOK_TYPES.SET_BOOK,
                payload: json.result.books
            })
        } else {
            dispatch({
                type: BOOK_TYPES.ACKNOWLEDGE_ERROR,
                payload: json.result
            })
        }
    }).catch(err => {
        dispatch({
            type: BOOK_TYPES.ACKNOWLEDGE_ERROR,
            payload: 'error'
        })
    })
}

export const booksInit = () => dispatch => {
    dispatch({
        type: BOOK_TYPES.INIT,
        payload: null
    })
}