import React from 'react'
import s from './AuthContainer.module.css'

type PropsType = {
    className?: string
    style?: {
        [key:string]: string
    }
}

const AuthContainer:React.FC<PropsType> = ({children, className, style}) => {
    return (
        <div className={`${s.container} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default AuthContainer