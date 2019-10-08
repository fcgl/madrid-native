import {
    FETCH_USER_TROPHIES_FAILURE,
    FETCH_USER_TROPHIES_SUCCESS,
    FETCH_USER_TROPHIES_REQUEST,
} from "../../../actions/actionTypes";

const initialState = {
    isLoading: false,
    errorMessage: '',
    userTrophies: [],
    status : {}
};

const userPointTrophyReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_TROPHIES_REQUEST:
            return {...state, isLoading: true};
        case FETCH_USER_TROPHIES_FAILURE:
            return {...state, isLoading: false, errorMessage: action.errorMessage};
        case FETCH_USER_TROPHIES_SUCCESS:
            return {...state, isLoading: false, userTrophies: action.userTrophies, status: action.status};
        default:
            return state
    }
};

export default userPointTrophyReducer;
