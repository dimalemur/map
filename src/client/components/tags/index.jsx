import React from 'react';
import "./tags.css"


export const Tags = (props) => {
    return (
        <div className="Tags">

            {props.tags.map((tag,i) => {
                    return (
                        <div className="Item Tags-Item" key={i}>
                            <div className="Item-Lst" style={{background: `${tag.color}`}}>
                            </div>
                            <div className="Item-Text">
                                {tag.text}
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
};