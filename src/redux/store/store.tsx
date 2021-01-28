import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tours from '../reducers/tours';
import filters from '../reducers/filters';


const createToursStore = () =>  createStore(
        combineReducers({
            tours,
            filters
        }
    ), applyMiddleware(thunk));

export default createToursStore;