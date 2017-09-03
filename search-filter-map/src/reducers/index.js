import { combineReducers } from 'redux';
import LocationsReducer from './reducer_locations';

const rootReducer = combineReducers({
  locations: LocationsReducer
});

export default rootReducer;