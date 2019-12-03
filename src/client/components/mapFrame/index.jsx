import React from 'react';
import "./mapFrame.css"


export const MapFrame = (props) => {
    return (
        <div className="MapFrame Content">
            <iframe className= 'MapFrame-Frame' scrolling= "no"
                    src={props.url}
                    frameBorder="0" width="950" height="720">
            </iframe>
        </div>
    )
};