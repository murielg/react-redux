import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      //handle payload and return a new state using the previous data
      //DO NOT state.push... never manipulate apps state
      //state.concat does not manipulate the current state
      return [ action.payload.data, ...state]; // this is equivalent to return state.concat([action.payload.data]);
  }
  
  return state;

}

