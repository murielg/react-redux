import {
    REMOVE_FILTER,
    ADD_FILTER
} from "../actions/types";

//state is not application state, just the state
//this reducer is responsible for, e.g. creating books
//if state is undefined, set to null

export default function(state = [] , action) {
    switch (action.type) {
        case ADD_FILTER:
            //let newState = _.union([...state], [action.payload]);
            //return newState;
            return [...state, action.payload];

        case REMOVE_FILTER:
            return action.payload;

        default:
            return state;
    }

}