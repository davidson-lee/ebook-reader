import { authRef } from '../../config/firebaseConfig'
import { SESSION_TYPES } from '../types'

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        user
            ? dispatch({
                type: SESSION_TYPES.FETCH_USER,
                payload: user
            })
            : dispatch({
                type: SESSION_TYPES.FETCH_USER,
                payload: null
            });
    })
}

export const signIn = (email, password) => dispatch => {
    authRef
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            user
                ? dispatch({
                    type: SESSION_TYPES.SIGN_IN,
                    payload: {
                        status: 'SIGN_IN_SUCCESS',
                        error: null
                    }
                })
                : dispatch({
                    type: SESSION_TYPES.SIGN_IN,
                    payload: {
                        status: 'SIGN_IN_FAIL',
                        error: 'Unhandled Error'
                    }
                })
        }).catch(err => {
            dispatch({
                type: SESSION_TYPES.SIGN_IN,
                payload: {
                    status: 'SIGN_IN_FAIL',
                    error: err.message
                }
            })
        })
}

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(user => {
            dispatch({
                type: SESSION_TYPES.SIGN_OUT,
                payload: {
                    user: null,
                    status: 'SIGN_OUT_SUCCESS'
                }
            })
        })
}

export const acknowledgeError = () => dispatch => {
    dispatch({
        type: SESSION_TYPES.ACKNOWLEDGE_ERROR,
        payload: null
    })
}

export const sessionInit = () => dispatch => {
    dispatch({
        type: SESSION_TYPES.INIT,
        payload: null
    })
}