import update from 'immutability-helper'
import { LOGIN } from '../constants'

const initialState = {
    isLoggedIn: false
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return update(state, {
                $set: {
                    isLoggedIn: true
                }
            })
        default:
            return state
    }
}