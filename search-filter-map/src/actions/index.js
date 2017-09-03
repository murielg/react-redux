import {
    LOCATION_SELECTED,
    SET_FILTERS
} from "./types";

export function selectLocation(location) {
    // selectLocation is an ActionCreator
    // will return an action, ie an object with a type property
    return {
        type: LOCATION_SELECTED,
        payload: location
    }
}

export function setFilters(filters) {
    return {
        type: SET_FILTERS,
        payload: filters
    }

}