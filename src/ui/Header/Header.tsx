import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import { PATH } from "../Routes";

const Header:React.FC = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <ul>
                    <li>
                        <NavLink to={PATH.MAIN}>Main</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.AUTH}>Authorization</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.REG}>Registration</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.PROFILE}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.PASSWORD_RECOVER}>Password recover</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.ENTER_NEW_PASSWORD}>Enter new password</NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.COMPONENTS}>Test</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;