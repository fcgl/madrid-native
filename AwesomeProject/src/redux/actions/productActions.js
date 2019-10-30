import {
    FETCH_RECOMMENDED_PRODUCTS_REQUEST,
    FETCH_RECOMMENDED_PRODUCTS_SUCCESS,
    FETCH_RECOMMENDED_PRODUCTS_FAILURE,
} from "./Types/actionTypes";

import {RECOMMENDED_PRODUCTS} from "./Types/productTypes"



export const fetchingProductsRequest = (productType) => ({
    type: FETCH_RECOMMENDED_PRODUCTS_REQUEST,
    productType: productType
});


export const fetchingProductsSuccess = (productType, json) => ({
    type: FETCH_RECOMMENDED_PRODUCTS_SUCCESS,
    products: json.products,
    productType: productType
});


export const fetchingProductsFailure = (productType, error) => ({
    type: FETCH_RECOMMENDED_PRODUCTS_FAILURE,
    errorMessage: error,
    productType: productType
});

const _generateUrl = (product_type, page = 0, size = 10) => {
    let url = 'http://localhost:5000';
    let userId = 1;
    switch(product_type) {
        case RECOMMENDED_PRODUCTS:
            url = url + '/user_recommendation/v1?userId='+userId+ '&page=' + page + '&size=' + size;
            break;
        default:
            url = ''
    }
    return url;
};

export const fetchProducts = (productType) => {
    return async dispatch => {
        dispatch(fetchingProductsRequest(productType));
        const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1IiwiZXhwIjoxNjU0NTgzMDcyLCJpYXQiOjE1NjgxODMwNzIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdfQ.Tly-cqQSVziwdLwEzg8Pswv6OVINahoS0d9yhQnC30DLWf7UZGzbgdm4naTYgNkNNBgY00Dx2jkh-r4eYDtyIg'
        const page = 0;
        const size = 10;
        const url = _generateUrl(productType, page, size);
        if (url === '') {
            dispatch(fetchingProductsFailure(productType, 'Developer Error: Incorrect Type'))
        }
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {'content-type': 'application/json', 'Authorization': token},
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                dispatch(fetchingProductsSuccess(productType, jsonResponse))
            } else {
                const errorResponse = await response.text();
                dispatch(fetchingProductsFailure(productType, errorResponse))
            }
        } catch (e) {
            dispatch(fetchingProductsFailure(productType, e.message))
        }
    }
};
