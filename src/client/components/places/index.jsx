import React from 'react'
import "./places.css"
import {connect} from "react-redux";

const Place = (props) => {
    return (
        <div className="Places-Place Place">
            <div className=" Place-Title Title">
                <span className="Title-Text">{props.place.title}</span>
            </div>
            <div className="Place-Address">
                <span className="Rubric">Адрес:</span> {props.place.address}
            </div>
            <div className="Place-TelNumber">
                <span className="Rubric">Номер:</span> tel <a href={`tel:${props.place.telNumber}`}>{props.place.telNumber}</a>
            </div>
            <div className="Place-Link Link">
                <span className="Rubric">Ссылка:</span> <a className="Link-Link" href={props.place.link}>{props.place.link}</a>
            </div>
        </div>
    )
};


const Places = (props) => {
    return (
        <div className="Places Content" id = "Events">
            <div className="Places-Title">
                Куда сходить в Москве
            </div>
            {
                props.places.map( (place, i) => {
                    return (
                        <Place key={i} place = {place}/>
                    )
                } )
            }
        </div>
    )
};

export default connect(
    state =>({
        places:state.MainPage.places
    }),
    dispatch => ({

    })
)(Places);