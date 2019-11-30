import {
    FETCH_USER_POINTS_DETAILS_REQUEST,
    FETCH_USER_POINTS_DETAILS_FAILURE,
    FETCH_USER_POINTS_DETAILS_SUCCESS,
    FETCH_USER_POINT_HISTORY_REQUEST,
    FETCH_USER_POINT_HISTORY_SUCCESS,
    FETCH_USER_POINT_HISTORY_FAILURE
} from "../../Types/actionTypes";

export const fetchingUserPointsDetailsRequest = () => ({
    type: FETCH_USER_POINTS_DETAILS_REQUEST
});


export const fetchingUserPointsDetailsSuccess = (json) => ({
    type: FETCH_USER_POINTS_DETAILS_SUCCESS,
    trophyCount: json.response.trophyCount,
    totalPoints: json.response.totalPoints,
    tournamentPoints: json.response.tournamentPoints
});


export const fetchingUserPointsDetailsFailure = (error) => ({
    type: FETCH_USER_POINTS_DETAILS_FAILURE,
    errorMessage: error
});

export const fetchingUserPointHistoryRequest = () => ({
    type: FETCH_USER_POINT_HISTORY_REQUEST
});


export const fetchingUserPointHistorySuccess = (json) => ({
    type: FETCH_USER_POINT_HISTORY_SUCCESS,
    userPointHistory: json.response,
    status : json.status,
    requestTimestamp: json.timestamp

});


export const fetchingUserPointHistorysFailure = (error) => ({
    type: FETCH_USER_POINT_HISTORY_FAILURE,
    errorMessage: error
});


export const fetchUserDetails = () => {
    return async dispatch => {
        dispatch(fetchingUserPointsDetailsRequest());
        try {
            const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
            const userId = 1;
            const url = 'http://localhost:8083/points/user/v1/summary?userId=' + userId;
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(fetchingUserPointsDetailsSuccess(jsonResponse));
            } else {
                const errorResponse = await response.text();
                dispatch(fetchingUserPointsDetailsFailure(errorResponse));
            }
        } catch (error) {
            dispatch(fetchingUserPointsDetailsFailure(error.message))
        }

    }
};

export const fetchUserPointHistory = () => {
    return async dispatch => {
        dispatch(fetchingUserPointHistoryRequest());
        try {
            const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
            const userId = 1;
            const page = 0;
            const size = 10;
            const url = 'http://localhost:8083/points/user_points/v1/history?userId=' + userId + '&page=' + page + '&size=' + size;
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                // console.log(jsonResponse);
                dispatch(fetchingUserPointHistorySuccess(jsonResponse));
            } else {
                const errorResponse = await response.text();
                dispatch(fetchingUserPointHistorysFailure(errorResponse));
            }
        } catch (error) {
            dispatch(fetchingUserPointHistorysFailure(error.message))
        }
    }
};