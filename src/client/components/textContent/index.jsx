import React from 'react';
import "./textContent.css";
import {AsideGrayBlock} from "../AsideGrayBlock";
import {connect} from "react-redux";


const TextContent = (props) => {
    return (
        <div className="Content TextContent">
            <AsideGrayBlock title={props.state.MainPage.title[1]} text = {props.state.MainPage.text[1]}/>
            <AsideGrayBlock title={props.state.MainPage.title[2]} text = {props.state.MainPage.text[2]}/>
        </div>
    )
};



export default connect(
    state =>({
        state:state
    }),
    dispatch => ({

    })
)(TextContent);
