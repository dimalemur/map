import React from 'react';
import {Header} from "../../components/header";
import OptionSelection from "../../components/optionSelection";
import {AsideWhiteBlock} from "../../components/asideWhiteBlock";
import {connect} from "react-redux";
import Places from "../../components/places";


const Main = (props) => {
    return (
        <div className="Main">
            <Header/>
            <AsideWhiteBlock text = {props.state.MainPage.text[0]} />
            <AsideWhiteBlock text = {props.state.MainPage.text[1]}/>
            <OptionSelection />
            <Places/>
        </div>
    )
};


export default connect(
    state =>({
        state:state
    }),
    dispatch => ({

    })
)(Main);
