import {Dispatch} from 'redux'
import {authAPI} from '../dal/api/api'
import {authActions} from './actions'

export const authThunks = {
    setRegistrationData: (data: any) => (dispatch: Dispatch) => {
        authAPI.registration(data).then(response => {
            console.log(response)
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