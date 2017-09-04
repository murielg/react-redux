import {
    LOCATION_SELECTED, REMOVE_FILTER,
    ADD_FILTER
} from "./types";

export function selectLocation(location) {
    // selectLocation is an ActionCreator
    // will return an action, ie an object with a type property
    return {
        type: LOCATION_SELECTED,
        payload: location
    }
}

export function addFilter(filter) {
    return {
        type: ADD_FILTER,
        payload: filter
    }

}

export function removeFilter(filter) {
    return {
        type: REMOVE_FILTER,
        payload: filter
    }
}