import { ORDER_PAY, ORDER_PAY_ERROR, ORDER_PAY_SUCCESS } from "./content";

export const initState = {
    id : "",
    error : "",
}

function paymentReducer(state = initState , action) 
{
    switch(action.type)
    {
        case ORDER_PAY:
            return {
                ...state,
                id : action.payload,
            }
        case ORDER_PAY_SUCCESS:
            return {
                ...state,
            }
        case ORDER_PAY_ERROR:
            return {
                ...state,
                error : action.payload,
            }
        default:
            return state;
        
    }
}
export default paymentReducer;