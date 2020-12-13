import {Dispatch} from "redux";
import {authAPI} from "../dal/api/api";

export const authThunks = {
    setRegistrationData: (data: any) => (dispatch: Dispatch) => {
        authAPI.registration(data).then(response => {
            console.log(response)
        })
    }
}