import React from 'react'
import s from './SuperButtonLink.module.css'
import {NavLink} from 'react-router-dom'

type PropsType = {
    to: string,
    className?: string
    style?: {
        [key: string]: string
    }
}
const SuperButtonLink: React.FC<PropsType> = (
    {
        to,
        children,
        className,
        style
    }) => {
    return (
        <NavLink to={to} className={`${s.link} ${className}`}>{children}</NavLink>
    )
}


export default SuperButtonLink