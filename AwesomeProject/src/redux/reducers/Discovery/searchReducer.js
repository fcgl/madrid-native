import {
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    SEARCH_REQUEST, SEARCH_RESET, ERROR_RESET
} from "../../actions/Types/actionTypes";

const initialState = {
        isLoading: false,
        searchResultsObtained: false,
        hasError: false,
        errorMessage: '',
        products: [],
        requestTimestamp: 0,

};



const searchProduct = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {...state, isLoading: true};
        case SEARCH_SUCCESS:
            return {...state, isLoading: false, products: action.products, searchResultsObtained: true};
        case SEARCH_FAILURE:
            return {...state, isLoading: false, hasError: true, errorMessage: action.errorMessage};
        case SEARCH_RESET:
            return initialState;
        case ERROR_RESET:
            return {... state, hasError: false, errorMessage: ''};
        default:
            return state
    }
};

export default searchProduct;
