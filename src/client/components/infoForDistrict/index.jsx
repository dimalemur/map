import React from 'react';
import "./infoForDistrict.css"


const Place = (props) => {
    return (
        <div className="Place">
            <div className="Place-PlaceNum PlaceNum">
                <div className="PlaceNum-Circle"></div>
                {props.place.place} место
            </div>
            <div className="Place-Text">
                {props.place.text}
            </div>
        </div>
    )
};

export const InfoForDistrict = (props) => {
    return (
        <div className="IfoForDistrict Content">
            <div className="InfoForDistrict-Title">
                <span>{props.districts.dist}</span>
            </div>

            <div className="InfoForDistrict-Place">
                {
                    props.districts.place.map((dist, i) => {
                        return (
                            <Place key={i} place={dist}/>
                        )
                    })
                }
            </div>

            <div className="IfoForDistrict-Text">
                {props.districts.text}
            </div>

            <div className="IfoForDistrict-AdditionalText">
                Доля жилой территории, на которой в шаговой доступности есть инфраструктура для жизни, %
            </div>
        </div>
    )
};