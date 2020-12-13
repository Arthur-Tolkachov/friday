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

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type AppActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
// @ts-ignore
window.store = store;