import { DECREMENT, INCREMENT, DELETE, ADD_PRODUCT, ADD_PRODUCTS } from "./actions";

export const cartReducer = (state = [], action) => {
    const { id } = action;
    let cartItems = [...state];
    switch(action.type){
        case INCREMENT:
            let index = action.prodsArr.findIndex(x => x.id === id);
            let cartItem_INC = {...cartItems[index]};
            cartItem_INC.amount += 1;
            cartItems[index] = cartItem_INC;
            return cartItems;
        case DECREMENT:
            let indexInCart = cartItems.findIndex(x => x.id === id);
            let cartItem_DEC = {...cartItems[indexInCart]};
            if(cartItem_DEC.amount > 1){
                cartItem_DEC.amount -= 1;
                cartItems[indexInCart] = cartItem_DEC;
            }
            return cartItems;
        case DELETE:
            let cartAfterDelete = cartItems.filter((item) =>  item.id !== action.id);
            return cartAfterDelete;
        case ADD_PRODUCT:
            return [...state, action.prodsArr[action.id]];
        default:
            return [];
    }

};
export const productsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_PRODUCTS:
            return action.array;
        default:
            return state;
    }
}
