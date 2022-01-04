import { SHIPPING_ADD_LIST, SHIPPING_DELETE_LIST, SHIPPING_ERROR, SHIPPING_LIST_ERROR,
         SHIPPING_LIST_REQUEST, SHIPPING_LIST_SUCCESS,
         SHIPPING_REQUEST, SHIPPING_SUCCESS, SHIPPING_UPDATE_LIST } from "./content"

export const shippingRequest = (form) =>
{
    return {
        type : SHIPPING_REQUEST,
        payload : form 
    }
}

export const shippingSuccess = () =>
{
    return {
        type: SHIPPING_SUCCESS,
        
    }
}

export const shippingError = (error) =>
{
    return {
        type : SHIPPING_ERROR,
        payload : error
    }
}

export const shippingListRequest = () =>
{
    return {
        type : SHIPPING_LIST_REQUEST,
    }
}

export const shippingListSuccess = (shippingList) =>
{
    return {
        type : SHIPPING_LIST_SUCCESS,
        payload : shippingList
    }
}

export const shippingListError = (error) =>
{
    return {
        type : SHIPPING_LIST_ERROR,
        payload : error
    }
}

export const shippingListDelete = (id) =>
{
    return {
        type : SHIPPING_DELETE_LIST,
        payload: id
    }
}

export const shippingListUpdate = (form) =>
{
    return {
        type : SHIPPING_UPDATE_LIST,
        payload : form 
    }
}

export const shippingAddList = (form) =>
{
    return{
        type : SHIPPING_ADD_LIST,
        payload : form
    }
}

