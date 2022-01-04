import { ADD_ITEM, CART_ERROR, CART_REQUEST, CART_SUCCESS, DECREASE_ITEM_QTY, INCREASE_ITEM_QTY, MEMBER_CART_GET_ERROR, MEMBER_CART_GET_REQUEST, MEMBER_CART_GET_SUCCESS, MEMBER_CART_SAVE_ERROR, MEMBER_CART_SAVE_REQUEST, MEMBER_CART_SAVE_SUCCESS, REMOVE_ITEM } from "./content"


export const getCart = (cartList) =>
{
    return {
        type: CART_REQUEST,
        payload : cartList
    }
}

export const cartSuccess = () =>
{
    return {
        type : CART_SUCCESS,
    }
}

export const cartError = (error) =>
{
    return {
        type: CART_ERROR,
        payload: error, 
    }
}

export const addItem = (product) =>
{
    return {
        type: ADD_ITEM,
        payload : product
    }
}

export const removeItem = (product) =>
{
    return {
        type : REMOVE_ITEM,
        payload : product
    }
}

export const increaseItemQty = (product) =>
{
    return {
        type : INCREASE_ITEM_QTY,
        payload : product
    }
}

export const decreaseItemQty = (product) =>
{
    return {
        type : DECREASE_ITEM_QTY,
        payload : product
    }
}



