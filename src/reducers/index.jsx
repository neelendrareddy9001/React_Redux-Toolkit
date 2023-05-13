import taskReducers from './taskReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    tasks: taskReducers,
});


export default rootReducer;