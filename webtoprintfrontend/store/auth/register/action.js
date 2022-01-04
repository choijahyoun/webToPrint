import {
    REGISTER_REQUEST_PERSONAL,
    REGISTER_REQUEST_BUSINESS,
    REGISTER_SUCCESS,
    REGISTER_ERROR
} from "./content"



export const Register_request_personal = (form) =>
{
    return {
        type : REGISTER_REQUEST_PERSONAL,
        payload : form
    }
}

export const Register_request_business = (form) =>
{
    return {
        type : REGISTER_REQUEST_BUSINESS,
        payload : form
    }
}

export const Register_success = () =>
{
    return {
        type : REGISTER_SUCCESS
    }
}

export const Register_error = (error) =>
{
    return {
        type : REGISTER_ERROR,
        payload : error
    }
}