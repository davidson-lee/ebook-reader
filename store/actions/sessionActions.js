import { authRef } from '../../config/firebaseConfig'
import { FETCH_USER, SIGN_IN, SIGN_OUT, ACKNOWLEDGE_ERROR } from '../types'

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        user
            ? dispatch({
                type: FETCH_USER,
                payload: user
            })
            : dispatch({
                type: FETCH_USER,
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
                    type: SIGN_IN,
                    payload: {
                        status: 'SIGN_IN_SUCCESS',
                        error: null
                    }
                })
                : dispatch({
                    type: SIGN_IN,
                    payload: {
                        status: 'SIGN_IN_FAIL',
                        error: 'Unhandled Error'
                    }
                })
        }).catch(err => {
            dispatch({
                type: SIGN_IN,
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
                type: SIGN_OUT,
                payload: {
                    user: null,
                    status: 'SIGN_OUT_SUCCESS'
                }
            })
        })
}

export const acknowledgeError = () => dispatch => {
    dispatch({
        type: ACKNOWLEDGE_ERROR,
        payload: null
    })
}