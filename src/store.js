import { applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";
import {composeWithDevTools} from 'redux-devtools-extension';

import taskReducers from  './reducers/taskReducers';

const store = configureStore(
    taskReducers,
    composeWithDevTools(applyMiddleware(thunk))
);


export default store;