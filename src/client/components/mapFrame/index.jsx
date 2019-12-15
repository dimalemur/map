import React from 'react';
import "./mapFrame.css"
import {connect} from "react-redux";
import {Map, ObjectManager, Placemark, YMaps} from "react-yandex-maps";


const MapFrame = (props) => {
    return (
        <div className="MapFrame Content" id="maps">
            <iframe
    src={props.options[props.active].points}
    width="100%" height="100%" frameBorder="0"/>
        </div>
    )
};


export default connect(
    state => ({
        options: state.MainPage.options,
        active: state.MainPage.active
    }),
    dispatch => ({})
)(MapFrame);