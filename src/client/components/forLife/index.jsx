import React from 'react';
import {MapFrame} from "../mapFrame";


export const ForLife = (props) => {
    return (
        <div className="ForLife">
            <MapFrame url = {props.store.getState().MainPage.mapUrl}/>
        </div>
    )
};