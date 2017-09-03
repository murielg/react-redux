import {SET_FILTERS} from "../actions/types";
//state is not application state, just the state
//this reducer is responsible for, e.g. creating books
//if state is undefined, set to null

export default function(state = {}, action) {
    switch (action.type) {
        case SET_FILTERS:
            console.log(SET_FILTERS);
            return action.payload;
    }

    return state;
}

