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
            return _.union([...state], [action.payload]);
            // return state.locations.map(location =>
            //         (location.id === action.id) ? { ...location, active: !location.active} : location
            //
            // );

        case REMOVE_FILTER:
            return _.omit(state, action.payload);

        default:
            return state;
    }

}