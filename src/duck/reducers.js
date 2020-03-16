import {DECREMENT, INCREMENT, DELETE, ADD_PRODUCT, ADD_PRODUCTS, UPDATE_PRICE} from "./actions";

export const cartReducer = (state = [], action) => {
    const { id } = action;
    var cartItems = [...state];

    const changeAmount = (id, type) => {
        let indexInCart = cartItems.findIndex(x => x.id  === id);
        let cartItem = {...cartItems[indexInCart]};
        if(type === INCREMENT){
            cartItem.amount += 1;
            cartItems[indexInCart] = cartItem;
        }else if(type === DECREMENT){
            if(cartItem.amount > 1){
                cartItem.amount -= 1;
                cartItems[indexInCart] = cartItem;
            }
        }
        return cartItems;
    }

    switch(action.type){
        case INCREMENT:
            return changeAmount(id, INCREMENT);
        case DECREMENT:
            return changeAmount(id, DECREMENT);
        case DELETE:
            return cartItems.filter((item) =>  item.id !== action.id);
        case ADD_PRODUCT:
            const isInArray = cartItems.find(x => x.id === action.id );
            if(isInArray){
                return changeAmount(id , INCREMENT)
            }else{
                return [...state, action.prodsArr[action.id - 1]];
            }
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

export const priceReducer = (state = [], action) => {
    switch(action.type){
        case UPDATE_PRICE:
            return action.price;
        default:
            return 0.00
    }
}
