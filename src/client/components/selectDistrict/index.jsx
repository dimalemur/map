import React, {useState} from 'react';
import "./selectDistrict.css"
import {InfoForDistrict} from "../infoForDistrict";
import {connect} from "react-redux";


const SelectDistrict = (props) => {

    const [active, setActive] = useState(0);

    const changeDistrict = (event) => {
        setActive(event.target.value);
    };

    return (
        <div className="SelectDistrict Content">
            <select className="SelectDistrict-Select Select" onChange={changeDistrict}>
                {
                    props.districts.map((dst, i) => {
                        return (
                            <option className="SelectDistrict-Item" key={i} value={i}>
                                {dst.dist}
                            </option>
                        )
                    })
                }
            </select>

            <InfoForDistrict districts={props.districts[active]}/>


        </div>
    )
};


export default connect(
    state => ({
        districts: state.MainPage.districts
    }),
    dispatch => ({})
)(SelectDistrict);