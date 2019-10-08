import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducers'
import thunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default store = createStoreWithMiddleware(rootReducer);