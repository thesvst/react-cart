export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DELETE = 'DELETE';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRICE = 'UPDATE_PRICE'

export const incrementProduct = (id, prodsArr) => {
    return {
        type: INCREMENT,
        id: id,
        prodsArr:prodsArr
    }
};
export const decrementProduct = (id) => {
    return {
        type: DECREMENT,
        id: id
    }
};
export const deleteProduct = (id) => {
    return {
        type: DELETE,
        id: id
    }
};
export const addProduct = (id, prodsArr) => {
    return {
        type: ADD_PRODUCT,
        id: id,
        prodsArr: prodsArr
    }
};
export const addProducts = (arr) => {
    return {
        type: ADD_PRODUCTS,
        array: arr
    }
};
