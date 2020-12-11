import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;