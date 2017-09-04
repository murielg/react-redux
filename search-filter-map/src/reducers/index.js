import { combineReducers } from 'redux';
import LocationsReducer from './reducer_locations';
import ActiveLocation from './reducer_active_location';
import FiltersReducer from './reducer_filters';


const rootReducer = combineReducers({
    locations: LocationsReducer,
    activeLocation: ActiveLocation,
    filters: FiltersReducer
});

export default rootReducer;