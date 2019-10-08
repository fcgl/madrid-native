import {
    ADD_POST_FAILURE,
    ADD_POST_SUCCESS,
    ADD_POST_REQUEST
} from "../../../actions/actionTypes";

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: '',
};

const addPostReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {...state, isLoading: true};
        case ADD_POST_FAILURE:
            return {...state, isLoading: false, hasError: true, errorMessage: action.payload};
        case ADD_POST_SUCCESS:
            return {...state, isLoading: false, errorMessage: ''};
        default:
            return state
    }
};

export default addPostReducer;
