import React from 'react';
import {Header} from "../../components/header";
import TextContent from "../../components/textContent";
import OptionSelection from "../../components/optionSelection";
import {AsideWhiteBlock} from "../../components/asideWhiteBlock";
import SelectDistrict from "../../components/selectDistrict";
import {connect} from "react-redux";


const Main = (props) => {
    return (
        <div className="Main">
            <Header/>
            <AsideWhiteBlock text = {props.state.MainPage.text[0]} />
            <AsideWhiteBlock text = {props.state.MainPage.text[1]}/>
            {/*<TextContent/>*/}
            <OptionSelection />
            {/*<AsideWhiteBlock/>*/}
            {/*<SelectDistrict />*/}
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
