import React from 'react';
import "./textContent.css";
import {AsideWhiteBlock} from "../asideWhiteBlock";
import {AsideGrayBlock} from "../AsideGrayBlock";


export const TextContent = (props) => {
    return (
        <div className="Content TextContent">
            <AsideGrayBlock title={props.store.getState().MainPage.title[1]} text = {props.store.getState().MainPage.text[1]}/>
            <AsideGrayBlock title={props.store.getState().MainPage.title[2]} text = {props.store.getState().MainPage.text[2]}/>
        </div>
    )
};