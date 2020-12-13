import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: "http://localhost:7542/2.0/",
})


export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginAPIType>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    registration(data:any) {
        return instance.post('auth/register', data)
    }
}

type LoginAPIType = {
    "_id": string
    "email": string
    "rememberMe": boolean
    "name": string
    "publicCardPacksCount": number
    "avatar"?: string
}