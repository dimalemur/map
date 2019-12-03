import React from 'react';
import {Header} from "../../components/header";
import {TextContent} from "../../components/textContent";
import {OptionSelection} from "../../components/optionSelection";
import {AsideWhiteBlock} from "../../components/asideWhiteBlock";
import {SelectDistrict} from "../../components/selectDistrict";

export const Main = (props) => {
    return (
        <div className="Main">
            <Header store={props.store}/>
            <AsideWhiteBlock title={props.store.getState().MainPage.title[0]} text = {props.store.getState().MainPage.text[0]}/>
            <TextContent store={props.store}/>
            <OptionSelection store = {props.store} />
            <AsideWhiteBlock title = {props.store.getState().MainPage.title[3]} text = {props.store.getState().MainPage.text[3]}/>
            <SelectDistrict districts = {props.store.getState().MainPage.districts} />
        </div>
    )
};