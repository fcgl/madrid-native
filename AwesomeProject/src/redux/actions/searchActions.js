import {
    SEARCH_FAILURE,
    SEARCH_REQUEST, SEARCH_RESET,
    SEARCH_SUCCESS,
    ERROR_RESET
} from "./Types/actionTypes";

export const searchRequest = () => ({
   type: SEARCH_REQUEST
});


export const searchRequestSuccess = (json) => ({
    type: SEARCH_SUCCESS,
    products: json.response.products
});


export const searchRequestFailure = (error) => ({
    type: SEARCH_FAILURE,
    errorMessage: error.status.messages
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
        let url = 'http://localhost:8084/search/v1/product/name?name=' + name;
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
                dispatch(searchRequestFailure(errorResponse))
            }
        } catch (e) {
            dispatch(searchRequestFailure(e.message))
        }
    }
};
