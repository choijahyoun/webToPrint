import { BOARD_CONTENT_ERROR, BOARD_CONTENT_REQUEST, BOARD_CONTENT_SUCCESS } from "./content";

export const boardRequest = () =>
{
    return{
        type : BOARD_CONTENT_REQUEST
    }
}

export const boardSuccess = () =>
{
    return{
        type: BOARD_CONTENT_SUCCESS
    }
}

export const boardError = () =>
{
    return{
        type : BOARD_CONTENT_ERROR
    }
}