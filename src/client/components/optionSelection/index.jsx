import React  from 'react';
import "./optionSection.css"
import MapFrame from "../mapFrame";
import {Tags} from "../tags";
import {connect} from "react-redux";
import Button from "../button"

const OptionSelection = (props) => {

    return (
        <div className="OptionSelection Content">
            <ul className="OptionSelection-NavBar NavBar">
                {
                    props.state.MainPage.options.map((btn, index) => {
                        return (
                            <Button
                                key={index}
                                index={index}
                                btn={btn.buttonName}
                            />
                        )
                    })
                }
            </ul>


            <Tags tags={props.state.MainPage.options[props.state.MainPage.active].tags}/>

            <div className="OptionSelection-Map">
                <MapFrame active = {props.state.MainPage.active} />
            </div>


        </div>
    )
};

export default connect(
    state =>({
        state:state
    }),
    dispatch => ({

    })
)(OptionSelection);
