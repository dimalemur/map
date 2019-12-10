import React from "react";
import {combineReducers, createStore,applyMiddleware} from "redux";
import {mainPageReducer} from "./reducers/mainPageReducer.js";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    MainPage: mainPageReducer
});


export let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));


