import { HYDRATE } from "next-redux-wrapper";
import { GET_BINDING, GET_BINDING_ERROR, GET_BINDING_SUCCESS, GET_DOCU_SPEC, GET_DOCU_SPEC_ERROR, GET_DOCU_SPEC_SUCCESS, GET_PAGE_OPTION, GET_PAGE_OPTION_ERROR, GET_PAGE_OPTION_SUCCESS, GET_PROCESS, GET_PROCESS_ERROR, GET_PROCESS_INFO_LIST, GET_PROCESS_INFO_LIST_ERROR, GET_PROCESS_INFO_LIST_SUCCESS, GET_PROCESS_SUCCESS, GET_SLIP_TYPE, GET_SLIP_TYPE_ERROR, GET_SLIP_TYPE_SUCCESS } from "./content";


export const initState ={
    id : "",
    bindingList : [],
    docuSpecList : [],
    pageOptionList : [],
    processList : [],
    processInfoList : [],
    slipTypeList : [],
}

function productReducer(state = initState , action) 
{
    switch(action.type)
    {
        case GET_BINDING:
            return {
                ...state,
            }
        case GET_BINDING_SUCCESS:
            return {
                ...state,
                bindingList : action.payload,
            }
        case GET_BINDING_ERROR:
            return {
                ...state,
                error : action.payload,
            }
        case GET_DOCU_SPEC:
            return{
                ...state,
                id : action.payload,
            }
        case GET_DOCU_SPEC_SUCCESS:
            return{
                ...state,
                docuSpecList : action.payload,
            }
        case GET_DOCU_SPEC_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case GET_PAGE_OPTION:
            return{
                ...state,
                id : action.payload,
            }
        case GET_PAGE_OPTION_SUCCESS:
            return{
                ...state,
                pageOptionList : action.payload,
            }
        case GET_PAGE_OPTION_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case GET_PROCESS:
            return{
                ...state
            }
        case GET_PROCESS_SUCCESS:
            return{
                ...state,
                processList : action.payload,
            }
        case GET_PROCESS_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case GET_PROCESS_INFO_LIST:
            return {
                ...state,
            }
        case GET_PROCESS_INFO_LIST_SUCCESS: 
            return{
                ...state,
                processInfoList : action.payload,
            }
        case GET_PROCESS_INFO_LIST_ERROR: 
            return{
                ...state,
                error : action.payload,
            }
        case GET_SLIP_TYPE:
            return{
                ...state,
            }
        case GET_SLIP_TYPE_SUCCESS:
            return{
                ...state,
                slipTypeList : action.payload,
            }
        case GET_SLIP_TYPE_ERROR:
            return{
                ...state,
                error : action.payload,
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
        
    }
}
export default productReducer;