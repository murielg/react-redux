import {LOCATION_SELECTED} from "../actions/types";
//state is not application state, just the state
//this reducer is responsible for, e.g. creating books
//if state is undefined, set to null

export default function(state = [], action) {
    switch (action.type) {
        case LOCATION_SELECTED:
            return action.payload;
        default:
            return state;
    }

}