import React from 'react'
import s from './Title.module.css'

type PropsType = {
    value: string
    className?: string
    style?: {
        [key: string]: string
    }
}

const Title:React.FC<PropsType> = ({value, className, style}) => {
    return (
        <div className={`${s.title} ${className}`} style={style}>{value}</div>
    )
}

export default Title