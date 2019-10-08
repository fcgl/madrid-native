import {
    FETCH_USER_POINTS_DETAILS_FAILURE,
    FETCH_USER_POINTS_DETAILS_REQUEST,
    FETCH_USER_POINTS_DETAILS_SUCCESS
} from "../../../actions/actionTypes";

const initialState = {
    isLoading: false,
    trophyCount: '-',
    totalPoints: '-',
    tournamentPoints: '-',
    errorMessage: ''
};

const userPointReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_POINTS_DETAILS_REQUEST:
            return {...state, isLoading: true};
        case FETCH_USER_POINTS_DETAILS_FAILURE:
            return {...state, isLoading: false, errorMessage: action.errorMessage};
        case FETCH_USER_POINTS_DETAILS_SUCCESS:
            return {...state, isLoading: false, trophyCount: action.trophyCount, totalPoints: action.totalPoints, tournamentPoints: action.tournamentPoints};
        default:
            return state
    }
};

export default userPointReducer;
