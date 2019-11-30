import {
    ADD_SHOPPING_PRODUCT_FAILURE,
    ADD_SHOPPING_PRODUCT_REQUEST,
    ADD_SHOPPING_PRODUCT_SUCCESS,
    GENERATE_RANDOM_SHOPPING_LIST_REQUEST,
    GENERATE_RANDOM_SHOPPING_LIST_SUCCESS,
    GET_ACTIVE_SHOPPING_LIST_FAILURE,
    GET_ACTIVE_SHOPPING_LIST_REQUEST,
    GET_ACTIVE_SHOPPING_LIST_SUCCESS, RESET_RANDOM_SHOPPING_LIST,
    TOGGLE_ITEM_REQUEST
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

export const addToShoppingListRequest = (shoppingListId) => ({
    type: ADD_SHOPPING_PRODUCT_REQUEST,
    id: shoppingListId
});

export const addToShoppingListSuccess = (json, shoppingListId) => ({
   type: ADD_SHOPPING_PRODUCT_SUCCESS,
    json: json,
    id: shoppingListId

});

export const addToShoppingListFailure = (errorMessage, shoppingListId) => ({
    type: ADD_SHOPPING_PRODUCT_FAILURE,
    errorMessage: errorMessage,
    id: shoppingListId

});

const _toggleTodo = (id, shoppingListId) => ({
   type: TOGGLE_ITEM_REQUEST,
   shoppingProductId:  id,
   id: shoppingListId
});

const generateRandomShoppingListRequest = () => ({
    type: GENERATE_RANDOM_SHOPPING_LIST_REQUEST
});

const generateRandomShoppingListSuccess = (randomKey) => ({
    type: GENERATE_RANDOM_SHOPPING_LIST_SUCCESS,
    randomKey: randomKey
});


const generateRamdomKey = () => {
    let randomNumber = Math.floor((Math.random() * 1000));
    return "placeholder-" + randomNumber;
};

const resetRandomKey = () => ({
    type: RESET_RANDOM_SHOPPING_LIST
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

        if ((shoppingListId+"").includes('placeholder')) {
            //if a placeholder is passed in, it means that the shoppingList data has not yet been backed up in the server... can't do an API request
            // console.log(shoppingListId);
            // console.log("does it get here???");
            //TODO: This could be a good time to make the API request though...
            return;
        }

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

export const addToShoppingList = (shoppingListId, productName) => {
    return async dispatch => {
        if ((shoppingListId+"").includes('placeholder')) {
            //if a placeholder is passed in, it means that the shoppingList data has not yet been backed up in the server... can't do an API request
            // console.log(shoppingListId);
            // console.log("does it get here addToShoppingList???");
            let jsonResponse = _addToShoppingListApiMock(productName, shoppingListId);
            dispatch(addToShoppingListSuccess(jsonResponse, shoppingListId));
            //TODO: This could be a good time to make the API request though...
            return;
        }
        dispatch(addToShoppingListRequest(shoppingListId, productName));
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg';
        const userId = 1;
        const isActive = shoppingListId === 'active';
        const shoppingListId2 = isActive ? -1 : shoppingListId;
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
                    shoppingListId: shoppingListId2,
                    productName: productName,
                    isActive: isActive
                }),
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(addToShoppingListSuccess(jsonResponse, shoppingListId))
            } else {
                const errorResponse = await response.json();
                dispatch(addToShoppingListFailure(errorResponse.status.messages[0], shoppingListId))
            }
        } catch (e) {
            dispatch(addToShoppingListFailure(e.message, shoppingListId))
        }
    }
};

export const addToShoppingListQueue = (shoppingListId, productName) => {
    let jsonResponse = _addToShoppingListApiMock(productName, shoppingListId);
    dispatch(addToShoppingListSuccess(jsonResponse, shoppingListId));
};

const _addToShoppingListApiMock = (name, id) => {
    let apiResponse = {
        response: {
            id: generateRamdomKey(),
            userId: 1,
            productName: name,
            recommendedPrice: null,
            recommendedStoreId: null,
            recommendedProductId: null,
            completed: false,
            recommendationComplete: false
        }, status: {
            code: 1,
            httpcode: "OK",
            message: [
                "ok"
            ]
        },
        timestamp: Math.floor(new Date().getTime()/1000)
    };
    return apiResponse
};

export const toggleTodo = (id, shoppingListId) => {
    return async dispatch => {
        dispatch(_toggleTodo(id, shoppingListId));
}};

export const generateRandomShoppingList = () => {
    return async dispatch => {
        dispatch(generateRandomShoppingListRequest());
        let key = generateRamdomKey();
        dispatch(generateRandomShoppingListSuccess(key));

    }
};

export const resetRandomShoppingListKey = () => {
    return async dispatch => {
        dispatch(resetRandomKey());
    }
};
