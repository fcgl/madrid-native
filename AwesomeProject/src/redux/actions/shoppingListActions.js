import {
    GET_ACTIVE_SHOPPING_LIST_SUCCESS,
    GET_ACTIVE_SHOPPING_LIST_FAILURE,
    GET_ACTIVE_SHOPPING_LIST_REQUEST, TOGGLE_TODO, TOGGLE_ITEM_REQUEST,
} from "./Types/actionTypes";

export const fetchActiveShoppingListRequest = () => ({
    type: GET_ACTIVE_SHOPPING_LIST_REQUEST
});

export const fetchActiveShoppingListSuccess = (json) => ({
    type: GET_ACTIVE_SHOPPING_LIST_SUCCESS,
    json: json,
});


export const fetchActiveShoppingListFailure = (errorMessage) => ({
    type: GET_ACTIVE_SHOPPING_LIST_FAILURE,
    errorMessage: errorMessage
});

const _toggleTodo = (id) => ({
   type: TOGGLE_ITEM_REQUEST,
   id:  id
});

export const fetchActiveShoppingList = () => {
    return async dispatch => {
        console.log("START FETCHING ACTIVE SHOPPING LIST");
        dispatch(fetchActiveShoppingListRequest());
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        const userId = 1;
        let url = 'http://localhost:8086/shopping/list/v1/active?userId=' + userId;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                dispatch(fetchActiveShoppingListSuccess(jsonResponse))
            } else {
                const errorResponse = await response.json();
                dispatch(fetchActiveShoppingListFailure(errorResponse.status.messages[0]))
            }
        } catch (e) {
            dispatch(fetchActiveShoppingListFailure(e.message))
        }
    }
};

export const toggleTodo = (id) => {
    return async dispatch => {
        dispatch(_toggleTodo(id));
}};
