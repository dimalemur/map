import {initialState} from "../initialState.jsx";

const SELECT_ACTIVE = "SELECT_ACTIVE";

export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ACTIVE:
            state.options.forEach((opt, index) => {
                if (index === action.num) {
                    state.options[action.num].buttonStatus = "active";
                } else {
                    state.options[index].buttonStatus = "";
                }
            });
            return state;
        default:
            return state;
    }
};


export const changeMap = (num) => ({type: SELECT_ACTIVE, num: num});