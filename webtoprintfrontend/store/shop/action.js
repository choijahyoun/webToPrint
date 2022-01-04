import { PRINTING_API_SLIP_INSERT, PRINTING_API_SLIP_INSERT_ERROR, PRINTING_API_SLIP_INSERT_SUCCESS, PRINTING_PRODUCT_ADMIN_LIST_ERROR, PRINTING_PRODUCT_ADMIN_LIST_REQUEST, PRINTING_PRODUCT_ADMIN_LIST_SUCCESS, PRINTING_PRODUCT_ERROR,
    PRINTING_PRODUCT_LIST_ERROR,
    PRINTING_PRODUCT_LIST_REQUEST,
    PRINTING_PRODUCT_LIST_SUCCESS,
    PRINTING_PRODUCT_ONE_DELETE,
    PRINTING_PRODUCT_ONE_ERROR,
    PRINTING_PRODUCT_ONE_REQUEST,
    PRINTING_PRODUCT_ONE_SUCCESS,
    PRINTING_PRODUCT_ONE_UPDATE,
    PRINTING_PRODUCT_REQUEST,
    PRINTING_PRODUCT_RESENTORDER_LIST_ERROR,
    PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST,
    PRINTING_PRODUCT_RESENTORDER_LIST_SUCCESS,
    SELECT_ORDER_BINDING,
    SELECT_ORDER_DOCUSPEC,
    SELECT_ORDER_PAPER} from './content';

export const orderRequest = (form) =>{
    return { 
        type : PRINTING_PRODUCT_REQUEST,
        payload : form
    }
}

export const orderError = (error) =>{
    return {
        type :PRINTING_PRODUCT_ERROR,
        payload : error
    }
}

export const selectOrderPaper = (paper) =>
{
    return {
        type : SELECT_ORDER_PAPER,
        payload : paper,
    }
}

export const selectOrderDocuSpec = (docuSpec) =>
{
    return {
        type : SELECT_ORDER_DOCUSPEC,
        payload : docuSpec,
    }
}

export const selectOrderBinding = (binding) =>
{
    return {
        type : SELECT_ORDER_BINDING,
        payload : binding,
    }
}

export const orderOneRequest = (id) =>{
    return {
        type : PRINTING_PRODUCT_ONE_REQUEST,
        payload : id
    }
}

export const orderOneSuccess = (form) =>{
    return {
        type : PRINTING_PRODUCT_ONE_SUCCESS,
        payload : form
    }
}

export const orderOneError = (error) =>{
    return {
        type : PRINTING_PRODUCT_ONE_ERROR,
        payload : error
    }
}

export const orderOneUpdate = (form) =>{
    console.log("수정액션");
    return {
        type : PRINTING_PRODUCT_ONE_UPDATE,
        payload : form,
    }
}

export const orderOneDelete = (id) =>{
    return {
        type : PRINTING_PRODUCT_ONE_DELETE,
        payload : id,
    }
}

export const orderListRequest = () =>{
    return {
        type : PRINTING_PRODUCT_LIST_REQUEST,
    }
}

export const orderListSuccess = (data) =>{
    
    return {
        type : PRINTING_PRODUCT_LIST_SUCCESS,
        payload : data,
    }
}

export const orderListError = (error) =>
{
    return {
        type : PRINTING_PRODUCT_LIST_ERROR,
        payload : error,
    }
}

export const adminOrderListRequest = () =>
{
    return {
        type : PRINTING_PRODUCT_ADMIN_LIST_REQUEST,
    }
}

export const adminOrderListSuccess = (adminOrderList) =>
{
    return {
        type : PRINTING_PRODUCT_ADMIN_LIST_SUCCESS,
        payload : adminOrderList,
    }
}

export const adminOrderListError = (error) =>
{
    return {
        type : PRINTING_PRODUCT_ADMIN_LIST_ERROR,
        payload : error,
    }
}

export const resentOrderListRequest = () =>
{
    return {
        type : PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST
    }
}

export const resentOrderListSuccess = (resentOrderList) =>
{
    return {
        type : PRINTING_PRODUCT_RESENTORDER_LIST_SUCCESS,
        payload : resentOrderList,
    }
}

export const resentOrderListError = (error) =>
{
    return {
        type : PRINTING_PRODUCT_RESENTORDER_LIST_ERROR,
        payload : error,
    }
}

// erp 관련 액션
export const apiSlipInsert = (form) =>
{
    return {
        type : PRINTING_API_SLIP_INSERT,
        payload : form,
    }
}

export const apiSlipInsertSuccess = () =>
{
    return {
        type : PRINTING_API_SLIP_INSERT_SUCCESS
    }
}

export const apiSlipInsertError = (error) =>
{
    return {
        type : PRINTING_API_SLIP_INSERT_ERROR,
        payload : error,
    }
}

