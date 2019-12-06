import React, {useState} from 'react';
import "./button.css"
import {changeMap} from "../../store/reducers/mainPageReducer";
import {connect} from "react-redux";


const Button = (props) => {

    const [className, setClassName] = useState("");

    const linkEvent = (event) => {
        event.preventDefault();
    };

    return (

        <li className={`NavBar-Item NavBar-Item_${props.state.MainPage.options[props.index].buttonStatus}`}
            onClick={() => {
                props.changeOpt(props.index);
                props.setActive(props.index);
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
        changeOpt: (index) => {
            dispatch(changeMap(index));
        }
    })
)(Button);
