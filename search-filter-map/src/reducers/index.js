import { combineReducers } from 'redux';
import LocationsReducer from './reducer_locations';
import ActiveLocation from './reducer_active_location';
import ActiveFilters from './reducer_active_filters';


const rootReducer = combineReducers({
    locations: LocationsReducer,
    activeLocation: ActiveLocation,
    activeFilters: ActiveFilters

});

export default rootReducer;