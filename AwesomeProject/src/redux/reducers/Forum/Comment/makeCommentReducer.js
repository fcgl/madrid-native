import {
    ADD_COMMENT_REQUEST, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS, UPDATE_NEW_COMMENT
} from "../../../actions/Types/actionTypes";

const initialState = {
    isLoading: false,
    hasError: false,
    errorMessage: '',
    newComment: ''
};

const addCommentReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT_REQUEST:
            return {...state, isLoading: true};
        case ADD_COMMENT_FAILURE:
            return {...state, isLoading: false, hasError: true, errorMessage: action.payload};
        case ADD_COMMENT_SUCCESS:
            return {...state, isLoading: false, newComment: ''};
        case UPDATE_NEW_COMMENT:
            return {...state, newComment: action.newComment};
        default:
            return state
    }
};

export default addCommentReducer;
