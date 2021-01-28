import {FETCH_TOURS_SUCCESS,FETCH_TOURS_ERROR} from '../actions/actionTypes';

const toursInitState: any = {
    tours: [],
    loading: true,
    error: null,
    totalTours: 0
};

const toursReducer = (state = toursInitState, action: any) => {
    switch (action.type) {
        case FETCH_TOURS_SUCCESS:
            return {
                ...state,
                loading: false,
                tours: action.tours,
                totalTours: action.tours.length
            };
        case FETCH_TOURS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.e
            };    
        default:
            return state;
    }
};

export default toursReducer;