import {addPoints} from "../reducers/mainPageReducer"
import {selectActive} from "./mainPageReducer";

export const asyncGetPoints = (index) => dispatch => {
    fetch('/ololo', {
        method: 'POST',
        body: JSON.stringify({val: index}),
    })
        .then((response) => response.json())
        .then((data) => {
            let result = data.map((point) => {
                return {
                    latitude: point["coordinates"][1],
                    longitude: point["coordinates"][0],
                    color: point["color"]
                }
            });

            dispatch(addPoints(result,index));

        })
        .catch((error) => console.error(error));
};


