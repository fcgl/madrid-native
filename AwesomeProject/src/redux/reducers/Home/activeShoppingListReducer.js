import {
    GET_ACTIVE_SHOPPING_LIST_FAILURE,
    GET_ACTIVE_SHOPPING_LIST_REQUEST,
    GET_ACTIVE_SHOPPING_LIST_SUCCESS, TOGGLE_ITEM_REQUEST, TOGGLE_ITEM_SUCCESS,ADD_SHOPPING_PRODUCT_REQUEST, ADD_SHOPPING_PRODUCT_FAILURE, ADD_SHOPPING_PRODUCT_SUCCESS
} from "../../actions/Types/actionTypes";

const defaultState = {
    isLoading: true,
    hasError: false,
    errorMessage: '',
    shoppingProducts: [],
    requestTimestamp: 0,
};

/**
 * The state is a dictinary of ids...
 * @type {{active: {isLoading: boolean, requestTimestamp: number, shoppingProducts: Array, errorMessage: string, hasError: boolean}}}
 */
const initialState = {
    active: defaultState
};

const activeShoppingListReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ACTIVE_SHOPPING_LIST_REQUEST:
            let shoppingListState = {...state[action.id], isLoading: true};
            return {...state, [action.id]: shoppingListState};
        case GET_ACTIVE_SHOPPING_LIST_FAILURE:
            let shoppingListState2 = {...state[action.id], isLoading: false, errorMessage: action.errorMessage};
            return {...state, [action.id]: shoppingListState2};
        case GET_ACTIVE_SHOPPING_LIST_SUCCESS:
            let shoppingProducts = action.json.response.shoppingProducts;
            if (shoppingProducts == null) {
             shoppingProducts = [];
            }
            let shoppingListState3 = {...state[action.id], isLoading: false, requestTimestamp: action.json.timestamp, shoppingProducts: shoppingProducts, status: action.json.status};
            return {...state, [action.id]: shoppingListState3};
        case TOGGLE_ITEM_REQUEST:
            let newShoppingProducts = [];
            for (let i = 0; i < state[action.id].shoppingProducts.length; i++) {
                if (state[action.id].shoppingProducts[i].id === action.shoppingProductId) {
                    let newShoppingProduct = {...state[action.id].shoppingProducts[i], completed: !state[action.id].shoppingProducts[i].completed};
                    newShoppingProducts.push(newShoppingProduct)
                } else {
                    newShoppingProducts.push(state[action.id].shoppingProducts[i])
                }
            }
            let shoppingListState4 = {...state[action.id], shoppingProducts: newShoppingProducts};
            return {...state, [action.id]: shoppingListState4};
        case ADD_SHOPPING_PRODUCT_REQUEST:
            console.log("IT GETS TO ACTIVE SHOPPING LIST REDUCER");
            return state;
        default:
            return state
    }
};

export default activeShoppingListReducer;
