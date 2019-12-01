import {
    GET_ACTIVE_SHOPPING_LIST_FAILURE,
    GET_ACTIVE_SHOPPING_LIST_REQUEST,
    GET_ACTIVE_SHOPPING_LIST_SUCCESS,
    TOGGLE_ITEM_REQUEST,
    TOGGLE_ITEM_SUCCESS,
    ADD_SHOPPING_PRODUCT_REQUEST,
    ADD_SHOPPING_PRODUCT_FAILURE,
    ADD_SHOPPING_PRODUCT_SUCCESS,
    GENERATE_RANDOM_SHOPPING_LIST,
    GENERATE_RANDOM_SHOPPING_LIST_REQUEST,
    GENERATE_RANDOM_SHOPPING_LIST_SUCCESS,
    RESET_RANDOM_SHOPPING_LIST,
    ADD_SHOPPING_LIST_AND_PRODUCTS_REQUEST,
    ADD_SHOPPING_LIST_AND_PRODUCTS_FAILURE,
    ADD_SHOPPING_LIST_AND_PRODUCTS_SUCCESS, UPDATE_SHOPPING_LIST_NAME
} from "../../actions/Types/actionTypes";

const defaultState = {
    isLoading: true,
    hasError: false,
    errorMessage: '',
    shoppingProducts: [],
    requestTimestamp: 0,
    serverLoaded: true,
    summary: '',
    active: false,
    userId: 1,
    id: null,
    totalPrice: '0.0',
    name: 'default',
    createdDate: Math.floor(new Date().getTime())
};

const defaultState2 = {
    isLoading: true,
    hasError: false,
    errorMessage: '',
    shoppingProducts: [],
    requestTimestamp: 0,
    serverLoaded: false,
    summary: '',
    active: false,
    userId: 1,
    id: null,
    totalPrice: '0.0',
    name: 'default',
    createdDate: Math.floor(new Date().getTime())
};

/**
 * The state is a dictinary of ids...
 * @type {{active: {isLoading: boolean, requestTimestamp: number, shoppingProducts: Array, errorMessage: string, hasError: boolean}}}
 * Note: Users need to have the ability to add to the list offline as well. Therefore a placeholder-id will be generated with all the data
 *      necessary to add it to the list. PlaceholderId will be replaced with actualID later on...
 */
const initialState = {
    generateLoading: false,
    generatedKey: null,
    active: defaultState,
    placeHolderQueue: [],
    queue: ['active'],
    updateStateCount: 0
};

const activeShoppingListReducer = (state=initialState, action) => {
    if (action.id === null && action.id !== undefined) {
        return state;
    }
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
            let shoppingListState5 = {...state[action.id], isLoading: true};
            return {...state, [action.id]: shoppingListState5};
        case ADD_SHOPPING_PRODUCT_FAILURE:
            let shoppingListState6 = {...state[action.id], isLoading: false, errorMessage: action.errorMessage};
            return {...state, [action.id]: shoppingListState6};
        case ADD_SHOPPING_PRODUCT_SUCCESS:
            let shoppingProducts4 = {...state[action.id], isLoading: false, requestTimestamp: action.json.timestamp,
                status: action.json.status,
                shoppingProducts: state[action.id].shoppingProducts.concat([action.json.response])};
            return {...state, [action.id]: shoppingProducts4};
        case GENERATE_RANDOM_SHOPPING_LIST_REQUEST:
            return {...state, generateLoading: true};
        case GENERATE_RANDOM_SHOPPING_LIST_SUCCESS:
            let newPlaceHolderQueue = state.placeHolderQueue.concat([action.randomKey]);
            let newQueue = state.queue.concat([action.randomKey]);
            let startState = {...defaultState, createdDate: Math.floor(new Date().getTime())};
            return {...state, [action.randomKey]: startState, generateLoading: false, generatedKey: action.randomKey, placeHolderQueue: newPlaceHolderQueue, queue: newQueue, id: action.randomKey};
        case RESET_RANDOM_SHOPPING_LIST:
            return {...state, generatedKey: null, generateLoading: false};
        case ADD_SHOPPING_LIST_AND_PRODUCTS_FAILURE:
            return state;
        case ADD_SHOPPING_LIST_AND_PRODUCTS_SUCCESS:
            return state;
        case UPDATE_SHOPPING_LIST_NAME:
            let shoppingListState7 = {...state[action.shoppingListId],  name: action.name};
            let newPlaceHolderQueue2 = state.placeHolderQueue.includes(action.shoppingListId) ? state.placeHolderQueue : state.placeHolderQueue.concat(action.shoppingListId);
            return {...state, [action.shoppingListId]: shoppingListState7, placeHolderQueue: newPlaceHolderQueue2, updateStateCount: state.updateStateCount + 1} ;
        default:
            return state
    }
};

export default activeShoppingListReducer;
