import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: "http://localhost:7542/2.0/",
})

const messageRequestForPass = "<div style='background-color: #508cff; padding: 15px; color: black'>" +
    "If you want to recover your password: " +
    "<a style='color: white' href='http://localhost:3000/friday#/friday/new-password/$token$'>Click here</a></div>"

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginAPIType>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    registration(data:any) {
        return instance.post<RegistrationData>('auth/register', data)
    },
    forgotPassword(email: string) {
        return instance.post<ForgotPassAPIType>(`auth/forgot`, {email, from: 'test-front-admin', message: messageRequestForPass})
            .then(res => res.data)
    },
}

type LoginAPIType = {
    "_id": string
    "email": string
    "rememberMe": boolean
    "name": string
    "publicCardPacksCount": number
    "avatar"?: string
}

type RegistrationData = {
    addedUser: {
        name: string
    }
}

type ForgotPassAPIType = {
    "info": string
}