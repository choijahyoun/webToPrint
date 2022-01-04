import { HYDRATE } from "next-redux-wrapper";
import {
    REGISTER_REQUEST_PERSONAL,
    REGISTER_REQUEST_BUSINESS,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "./content";

export const initState = {
    IsBusiness: false,
    error : false,
    form: {},
};

const Register_reducer=(state=initState, action)=>{

    switch(action.type){
        case REGISTER_REQUEST_PERSONAL:
            return {
                ...state,
                form : action.payload,
            };
        case REGISTER_REQUEST_BUSINESS:
            return {
                ...state,
                IsBusiness : true,
                form : action.payload,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                error : action.payload,
            };
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;    

    }

}

export default Register_reducer;