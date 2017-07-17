/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import {combineReducers} from 'redux';
export const RECEIVED_NOTES = "NOTES";
export const RECEIVED_LOCATION = "RECEIVED_LOCATION";
export const RECEIVED_INSTANCE_DETAILS = "RECEIVED_INSTANCE_DETAILS";

const notes = (state = {notes:[], loaded:false}, action) => {
    switch (action.type) {
        case RECEIVED_NOTES:
            return {...state, notes:action.payload.notes, loaded:action.payload.loaded};

        default:
            return state
    }
};

const location =  (state = {location: null, loaded:false}, action) => {
    switch (action.type) {
        case RECEIVED_LOCATION:
            return {...state, location:action.payload.location, loaded:action.payload.loaded};

        default:
            return state
    }
};


const instance =  (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_INSTANCE_DETAILS:
            return action.payload;
        default:
            return state
    }
};

const rootReducer = combineReducers({
    notes,
    location,
    instance
});

export default rootReducer;
