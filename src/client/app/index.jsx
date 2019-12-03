import React from 'react';
import {Main} from "../pages/main";
import "./app.css"


export const App = (props) => {
    return (
        <div className="App">
            <Main store = {props.store}/>
        </div>
    )
};