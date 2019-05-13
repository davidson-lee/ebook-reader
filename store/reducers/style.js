import { STYLE_TYPES } from '../types'

const INITIAL_STATE = {
    isLoadingFonts: false,
    loadedFonts: false
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case STYLE_TYPES.LOADING_FONT:
            return {...state, isLoadingFonts: true};
        case STYLE_TYPES.FONT_LOAD_SUCCESS:
            return {...state, isLoadingFonts: false, loadedFonts: action.payload};
        default:
            return state;
    }
}