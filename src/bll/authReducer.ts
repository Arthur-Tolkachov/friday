import { authActions } from "./actions"
import {AppActionsType} from './store'

const initialState = {
    isLoggedIn: false,
    isFetching: false,
}

type ActionsType = AppActionsType<typeof authActions>
type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_IS_LOGGED_IN': {
            return {...state, isLoggedIn: action.isLoggedIn}
        }
        case 'SET_FETCHING': {
            return {...state, isFetching: action.bool}
        }
        default: return state
    }
}

export default authReducer