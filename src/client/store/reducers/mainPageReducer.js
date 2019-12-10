import {initialState} from "../initialState.jsx";

const SELECT_ACTIVE = "SELECT_ACTIVE";
const ADD_POINTS = "ADD_POINTS";
const SET_INIT_OPTIONS = "SET_INIT_OPTIONS";
const SET_INIT_PLACES = "SET_INIT_PLACES";

export const mainPageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SELECT_ACTIVE:
            newState = Object.assign({}, state, {MainPage: {active: action.num}});
            newState.active = action.num;
            newState.options.forEach((opt, index) => {
                if (index === action.num) {
                    newState.options[action.num].buttonStatus = "active";

                } else {
                    newState.options[index].buttonStatus = "";
                }
            });

            return newState;
        case ADD_POINTS:
            newState = Object.assign({}, state);
            newState.active = action.active;
            newState.options[action.active].points = action.points;
            return newState;
        case SET_INIT_OPTIONS:
            newState = Object.assign({}, state);
            newState.options = action.options;
            return newState;
        case SET_INIT_PLACES:
            newState = Object.assign({}, state);
            newState.places = action.places;
            return newState;
        default:
            return state;
    }
};


export const selectActive = (num) => ({type: SELECT_ACTIVE, num: num});
export const addPoints = (points, index) => ({type: ADD_POINTS, points: points, active: index});
export const setInitialOptions = (options) => ({type: SET_INIT_OPTIONS , options:options});
export const setInitialPlaces= (places) => ({type: SET_INIT_PLACES , places:places});