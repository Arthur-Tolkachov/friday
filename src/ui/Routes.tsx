import {Route, Switch} from "react-router-dom";
import React from "react";
import Main from "./Main/Main";
import Authorization from "./Main/Authorization/Authorization";
import Registration from "./Main/Redistration/Registration";
import Profile from "./Main/Profile/Profile";
import PasswordRecover from "./Main/PasswordRecover/PasswordRecover";
import EnterNewPassword from "./Main/EnterNewPassword/EnterNewPassword";
import PageNotFound from "./Main/PageNotFound/PageNotFound";
import Test from "./Main/Test/Test";

export const PATH = {
    AUTH: "/authorization",
    REG: "/registration",
    MAIN: "/main",
    PROFILE: "/profile",
    PASSWORD_RECOVER: "/recover",
    ENTER_NEW_PASSWORD: "/new-password",
    COMPONENTS: "/test",
}

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Main/>}/>
            <Route exact path={PATH.MAIN} render={() => <Main/>}/>
            <Route path={PATH.AUTH} render={() => <Authorization/>}/>
            <Route path={PATH.REG} render={() => <Registration/>}/>
            <Route path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route path={PATH.PASSWORD_RECOVER} render={() => <PasswordRecover/>}/>
            <Route path={PATH.ENTER_NEW_PASSWORD} render={() => <EnterNewPassword/>}/>
            <Route path={PATH.COMPONENTS} render={() => <Test/>}/>
            <Route render={() => <PageNotFound/>}/>
            <Route/>
        </Switch>
    )
}

export default Routes;