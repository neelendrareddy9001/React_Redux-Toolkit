import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import taskReducer from  './reducers/taskReducers';

const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware(thunk))
);


export default store;