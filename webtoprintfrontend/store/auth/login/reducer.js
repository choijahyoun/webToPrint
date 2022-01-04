import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
} from './content';

import cookie from "js-cookie"
import { HYDRATE } from 'next-redux-wrapper';

export const initState = {
    isLoggedIn: false,
    token : "",
    error : "",
    form: {},
    id : 0,
};

function Loginreducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, 
                form : action.payload,
            };
        case LOGIN_SUCCESS:
            cookie.set('token',action.payload);
            return {
                ...state,
                ...{ token : action.payload },
                ...{ isLoggedIn: true },
            };
        case LOGIN_ERROR:
            return {
                ...state,
                ...{ error: action.payload},
            }
        case LOGOUT:
            return {
                ...state,
            }
        case LOGOUT_SUCCESS:
            cookie.remove('token');
            return{
                ...state,
                ...{ isLoggedIn: false },
                ...{ error:""},
                ...{ }
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default Loginreducer;
