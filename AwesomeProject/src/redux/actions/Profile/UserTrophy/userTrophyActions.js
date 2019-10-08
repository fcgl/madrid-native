import {
    FETCH_USER_TROPHIES_FAILURE,
    FETCH_USER_TROPHIES_SUCCESS,
    FETCH_USER_TROPHIES_REQUEST
} from "../../actionTypes";

export const fetchingUserTrophiesRequest = () => ({
    type: FETCH_USER_TROPHIES_REQUEST
});


export const fetchingUserTrophiesSuccess = (json) => ({
    type: FETCH_USER_TROPHIES_SUCCESS,
    userTrophies: json.userTrophies,
    status: json.status,
});


export const fetchingUserTrophiesFailure = (error) => ({
    type: FETCH_USER_TROPHIES_FAILURE,
    errorMessage: error
});


export const fetchUserTrophies = () => {
    return async dispatch => {
        dispatch(fetchingUserTrophiesRequest());
        try {
            const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
            const userId = 1;
            const url = 'http://localhost:8083/points/user_trophies/v1/userTrophies?userId=' + userId;
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(fetchingUserTrophiesSuccess(jsonResponse));
            } else {
                const errorResponse = await response.text();
                dispatch(fetchingUserTrophiesFailure(errorResponse));
            }
        } catch (error) {
            dispatch(fetchingUserTrophiesFailure(error.message))
        }

    }
};
