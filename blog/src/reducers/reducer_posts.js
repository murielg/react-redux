import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      //console.log(action.payload.data); // this will spit out an array
      //transform into object
    default:
      return state;

  }
}



