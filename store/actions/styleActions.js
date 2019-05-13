import { STYLE_TYPES } from '../types'
import { Font } from 'expo'

export const getFonts = () => dispatch => {
    dispatch({
        type: STYLE_TYPES.LOADING_FONT,
        payload: true
    })
    Font.loadAsync({
        'Bold': require('res/fonts/OpenSans-Bold.ttf'),
        'SemiBold': require('res/fonts/OpenSans-SemiBold.ttf'),
        'Regular': require('res/fonts/OpenSans-Regular.ttf'),
    }).then(() => {
        dispatch({
            type: STYLE_TYPES.FONT_LOAD_SUCCESS,
            payload: true
        })
    }).catch(() => {
        dispatch({
            type: STYLE_TYPES.FONT_LOAD_SUCCESS,
            payload: false
        })
    })
}