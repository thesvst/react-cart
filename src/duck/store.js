import { combineReducers } from "redux";
import { cartReducer, productsReducer } from "./reducers";

export const reducer = combineReducers({
    productsInCart: cartReducer,
    productsList: productsReducer
});
