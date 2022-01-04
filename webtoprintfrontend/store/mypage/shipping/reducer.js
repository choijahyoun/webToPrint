
import { HYDRATE } from "next-redux-wrapper";
import { shippingListError } from "./action";
import { SHIPPING_ADD_LIST, SHIPPING_DELETE_LIST, SHIPPING_ERROR, SHIPPING_LIST_ERROR, SHIPPING_LIST_REQUEST, SHIPPING_LIST_SUCCESS, SHIPPING_REQUEST, SHIPPING_SUCCESS, SHIPPING_UPDATE_LIST } from "./content";

export const initState = {
    error : "",
    form : "",
    shippingList : [],
    id : "",
}

//ToDO : 배송지 관리에서 추가 할 떄 새로고침을 해야 배송지 관리에서 렌더링이 가능하게 되어 있습니다. 이것을 고쳐야 합니다.
const shippingReducer = (state=initState, action) =>
{
    switch(action.type)
    {
        case SHIPPING_REQUEST:
            return {
                ...state,
                form : action.payload
            }
        case SHIPPING_SUCCESS:
            return {
                ...state, 
            }
        case SHIPPING_ERROR:
            return {
                ...state,
                error : action.payload,
            }
        case SHIPPING_LIST_REQUEST:
            return {
                ...state,
            }
        case SHIPPING_LIST_SUCCESS:
            return {
                ...state,
                shippingList : action.payload,
            }
        case SHIPPING_LIST_ERROR:
            return {
                ...state,
                error : action.payload
            }
        case SHIPPING_ADD_LIST:
            const addShippingList = [...state.shippingList, action.payload];
            console.log(addShippingList);
            return addShippingList;
        
        case SHIPPING_DELETE_LIST:
            return {
                ...state,
                id : action.payload,
            }
        case SHIPPING_UPDATE_LIST:
            return {
                ...state,
                form : action.payload,
                id : action.payload.id,
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default shippingReducer;