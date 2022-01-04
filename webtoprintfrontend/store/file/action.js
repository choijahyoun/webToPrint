import { FILE_NAME_ERROR, FILE_NAME_REQUEST, FILE_NAME_SUCCESS, FILE_REQUEST, FILE_SENT_ERROR, FILE_SENT_SUCCESS } from "./content"


export const fileSentRequest = (form) =>
{
    console.log(form);
    return {
        type : FILE_REQUEST,
        payload : form,
    }
}

export const fileSentSuccess = () =>
{
    return {
        type : FILE_SENT_SUCCESS
    }
}

export const fileSentError = (error) =>
{
    return {
        type:FILE_SENT_ERROR,
        paylaod : error,
    }
}

export const fileNameRequest = (id) =>
{
    return {
        type: FILE_NAME_REQUEST,
        payload : id,
    }
}

export const fileNameSuccess = (name) =>
{
    return {
        type : FILE_NAME_SUCCESS,
        paylaod : name,
    }
}

export const fileNameError = (error) =>
{
    return{
        type: FILE_NAME_ERROR,
        paylaod : error,
    }
}