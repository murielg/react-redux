import _ from 'lodash';

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
            return _.union([action.payload], [...state]);

        case REMOVE_FILTER:
            return state.filter(item => item !== action.payload);

        default:
            return state;
    }

}