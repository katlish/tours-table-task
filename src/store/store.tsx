import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import toursReducer from '../reducers/tours';
import filtersReducer from '../reducers/filters';
//import imgSourceDefault from '../assets/promoImage.jpg'


export default () => {
    return createStore(
        combineReducers({
            tours: toursReducer,
            filters: filtersReducer
        }
    ), applyMiddleware(thunk));
};