import React, {useEffect, useState} from 'react'
import s from './Alert.module.css'
import {useDispatch} from 'react-redux'
import {appActions} from '../../../bll/actions';

type PropsType = {
    message: string
    error: boolean
}

const Alert:React.FC<PropsType> = ({message, error}) => {
    const dispatch = useDispatch()
    const [timeoutID, setTimeoutID] = useState<number>(0)
    const progressDuration = 3000

    useEffect(() => {
        const id:number = window.setTimeout(() => {
            dispatch(appActions.setMessageState(false, "", false))
        }, progressDuration)
        setTimeoutID(id)
        return clearTimeout(timeoutID)
    },[])

    const handler = () => {
        dispatch(appActions.setMessageState(false, "", false))
    }
    const messageStyle = error ? `${s.alert} ${s.error}` : s.alert

    return (
        <div className={messageStyle} onClick={handler}>
            <div className={s.progressbar} style={{animationDuration: `${progressDuration}ms`}}></div>
            <span>{`${message.trim()[0].toUpperCase()}${message.slice(1)}`}</span>
        </div>
    )
}

export default Alert;