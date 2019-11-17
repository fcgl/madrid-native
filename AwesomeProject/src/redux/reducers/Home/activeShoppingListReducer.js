import {
    GET_ACTIVE_SHOPPING_LIST_FAILURE,
    GET_ACTIVE_SHOPPING_LIST_REQUEST,
    GET_ACTIVE_SHOPPING_LIST_SUCCESS, TOGGLE_ITEM_REQUEST, TOGGLE_ITEM_SUCCESS
} from "../../actions/Types/actionTypes";

const initialState = {
    isLoading: true,
    hasError: false,
    errorMessage: '',
    shoppingProducts: [],
    requestTimestamp: 0,
};

const activeShoppingListReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ACTIVE_SHOPPING_LIST_REQUEST:
            return {...state, isLoading:true};
        case GET_ACTIVE_SHOPPING_LIST_FAILURE:
            return {...state, isLoading: false, errorMessage: action.errorMessage};
        case GET_ACTIVE_SHOPPING_LIST_SUCCESS:
            let shoppingProducts = action.json.response.shoppingProducts;
            if (shoppingProducts == null) {
             shoppingProducts = [];
            }
            return {...state, isLoading: false, requestTimestamp: action.json.timestamp, shoppingProducts: shoppingProducts, status: action.json.status};
        case TOGGLE_ITEM_REQUEST:
            let newShoppingProducts = [];
            for (let i = 0; i < state.shoppingProducts.length; i++) {
                if (state.shoppingProducts[i].id === action.id) {
                    let newShoppingProduct = {...state.shoppingProducts[i], completed: !state.shoppingProducts[i].completed};
                    newShoppingProducts.push(newShoppingProduct)
                } else {
                    newShoppingProducts.push(state.shoppingProducts[i])
                }
            }
            return {...state, shoppingProducts: newShoppingProducts};
        default:
            return state
    }
};

export default activeShoppingListReducer;
