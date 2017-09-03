import {SET_FILTERS} from "../actions/types";
import _ from 'lodash';
//state is not application state, just the state
//this reducer is responsible for, e.g. creating books
//if state is undefined, set to null

export default function(state = {}, action) {
    switch (action.type) {
        case SET_FILTERS:

            let newState = _.union([...state], [action.payload]);

            return newState;
    }

    return state;
}