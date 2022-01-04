import { GET_BINDING, GET_BINDING_ERROR, GET_BINDING_SUCCESS, GET_DOCU_SPEC, GET_DOCU_SPEC_ERROR, GET_DOCU_SPEC_SUCCESS, GET_PAGE_OPTION, GET_PAGE_OPTION_ERROR, GET_PAGE_OPTION_SUCCESS, GET_PROCESS, GET_PROCESS_ERROR, GET_PROCESS_INFO_LIST, GET_PROCESS_INFO_LIST_ERROR, GET_PROCESS_INFO_LIST_SUCCESS, GET_PROCESS_SUCCESS, GET_SLIP_TYPE, GET_SLIP_TYPE_ERROR, GET_SLIP_TYPE_SUCCESS } from "./content"


export const getBinding = () =>{
    return {
        type : GET_BINDING,
    }
}

export const getBindingSuccess = (bindingList) =>
{
    return {
        type : GET_BINDING_SUCCESS,
        payload : bindingList
    }
}

export const getBindingError = (error) =>
{
    return {
        type : GET_BINDING_ERROR,
        payload : error,
    }
}

export const getDocuSpec = (id) =>
{
    return {
        type : GET_DOCU_SPEC,
        payload : id
    }
}

export const getDocuSpecSuccess = (docuSpecList) =>
{
    return {
        type : GET_DOCU_SPEC_SUCCESS,
        payload : docuSpecList,
    }
}

export const getDocuSpecError = (error) =>
{
    return {
        type : GET_DOCU_SPEC_ERROR,
        payload : error,
    }
}

export const getPageOption = (id) =>
{
    return {
        type: GET_PAGE_OPTION,
        payload : id
    }
}

export const getPageOptionSuccess = (pageOptionList) =>
{
    return {
        type : GET_PAGE_OPTION_SUCCESS,
        payload : pageOptionList,
    }
}

export const getPageOptionError = (error) =>
{
    return{
        type : GET_PAGE_OPTION_ERROR,
        paylaod : error
    }
}

export const getProcess = () =>
{
    return{
        type : GET_PROCESS
    }
}

export const getProcessSuccess = (processList) =>
{
    return {
        type : GET_PROCESS_SUCCESS,
        payload : processList,
    }
}

export const getProcessError = (error) =>
{
    return{
        type : GET_PROCESS_ERROR,
        payload : error,
    }
}

export const getProcessInfoList = (id) =>
{
    return{
        type : GET_PROCESS_INFO_LIST,
        paylaod : id,
    }
}

export const getProcessInfoListSuccess = (processInfoList) =>
{
    return{
        type : GET_PROCESS_INFO_LIST_SUCCESS,
        payload : processInfoList,
    }
}

export const getProcessInfoError = (error) =>
{
    return{
        type : GET_PROCESS_INFO_LIST_ERROR,
        paylaod : error,
    }
}

export const getSlipType = () =>
{
    return {
        type : GET_SLIP_TYPE
    }
}

export const getSlipTypeSuccess = (slipTypeList) =>
{
    return{
        type : GET_SLIP_TYPE_SUCCESS,
        paylaod : slipTypeList,
    }
}

export const getSlipTypeError = (error) =>
{
    return{
        type :GET_SLIP_TYPE_ERROR,
        payload : error,
    }
}