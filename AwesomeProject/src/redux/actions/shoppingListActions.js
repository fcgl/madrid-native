import {
    GET_ACTIVE_SHOPPING_LIST_SUCCESS,
    GET_ACTIVE_SHOPPING_LIST_FAILURE,
    GET_ACTIVE_SHOPPING_LIST_REQUEST, TOGGLE_TODO, TOGGLE_ITEM_REQUEST,ADD_SHOPPING_PRODUCT_REQUEST, ADD_SHOPPING_PRODUCT_FAILURE, ADD_SHOPPING_PRODUCT_SUCCESS
} from "./Types/actionTypes";

export const fetchActiveShoppingListRequest = (shoppingListId) => ({
    id: shoppingListId,
    type: GET_ACTIVE_SHOPPING_LIST_REQUEST
});

export const fetchActiveShoppingListSuccess = (json, shoppingListId) => ({
    id: shoppingListId,
    type: GET_ACTIVE_SHOPPING_LIST_SUCCESS,
    json: json,
});


export const fetchActiveShoppingListFailure = (errorMessage, shoppingListId) => ({
    id: shoppingListId,
    type: GET_ACTIVE_SHOPPING_LIST_FAILURE,
    errorMessage: errorMessage
});

export const addToShoppingListRequest = () => ({
    type: ADD_SHOPPING_PRODUCT_REQUEST
});

export const addToShoppingListSuccess = (json) => ({
   type: ADD_SHOPPING_PRODUCT_SUCCESS,
    json: json
});

export const addToShoppingListFailure = (errorMessage) => ({
    type: ADD_SHOPPING_PRODUCT_FAILURE,
    errorMessage: errorMessage
});

const _toggleTodo = (id, shoppingListId) => ({
   type: TOGGLE_ITEM_REQUEST,
   shoppingProductId:  id,
   id: shoppingListId
});

const genereateFetchShoppingListUrl = (shoppingListId) => {
    let isActive = shoppingListId === 'active';
    const userId = 1;
    let url = 'http://localhost:8086/shopping/list/v1?userId=' + userId;
    if (isActive) {
        url += '&isActive=' + isActive;
    } else {
        url += '&shoppingListId=' + shoppingListId;
    }
    return url;
};


export const fetchActiveShoppingList = (shoppingListId) => {
    return async dispatch => {
        dispatch(fetchActiveShoppingListRequest(shoppingListId));
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        let url = genereateFetchShoppingListUrl(shoppingListId);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(fetchActiveShoppingListSuccess(jsonResponse, shoppingListId))
            } else {
                const errorResponse = await response.json();
                dispatch(fetchActiveShoppingListFailure(errorResponse.status.messages[0], shoppingListId))
            }
        } catch (e) {
            dispatch(fetchActiveShoppingListFailure(e.message, shoppingListId))
        }
    }
};

export const addToShoppingList = (shoppingListId, productName, isActive=false) => {
    return async dispatch => {
        dispatch(addToShoppingListRequest());
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        const userId = 1;
        let url = 'http://localhost:8086/shopping/product/v1/new';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },

                body: JSON.stringify({
                    userId: userId,
                    shoppingListId: shoppingListId,
                    productName: productName
                }),
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(addToShoppingListSuccess(jsonResponse))
            } else {
                const errorResponse = await response.json();
                dispatch(addToShoppingListFailure(errorResponse.status.messages[0]))
            }
        } catch (e) {
            dispatch(addToShoppingListFailure(e.message))
        }
    }
};

export const toggleTodo = (id, shoppingListId) => {
    return async dispatch => {
        dispatch(_toggleTodo(id, shoppingListId));
}};
