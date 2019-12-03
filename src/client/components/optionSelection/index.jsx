import React, {useState} from 'react';
import "./optionSection.css"
import {changeMap} from "../../store/reducers/mainPageReducer";
import {MapFrame} from "../mapFrame";
import {Tags} from "../tags";


export const Button = (props) => {

    const [className, setClassName] = useState("");


    const linkEvent = (event) => {
        event.preventDefault();
    };
    // NavBar-Item_active
    return (

        <li className={`NavBar-Item NavBar-Item_${props.store.getState().MainPage.options[props.index].buttonStatus}`}
            onClick={() => {
                props.store.dispatch(changeMap(props.index));
                props.setActive(props.index);
            }}>
            <a href="#" onClick={linkEvent}>
                {props.btn}
            </a>
        </li>

    )

};


export const OptionSelection = (props) => {

    const [active, setActive] = useState(0);


    return (
        <div className="OptionSelection Content">
            <p className="OptionSelection-Title">
                Москва...
            </p>
            <ul className="OptionSelection-NavBar NavBar">
                {
                    props.store.getState().MainPage.options.map((btn, index) => {
                        return (
                            <Button
                                key={index}
                                index={index}
                                btn={btn.buttonName}
                                store={props.store}
                                setActive={setActive}
                                active={active}
                            />
                        )
                    })
                }
            </ul>


            <Tags tags={props.store.getState().MainPage.options[active].tags}/>

            <div className="ForLife">
                <MapFrame url={props.store.getState().MainPage.options[active].mapUrl}/>
            </div>

        </div>
    )
};