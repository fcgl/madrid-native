import {
    SEARCH_FAILURE,
    SEARCH_REQUEST, SEARCH_RESET,
    SEARCH_SUCCESS,
    ERROR_RESET, RECENT_SEARCH_REQUEST, RECENT_SEARCH_FAILURE, RECENT_SEARCH_SUCCESS
} from "./Types/actionTypes";

export const searchRequest = () => ({
   type: SEARCH_REQUEST
});


export const searchRequestSuccess = (json) => ({
    type: SEARCH_SUCCESS,
    products: json.response.products
});


export const searchRequestFailure = (errorMessage) => ({
    type: SEARCH_FAILURE,
    errorMessage: errorMessage
});

export const searchReset = () => ({
   type: SEARCH_RESET
});

export const errorReset = () => ({
    type: ERROR_RESET
});

export const disableError = () => {
    return async dispatch => {
       dispatch(errorReset())
    }
};

export const resetSearch = () => {
    return async dispatch => {
        dispatch(searchReset())
    }
};

export const recentSearchRequest = () => ({
   type: RECENT_SEARCH_REQUEST
});

export const recentSearchRequestFailure = (errorMessage) => ({
   type: RECENT_SEARCH_FAILURE,
   errorMessage: errorMessage
});

export const recentSearchRequestSuccess = (json) => ({
    type: RECENT_SEARCH_SUCCESS,
    searchHistory: json.response.searchHistory
});

export const searchProducts = (name) => {
    return async dispatch => {
        if (name === '') {
            dispatch(searchReset());
            return
        }
        dispatch(searchRequest());
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        const page = 0;
        const size = 10;
        const userId = 1;
        let url = 'http://localhost:8084/search/v1/product/name?name=' + name + "&userId=" + userId;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(searchRequestSuccess(jsonResponse))
            } else {
                const errorResponse = await response.json();
                dispatch(searchRequestFailure(errorResponse.status.messages[0]))
            }
        } catch (e) {
            dispatch(searchRequestFailure(e.message))
        }
    }
};

export const fetchRecentSearchHistory = () => {
    return async dispatch => {
        dispatch(recentSearchRequest());
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        const page = 0;
        const size = 10;
        const userId = 1;
        let url = 'http://localhost:8084/search/userSearch/v1/query?userId=' + userId + '&page=' +page + '&size=' + size;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(recentSearchRequestSuccess(jsonResponse))
            } else {
                const errorResponse = await response.json();
                dispatch(recentSearchRequestFailure(errorResponse.status.messages[0]))
            }
        } catch (e) {
            dispatch(recentSearchRequestFailure(e.message))
        }
    }
};
