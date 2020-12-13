import React from 'react'
import s from './Preloader.module.css'

type PropsType = {
    className?: string
    style?: {
        [key: string]: string
    }
}
const Preloader:React.FC<PropsType> = ({className, style}) => {
    return (
        <div className={`${s.preloader} ${className}`} style={style}></div>
    )
}

export default Preloader