import { combineReducers } from "redux";
import { cartReducer, productsReducer, priceReducer} from "./reducers";

export const reducer = combineReducers({
    productsInCart: cartReducer,
    productsList: productsReducer,
});
