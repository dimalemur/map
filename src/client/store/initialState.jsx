import React from "react";
import {addPoints, selectActive} from "./reducers/mainPageReducer";

// fetch('/data', {
//     method: 'POST',
//     body: JSON.stringify({val: index}),
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         let result = data.map((point) => {
//             return {
//                 latitude: point["coordinates"][1],
//                 longitude: point["coordinates"][0],
//                 color: point["color"]
//             }
//         });
//
//         dispatch(addPoints(result, index));
//         dispatch(selectActive(index));
//
//     })
//     .catch((error) => console.error(error));

export const initialState = {
    active: 0,
    text: [
        "Москва - огромный город для жизни и для развлечений. Только подумать, 12.5 миллионов совершенно разных людей, чьи вкусы и потребности уникальны.",
        "Опираясь на отзывы людей из социальных сетей можно разделить районы города на три категории:"
    ],
    options: [
        {
            buttonName: "",
            buttonStatus: "",
            tags:[],
            points:[]
        }
    ],

    places: [
        {
            title:"",
            telNumber:"",
            address:"",
            link:""
        }
    ]
};


