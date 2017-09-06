import {GET_GEOLOCATION} from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case GET_GEOLOCATION:
      return state;
  }
}