import { ORDER_PAY, ORDER_PAY_ERROR, ORDER_PAY_SUCCESS } from "./content"



export const orderPay = (id) =>
{
    return {
        type: ORDER_PAY,
        payload : id
    }
}

export const orderPaySuccess = (res) =>
{
    return {
        type : ORDER_PAY_SUCCESS,
        payload : res,
    }
}

export const orderPayError = (error) =>
{
    return {
        type : ORDER_PAY_ERROR,
        payload : error,
    }
}

