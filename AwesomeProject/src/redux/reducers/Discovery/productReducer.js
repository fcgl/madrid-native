import {
    FETCH_RECOMMENDED_PRODUCTS_REQUEST,
    FETCH_RECOMMENDED_PRODUCTS_SUCCESS,
    FETCH_RECOMMENDED_PRODUCTS_FAILURE
} from "../../actions/Types/actionTypes";

const initialState = {
    recommended: {
        isLoading: true,
        hasError: false,
        errorMessage: '',
        products: [],
        requestTimestamp: 0,
    },
    test: {

    }
};

const productRequestTypes = [FETCH_RECOMMENDED_PRODUCTS_REQUEST];
const productFailureTypes = [FETCH_RECOMMENDED_PRODUCTS_FAILURE];
const productSuccessTypes = [FETCH_RECOMMENDED_PRODUCTS_SUCCESS];

const productReducer = (state=initialState, action) => {
    console.log("reducer count...");
    console.log("what's in the action");
    console.log(action);
    if (productRequestTypes.includes(action.type)) {
        console.log("reducer request");
        let stateTypePayload0 = {...state[action.productType], isLoading: true};
        return {...state, [action.productType]: stateTypePayload0};
    } else if (productFailureTypes.includes(action.type)) {
        console.log("reducer failure");

        let stateTypePayload0 = {...state[action.productType], isLoading: false, hasError: false, errorMessage: action.errorMessage};
        return {...state, [action.productType]: stateTypePayload0};
    } else if (productSuccessTypes.includes(action.type)) {
        console.log("DOES IT GET TO SUCCESSTYPES??");
        console.log("what does it return?");
        console.log({...state[action.productType], isLoading: false, products: action.products});
        let stateTypePayload0 = {...state[action.productType], isLoading: false, products: action.products};
        return {...state, [action.productType]: stateTypePayload0};
    } else {
        console.log("reducer else");
        return state
    }
};

export default productReducer;
