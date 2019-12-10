import React from 'react';
import "./header.css";

export const Header = (props) => {
    return (
        <div className="Header Content Content_green">
            <div className="Header-Inner">
                <h3 className="Header-Title">Вылазка</h3>
                <div className="Header-Nav Nav">
                    <div className="Nav-Map Map"><a href="#maps" className = "Map-Link">Карты</a></div>
                    <div className="Nav-Rating"><a href="#Events" className="Nav-Link">Места</a></div>
                </div>
            </div>
        </div>
    )
};