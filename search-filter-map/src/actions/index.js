import {
  LOCATION_SELECTED,
  REMOVE_FILTER,
  ADD_FILTER,
  GET_GEOLOCATION,
  UPDATE_LOCATIONS
} from "./types";
//Action Creators will return an action:
// an object with a type property
// and a payload or value

export function selectLocation(location) {
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

export function getGeolocation(location) {
  return {
    type: GET_GEOLOCATION,
    payload: location
  }
}

export function updateDistance(distance) {
  return {
    type: UPDATE_LOCATIONS,
    payload: distance
  }
}