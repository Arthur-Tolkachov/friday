import { authActions } from "./actions"
import { SET_IS_LOGGED_IN } from "./constants"

const initialState = {
    isLoggedIn: false
}

type ActionsType = ReturnType<typeof authActions.setIsLoggedIn>
type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN: {
            return {...state, isLoggedIn: action.isLoggedIn}
        }
        default: return state
    }
}

export default authReducer