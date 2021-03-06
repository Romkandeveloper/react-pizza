import {CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from './types';

export const clearCart = () => ({
    type: CLEAR_CART,
});

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    payload: item,
});

export const removeAllFromCart = (item) => ({
    type: REMOVE_ALL_FROM_CART,
    payload: item,
});