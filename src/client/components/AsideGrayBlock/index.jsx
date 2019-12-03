import React from 'react';
import "./asideGray.css"


export const AsideGrayBlock = (props) => {
    return (
        <div className="AsideGrayBlock">
            <div className="AsideGrayBlock-Title">
                <span className="Title_normal">{props.title}</span>
            </div>
            <div className="AsideGrayBlock-Text">
                <span className="Text_normal">{props.text}</span>
            </div>
        </div>
    )
};