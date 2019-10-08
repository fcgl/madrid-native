import {
    FETCH_USER_POINT_HISTORY_FAILURE,
    FETCH_USER_POINT_HISTORY_REQUEST,
    FETCH_USER_POINT_HISTORY_SUCCESS,
} from "../../../actions/actionTypes";

const initialState = {
    isLoading: false,
    errorMessage: '',
    userPointHistory: [],
    status : {},
    requestTimestamp: 0
};

const userPointHistoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_POINT_HISTORY_REQUEST:
            return {...state, isLoading: true};
        case FETCH_USER_POINT_HISTORY_FAILURE:
            return {...state, isLoading: false, errorMessage: action.errorMessage};
        case FETCH_USER_POINT_HISTORY_SUCCESS:
            return {...state, isLoading: false, userPointHistory: action.userPointHistory, status: action.status, requestTimestamp: action.requestTimestamp};
        default:
            return state
    }
};

export default userPointHistoryReducer;
