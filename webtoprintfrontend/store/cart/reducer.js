import { HYDRATE } from "next-redux-wrapper"
import { ADD_ITEM, CART_ERROR, CART_REQUEST, CART_SUCCESS, MEMBER_CART_GET_ERROR, MEMBER_CART_GET_REQUEST, MEMBER_CART_GET_SUCCESS, MEMBER_CART_SAVE_ERROR, MEMBER_CART_SAVE_REQUEST, MEMBER_CART_SAVE_SUCCESS } from "./content"



export const initState ={
    cartItems: [],
    amount: 0,
    cartTotal: 0,
    error : "",
    userId : ""
}


function cartReducer(state=initState , action){
    switch(action.type)
    {
        case CART_REQUEST:
            return {
                ...state,
            }
        case CART_SUCCESS:
            return {
                ...state,
                cartItems : action.payload.cartItems,
                amount : action.payload.amount,
                cartTotal : action.payload.cartTotal,
            }
        case CART_ERROR: 
            return {
                ...state,
                error : action.payload,
            }
        case ADD_ITEM: 
            return{
                ...state,
                cartItems : action.payload
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
        
    }
}

export default cartReducer;