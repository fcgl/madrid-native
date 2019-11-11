import {
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    SEARCH_REQUEST, SEARCH_RESET, ERROR_RESET, RECENT_SEARCH_REQUEST, RECENT_SEARCH_SUCCESS, RECENT_SEARCH_FAILURE
} from "../../actions/Types/actionTypes";

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: '',
    searchHistory: [],
    requestTimestamp: 0,

};



const searchHistory = (state=initialState, action) => {
    switch (action.type) {
        case RECENT_SEARCH_REQUEST:
            return {...state, isLoading: true};
        case RECENT_SEARCH_SUCCESS:
            return {...state, isLoading: false, searchHistory: action.searchHistory};
        case RECENT_SEARCH_FAILURE:
            return {...state, isLoading: false, hasError: true, errorMessage: action.errorMessage};
        default:
            return state
    }
};

export default searchHistory;
