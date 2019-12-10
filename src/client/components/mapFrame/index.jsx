import React from 'react';
import "./mapFrame.css"
import {connect} from "react-redux";
import {Map, Placemark, YMaps} from "react-yandex-maps";


const MapFrame = (props) => {
    return (
        <div className="MapFrame Content" id="maps">
            <YMaps>
                <Map state={{center: [55.76, 37.64], zoom: 12, showMap: false}} width="100%" height="100%">
                    {props.options[props.active].points.map((point, i) => {
                        return (
                            <Placemark
                                key={i}
                                geometry={[point.latitude, point.longitude]}
                                options={{
                                    preset: "islands#circleDotIcon",
                                    iconColor: point.color,
                                }}
                                modules={
                                    ['geoObject.addon.balloon']
                                }
                            />
                        )
                    })
                    }
                </Map>
            </YMaps>

        </div>
    )
};


export default connect(
    state => ({
        options: state.MainPage.options,
        active:state.MainPage.active
    }),
    dispatch => ({})
)(MapFrame);