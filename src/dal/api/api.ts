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
}

type LoginAPIType = {
    "_id": string
    "email": string
    "rememberMe": boolean
    "isAdmin": boolean
    "name": string
    "verified": boolean
    "publicCardPacksCount": number
    "created": string
    "updated": string
    "__v": number
    "token": string
    "tokenDeathTime": number
}