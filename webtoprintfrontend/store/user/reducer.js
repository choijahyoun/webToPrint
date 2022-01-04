
import { HYDRATE } from 'next-redux-wrapper'
import {
    USER_DELETE,
    USER_ERROR,
    USER_REQUEST,
    USER_SUCCESS,
    USER_UPDATE,
} from './content'

export const initState = {
    form : "",
    userList : [],
    error : "",
    userId : "",
}

const userReducer = (state = initState, action) =>
{
    switch(action.type){
        case USER_REQUEST:
            return {
                ...state,
            }
        case USER_SUCCESS:
            return {
                ...state,
                userList : action.payload
            }
        case USER_ERROR: 
            return {
                ...state,
                error : action.payload
            }
        case USER_UPDATE:
            return{
                ...state,
                form : action.payload,
                id : action.payload.id
            }
        case USER_DELETE:
            return {
                ...state,
                userId : action.payload
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default userReducer;