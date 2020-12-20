import { authActions } from "./actions"
import {AppActionsType} from './store'

const initialState = {
    isLoggedIn: false,
    isFetching: false,
    messageRecoverPass: null as string | null,
    isRegistrationComplete: false,
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
        case 'SET_MESSAGE_RECOVER_PASS': {
            return {...state, messageRecoverPass: action.message}
        }
        case 'SET_IS_REGISTRATION_COMPLETE': {
            return {...state, isRegistrationComplete: action.bool}
        }
        default: return state
    }
}

export default authReducer