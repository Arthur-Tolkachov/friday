import {SET_IS_LOGGED_IN} from './constants'

export const authActions = {
    setIsLoggedIn(isLoggedIn: boolean) {
        return {type: SET_IS_LOGGED_IN, isLoggedIn}
    },
}