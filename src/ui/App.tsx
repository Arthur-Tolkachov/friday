import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {HashRouter} from "react-router-dom";
import Routes from "./Routes";
import {store} from "../bll/store";
import {Provider} from "react-redux";

function App() {
    return (
        <div className="App">
            <HashRouter basename="/friday">
                <Provider store={store}>
                    <Header/>
                    <Routes/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
