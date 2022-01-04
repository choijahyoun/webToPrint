import { actionChannel } from '@redux-saga/core/effects'
import {
    USER_DELETE,
    USER_ERROR,
    USER_REQUEST,
    USER_SUCCESS,
    USER_UPDATE,
} from './content'

export const userRequest = () =>
{
    return {
        type : USER_REQUEST,
    }
}

export const userSuccess = (userList) =>
{
    return {
        type : USER_SUCCESS,
        payload : userList
    }
}

export const userError = () =>
{
    return {
        type : USER_ERROR,
    }
}

export const userDelete = (id) =>
{
    return {
        type : USER_DELETE,
        id : id 
    }
}

export const userUpdate = (form) =>
{
    return {
        type : USER_UPDATE,
        form : form,
    }
}