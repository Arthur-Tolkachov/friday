import {Dispatch} from 'redux'
import {authAPI} from '../dal/api/api'
import {authActions} from './actions'
import {RegistrationDataType} from '../utils/types/registration-types'

export const authThunks = {
    setRegistrationData: (data: RegistrationDataType) => (dispatch: Dispatch) => {
        dispatch(authActions.setFetching(true))
        authAPI.registration(data).then(response => {
            console.log(response)
        }).finally(() => {
            dispatch(authActions.setFetching(false))
        })
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
}