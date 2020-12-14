import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Routes from "./Routes";
import {AppStateType} from "../bll/store";
import {useSelector} from "react-redux";
import Alert from './common/Alert/Alert';
import {InitialStateType} from '../bll/appReducer';

function App() {
    const app = useSelector<AppStateType, InitialStateType>(state => state.app)

    return (
        <div className="App">
            <Header/>
            <Routes/>
            {app.isShowing && <Alert message={app.message} error={app.isError}/>}
        </div>
    );
}

export default App;
