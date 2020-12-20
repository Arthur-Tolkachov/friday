import {Dispatch} from 'redux'
import {authAPI} from '../dal/api/api'
import {appActions, authActions} from './actions'
import {RegistrationDataType} from '../utils/types/registration-types'

export const authThunks = {
    setRegistrationData: (data: RegistrationDataType) => async (dispatch: Dispatch) => {
        dispatch(authActions.setFetching(true))
        try {
            const result = await authAPI.registration(data)
            if (result.status === 201) {
                dispatch(appActions.setMessageState(true, `${result.data.addedUser.name} registered successfully`, false))
                dispatch(authActions.setIsRegistrationComplete(true))
            }
        } catch (e) {
            dispatch(appActions.setMessageState(true, `${e.response.data.error}`, true))
        } finally {
            dispatch(authActions.setFetching(false))
        }
    },
    login: (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
        try {
            const result = await authAPI.login(email, password, rememberMe)
            dispatch(authActions.setIsLoggedIn(true))
            console.log(result)
        } catch (e) {
            const error = e.response ? e.response.data.error : e.message
            console.log(error)
        }
    },
    recoverPassword: (email: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(authActions.setFetching(true))
            const result = await authAPI.forgotPassword(email)
            dispatch(authActions.setMessageRecoverPass(result.info))
        } catch (e) {
            const error = e.response ? e.response.data.error : e.message
            console.log(error)
        } finally {
            dispatch(authActions.setFetching(false))
        }
    }
}