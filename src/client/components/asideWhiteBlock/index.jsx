import React from 'react';
import "./aside.css"


export const AsideWhiteBlock = (props) => {
    return (
        <div className="AsideWhiteBlock Content">
            <div className="AsideWhiteBlock-Text">
                <span className= "Text">{props.text}</span>
            </div>
        </div>
    )
};

