import { FETCH_USER, SIGN_IN, SIGN_OUT, ACKNOWLEDGE_ERROR } from '../types'

const INITIAL_STATE = {
    user: '0',
    status: 'IDLE',
    errors: null
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_USER:
            return {...state, user: action.payload};
        case SIGN_IN:
            return {...state, status: action.payload.status, error: action.payload.error};
        case SIGN_OUT:
            return {...state, ...action.payload};
        case ACKNOWLEDGE_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}