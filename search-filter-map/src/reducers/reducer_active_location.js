import {LOCATION_SELECTED} from "../actions/types";
//In this context, state is not application state,
// just the state this reducer is responsible for.
//if state is undefined, set to empty []
export default function(state = [], action) {
    switch (action.type) {
        case LOCATION_SELECTED:
            return action.payload;
        default:
            return state;
    }
}