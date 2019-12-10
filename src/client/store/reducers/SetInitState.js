import {setInitialOptions, setInitialPlaces} from "./mainPageReducer";

export const setInitOptions = () => dispatch => {
    fetch('/init', {
        method: 'POST',
        body: JSON.stringify({val: 1}),
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(setInitialOptions(data));
        })
        .catch((error) => console.error(error));
};


export const setInitPlaces = () => dispatch => {
    fetch('/initPlaces', {
        method: 'POST',
        body: JSON.stringify({val: 1}),
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(setInitialPlaces(data));
            console.log(data)
        })
        .catch((error) => console.error(error));
};