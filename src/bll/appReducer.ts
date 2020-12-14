import {AppActionsType} from './store';
import {appActions} from './actions';

const initialState = {
    isShowing: false,
    message: "",
    isError: false,
}

type ActionsType = AppActionsType<typeof appActions>
export type InitialStateType = typeof initialState

//@ts-ignore
const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_MESSAGE_STATE': {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default appReducer;