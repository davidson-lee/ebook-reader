import { SESSION_TYPES } from '../types'

const INITIAL_STATE = {
    user: null,
    status: 'IDLE',
    errors: null
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case SESSION_TYPES.FETCH_USER:
            return {...state, user: action.payload};
        case SESSION_TYPES.SIGN_IN:
            return {...state, status: action.payload.status, error: action.payload.error};
        case SESSION_TYPES.SIGN_OUT:
            return {...state, ...action.payload};
        case SESSION_TYPES.ACKNOWLEDGE_ERROR:
            return {...state, error: action.payload};
        case SESSION_TYPES.INIT:
            return {...INITIAL_STATE};
        default:
            return state;
    }
}