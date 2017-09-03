import { combineReducers } from 'redux';
import LocationsReducer from './reducer_locations';
import ActiveLocation from './reducer_active_location';

const rootReducer = combineReducers({
    locations: LocationsReducer,
    activeLocation: ActiveLocation
});

export default rootReducer;