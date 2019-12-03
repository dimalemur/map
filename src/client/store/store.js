import React from "react";
import {combineReducers, createStore} from "redux";
import {mainPageReducer} from "./reducers/mainPageReducer.js";


let reducers = combineReducers({
    MainPage: mainPageReducer
});


export let store = createStore(reducers);


