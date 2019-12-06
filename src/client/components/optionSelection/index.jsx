import React, {useState} from 'react';
import "./optionSection.css"
import MapFrame from "../mapFrame";
import {Tags} from "../tags";
import {connect} from "react-redux";
import Button from "../button"

const OptionSelection = (props) => {

    const [active, setActive] = useState(0);


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
                                setActive={setActive}
                                active={active}
                            />
                        )
                    })
                }
            </ul>


            <Tags tags={props.state.MainPage.options[active].tags}/>

            <div className="OptionSelection-Map">
                <MapFrame active = {active} />
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
