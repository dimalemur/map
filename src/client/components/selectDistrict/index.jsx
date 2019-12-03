import React from 'react';
import "./selectDistrict.css"

export const SelectDistrict = (props) => {

    const changeDistrict = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className="SelectDistrict Content">
            <select className="SelectDistrict-Select Select" onChange={changeDistrict}>
                {
                    props.districts.map((dst, i) => {
                        return (
                            <option className="SelectDistrict-Item" key={i} value={dst.dist}>
                                {dst.dist}
                            </option>
                        )
                    })
                }
            </select>


        </div>
    )
};