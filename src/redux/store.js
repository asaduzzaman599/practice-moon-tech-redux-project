import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducer from "./reducers/productReducer";
import {combineReducers} from 'redux'
import filterReducer from "./reducers/fiterReducer";
import {productSequence} from "./middleware/productSequence";
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    products: productReducer,
    filter: filterReducer,
}), composeWithDevTools(applyMiddleware(productSequence,thunk)));

export default store;
