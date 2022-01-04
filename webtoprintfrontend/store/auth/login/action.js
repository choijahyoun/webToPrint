import {
    LOGIN,
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
} from './content';

export const LoginAction = (form) =>{
    return {
        type : LOGIN,
        payload : form
    };
};

export const Login_SuccessAction = (token) =>{
    return{
        type : LOGIN_SUCCESS,
        payload : token
    };
};

export const Login_ErrorAction = (error) =>{
    return{
        type: LOGIN_ERROR,
        payload : error
    };
};

export const LogoutAction = () =>{
    return {
        type : LOGOUT,

    };
};

export const LogoutSuccessAction=()=>{
    return {
        type: LOGOUT_SUCCESS,
    }
}

