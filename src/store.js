import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import taskReducers from  './reducers/taskReducers';

const store = createStore(
    taskReducers,
    composeWithDevTools(applyMiddleware(thunk))
);


export default store;