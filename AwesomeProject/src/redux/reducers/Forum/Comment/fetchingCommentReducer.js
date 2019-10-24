import {
    APPEND_NEW_COMMENT,
    FETCHING_POST_COMMENTS_FAILURE,
    FETCHING_POST_COMMENTS_REQUEST,
    FETCHING_POST_COMMENTS_SUCCESS
} from "../../../actions/Types/actionTypes";

const initialState = {
    comments: [],
    commentsLoading: true,
    newComment: '',
    errorMessage: '',
    hasError: false,
    requestTimeStamp: 0
};

const fetchCommentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHING_POST_COMMENTS_REQUEST:
            return {...state, commentsLoading: true};
        case FETCHING_POST_COMMENTS_FAILURE:
            return {...state, commentsLoading: false, errorMessage: action.payload, hasError: true};
        case FETCHING_POST_COMMENTS_SUCCESS:
            return {...state, commentsLoading: false, comments: action.payload.comments, requestTimeStamp: action.payload.timestamp};
        case APPEND_NEW_COMMENT:
            let newComments = [action.payload.response].concat(state.comments);
            return {...state, commentsLoading: false, comments: newComments, requestTimeStamp:action.payload.timestamp};
        default:
            return state
    }
};

export default fetchCommentsReducer;
