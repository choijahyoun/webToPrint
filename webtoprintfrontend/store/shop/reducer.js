import { HYDRATE } from 'next-redux-wrapper';
import { 
    PRINTING_API_SLIP_INSERT,
    PRINTING_API_SLIP_INSERT_ERROR,
    PRINTING_API_SLIP_INSERT_SUCCESS,
    PRINTING_PRODUCT_ADMIN_LIST_ERROR,
    PRINTING_PRODUCT_ADMIN_LIST_REQUEST,
    PRINTING_PRODUCT_ADMIN_LIST_SUCCESS,
    PRINTING_PRODUCT_ERROR,
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
    SELECT_ORDER_PAPER,
    } from './content';

export const initState = {
    id : "",
    error : false,
    form: {},
    UserOrderList : [],
    resentOrderList : [],
    AdminOrderList : [],
    productList : [],
    binding : {},
    docuSpec : {},
    paper : {},
    pageOption : [],
    postProcess : []
};

const shopReducer = (state=initState , action) =>{
    switch(action.type)
    {
        case PRINTING_PRODUCT_REQUEST:
            return{
                ...state,
                form: action.payload,
            }
        case PRINTING_PRODUCT_ERROR:
            return{
                ...state,
                error: action.payload,
            }
        case SELECT_ORDER_BINDING:
            return{
                ...state,
                binding: action.payload,
            }
        case SELECT_ORDER_DOCUSPEC:
            return {
                ...state,
                docuSpec: action.payload,
            }
        case SELECT_ORDER_PAPER:
            return {
                ...state,
                paper: action.payload,
            }
        case PRINTING_PRODUCT_ONE_REQUEST:
            console.log("하나 오더 리듀서");
            return{
                ...state,
                id : action.payload,
            }
        case PRINTING_PRODUCT_ONE_SUCCESS:
            console.log("하나 오더 성공 리듀서");
            return{
                ...state,
                productList : action.payload
            }
        case PRINTING_PRODUCT_ONE_ERROR:
            return{
                ...state,
                error:action.payload,
            }
        case PRINTING_PRODUCT_ONE_UPDATE:
            console.log("수정리듀서");
            return{
                ...state,
                form : action.payload,
            }
        case PRINTING_PRODUCT_ONE_DELETE:
            console.log("삭제 리듀서");
            return{
                ...state,
                id : action.payload,
            }
        case PRINTING_PRODUCT_LIST_REQUEST:
            return {
                ...state,
            }
        case PRINTING_PRODUCT_LIST_SUCCESS:
            
            return{
                ...state,
                ...{UserOrderList: action.payload},
            }
        case PRINTING_PRODUCT_LIST_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST:
            return {
                ...state,
            }
        case PRINTING_PRODUCT_RESENTORDER_LIST_SUCCESS:
            return {
                ...state,
                ...{resentOrderList : action.payload}
            }
        case PRINTING_PRODUCT_RESENTORDER_LIST_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case PRINTING_PRODUCT_ADMIN_LIST_REQUEST:
            return{
                ...state,
            }
        case PRINTING_PRODUCT_ADMIN_LIST_SUCCESS:
            return{
                ...state,
                ...{AdminOrderList : action.payload}
            }
        case PRINTING_PRODUCT_ADMIN_LIST_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case PRINTING_API_SLIP_INSERT:
            return{
                ...state,
                form : action.payload,
            }
        case PRINTING_API_SLIP_INSERT_SUCCESS:
            return{
                ...state
            }
        case PRINTING_API_SLIP_INSERT_ERROR:
            return {
                ...state,
                error : action.payload,
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default shopReducer;