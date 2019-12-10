import React, {useState} from 'react';
import "./button.css"
import {connect} from "react-redux";
import {asyncGetPoints} from "../../store/reducers/Points";
import {addPoints, selectActive} from "../../store/reducers/mainPageReducer";

const Button = (props) => {
    const linkEvent = (event) => {
        event.preventDefault();
    };

    return (

        <li className={`NavBar-Item NavBar-Item_${props.state.MainPage.options[props.index].buttonStatus}`}
            onClick={() => {
                props.selectActive(props.index)
            }}>
            <a href="#" onClick={linkEvent}>
                {props.btn}
            </a>
        </li>
    )

};

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        getPoints: (index) => {
            dispatch(asyncGetPoints(index))
        },
        selectActive: (index) => {
            dispatch(selectActive(index))
        }
    })
)(Button);
