import {FILTER_TITLE,CLEAR_FILTER} from '../actions/actionTypes';

const filtersReducerDefaultState = {
    title: ''
};

const filterReducer = (state = filtersReducerDefaultState, action:any) => {
    switch (action.type) {
        case FILTER_TITLE:
            return {
                ...state,
                title: action.title
            };
        case CLEAR_FILTER:
            return {
                ...state,
                title: action.defaultFilter.title
            };
        default:
            return state;
    }
}

export default filterReducer;
