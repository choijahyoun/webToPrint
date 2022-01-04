import ActionButton from "antd/lib/modal/ActionButton";
import { HYDRATE } from "next-redux-wrapper";
import { FILE_NAME_ERROR, FILE_NAME_REQUEST, FILE_NAME_SUCCESS, FILE_REQUEST, FILE_SENT_ERROR, FILE_SENT_SUCCESS } from "./content";

export const initState= {
    error : "",
    file : [],
    id : "",
    name : "",
}

const fileReducer = (state=initState, action) =>
{
    switch(action.type)
    {
        case FILE_REQUEST:
            console.log(action.payload);
        return {
            ...state,
            file : action.payload.file,
            id : action.payload.orderId,
        }
        case FILE_SENT_SUCCESS:
            return{
                ...state,
            }
        case FILE_SENT_ERROR:
            return {
                ...state,
                error : action.payload
            }
        case FILE_NAME_REQUEST:
            return {
                ...state,
                id : action.payload
            }
        case FILE_NAME_SUCCESS:
            return{
                ...state,
                name : action.payload
            }
        case FILE_NAME_ERROR:
            return{
                ...state,
                error : action.payload
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default fileReducer;