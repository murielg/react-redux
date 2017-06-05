import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      //ES5 way
      //const post = action.payload.data;
      //const newState = { ...state}
      //newState[post.id] = post;
      //return newState;

      return {...state, [action.payload.data.id]:action.payload.data };
    case FETCH_POSTS:
      //console.log(action.payload.data); // this will spit out an array
      //transform into object
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;

  }
}



