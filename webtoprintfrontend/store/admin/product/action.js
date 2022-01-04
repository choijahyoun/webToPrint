import { CREARE_ADMIN_PRINTMETHOD, CREATE_ADMIN_BINDING, CREATE_ADMIN_BINDING_SUCCESS, CREATE_ADMIN_DOCUSPEC, CREATE_ADMIN_DOCUSPEC_SUCCESS, CREATE_ADMIN_PAGEOPTION, CREATE_ADMIN_PAGEOPTION_PAGE, CREATE_ADMIN_PAGEOPTION_PAGEKIND, CREATE_ADMIN_PAGEOPTION_PAGEMETHOD, CREATE_ADMIN_PAGEOPTION_SUCCESS, CREATE_ADMIN_PAPER, CREATE_ADMIN_PAPER_SUCCESS, CREATE_ADMIN_POSTPROCESS, CREATE_ADMIN_POSTPROCESS_DETAIL, CREATE_ADMIN_POSTPROCESS_SUCCESS, CREATE_ADMIN_PRODUCT, CREATE_ADMIN_QUANTITY, DELETE_ADMIN_BINDING, DELETE_ADMIN_DOCUSPEC, DELETE_ADMIN_PAGEOPTION, DELETE_ADMIN_PAGEOPTION_PAGE, DELETE_ADMIN_PAGEOPTION_PAGEKIND, DELETE_ADMIN_PAGEOPTION_PAGEMETHOD, DELETE_ADMIN_PAPER, DELETE_ADMIN_POSTPROCESS, DELETE_ADMIN_POSTPROCESS_DETAIL, DELETE_ADMIN_PRINTMETHOD, DELETE_ADMIN_PRODUCT, DELETE_ADMIN_QUANTITY, GET_ADMIN_BINDING, GET_ADMIN_BINDING_ERROR, GET_ADMIN_BINDING_SUCCESS, GET_ADMIN_DOCUSPEC, GET_ADMIN_DOCUSPEC_ERROR, GET_ADMIN_DOCUSPEC_SUCCESS, GET_ADMIN_ONE_PRODUCT, GET_ADMIN_ONE_PRODUCT_ERROR, GET_ADMIN_ONE_PRODUCT_PROCESSDETAIL, GET_ADMIN_ONE_PRODUCT_SUCCESS, GET_ADMIN_PAGEOPTION, GET_ADMIN_PAGEOPTION_ERROR, GET_ADMIN_PAGEOPTION_SUCCESS, GET_ADMIN_PAPER, GET_ADMIN_PAPER_ERROR, GET_ADMIN_PAPER_SUCCESS, GET_ADMIN_POSTPROCESS, GET_ADMIN_POSTPROCESS_ERROR, GET_ADMIN_POSTPROCESS_SUCCESS, GET_ADMIN_PRINTMETHOD, GET_ADMIN_PRINTMETHOD_ERROR, GET_ADMIN_PRINTMETHOD_SUCCESS, GET_ADMIN_PRODUCT, GET_ADMIN_PRODUCT_ERROR, GET_ADMIN_PRODUCT_SUCCESS, GET_ADMIN_QUANTITY, GET_ADMIN_QUANTITY_ERROR, GET_ADMIN_QUANTITY_SUCCESS, GET_ADMIN_UNIT, GET_ADMIN_UNIT_ERROR, GET_ADMIN_UNIT_SUCCESS, SELECT_ADMIN_BINDING, SELECT_ADMIN_DOCUSPEC, SELECT_ADMIN_OFFSET, SELECT_ADMIN_PAGEOPTION, SELECT_ADMIN_PAPER, SELECT_ADMIN_POSTPROCESS, SELECT_ADMIN_QUANTITY, UPDATE_ADMIN_BINDING, UPDATE_ADMIN_DOCUSPEC, UPDATE_ADMIN_PAGEOPTION, UPDATE_ADMIN_PAGEOPTION_PAGE, UPDATE_ADMIN_PAGEOPTION_PAGEKIND, UPDATE_ADMIN_PAGEOPTION_PAGEMETHOD, UPDATE_ADMIN_PAPER, UPDATE_ADMIN_POSTPROCESS, UPDATE_ADMIN_POSTPROCESS_DETAIL, UPDATE_ADMIN_PRINTMETHOD, UPDATE_ADMIN_PRODUCT } from "./content"

export const getAdminProduct = () => {
    return {
        type: GET_ADMIN_PRODUCT,
    }
}

export const getAdminProductSuccess = (productList) => {
    return {
        type: GET_ADMIN_PRODUCT_SUCCESS,
        payload: productList,
    }
}

export const getAdminProductError = (error) => {
    return {
        type: GET_ADMIN_PRODUCT_ERROR,
        payload: error,
    }
}

export const getAdminOneProduct = (form) => {
    return {
        type: GET_ADMIN_ONE_PRODUCT,
        payload: form,
    }
}

export const getAdminOneProductSuccess = (productList) => {
    return {
        type: GET_ADMIN_ONE_PRODUCT_SUCCESS,
        payload: productList,
    }
}

export const getAdminOneProductError = (error) => {
    return {
        type: GET_ADMIN_ONE_PRODUCT_ERROR,
        payload: error,
    }
}

export const createAdminProduct = (form) => {
    return {
        type: CREATE_ADMIN_PRODUCT,
        payload: form,
    }
}

export const deleteAdminProduct = (form) => {
    return {
        type: DELETE_ADMIN_PRODUCT,
        payload: form,
    }
}

export const updateAdminProduct = (form) => {
    return {
        type: UPDATE_ADMIN_PRODUCT,
        payload: form,
    }
}

export const getAdminQuantity = () => {
    return {
        type: GET_ADMIN_QUANTITY,
    }
}

export const getAdminQuantitySuccess = (quantityList) => {
    return {
        type: GET_ADMIN_QUANTITY_SUCCESS,
        payload: quantityList,
    }
}

export const getAdminQuantityError = (error) => {
    return {
        type: GET_ADMIN_QUANTITY_ERROR,
        payload: error,
    }
}

export const getAdminUnit = () => {
    return {
        type: GET_ADMIN_UNIT
    }
}

export const getAdminUnitSuccess = (unitList) => {
    return {
        type: GET_ADMIN_UNIT_SUCCESS,
        payload: unitList,
    }
}

export const getAdminBinding = () => {
    return {
        type: GET_ADMIN_BINDING
    }
}

export const getAdminBindingSuccess = (bindingList) => {
    return {
        type: GET_ADMIN_BINDING_SUCCESS,
        payload: bindingList,
    }
}

export const getAdminBindingError = (error) => {
    return {
        type: GET_ADMIN_BINDING_ERROR,
        payload: error,
    }
}

export const createAdminBinding = (form) => {
    return {
        type: CREATE_ADMIN_BINDING,
        payload: form,
    }
}

export const createAdminBindingSuccess = (binding) => {
    return {
        type: CREATE_ADMIN_BINDING_SUCCESS,
        payload: binding,
    }
}

export const deleteAdminBinding = (id) => {
    return {
        type: DELETE_ADMIN_BINDING,
        payload: id,
    }
}

export const updateAdminBinding = (form) => {
    return {
        type: UPDATE_ADMIN_BINDING,
        payload: form,
    }
}

export const selectAdminBinding = (checkItem) => {
    return {
        type: SELECT_ADMIN_BINDING,
        payload: checkItem,
    }
}

export const getAdminDocuspec = () => {
    return {
        type: GET_ADMIN_DOCUSPEC,
    }
}

export const getAdminDocuspecSuccess = (docuspecList) => {
    return {
        type: GET_ADMIN_DOCUSPEC_SUCCESS,
        payload: docuspecList,
    }
}

export const getAdminDocuspecError = (error) => {
    return {
        type: GET_ADMIN_DOCUSPEC_ERROR,
        payload: error,
    }
}

export const createAdminDocuspec = (form) => {
    return {
        type: CREATE_ADMIN_DOCUSPEC,
        payload: form,
    }
}

export const createAdminDocuspecSuccess = (docuSpec) => {
    return {
        type: CREATE_ADMIN_DOCUSPEC_SUCCESS,
        payload: docuSpec
    }
}

export const deleteAdminDocuspec = (id) => {
    return {
        type: DELETE_ADMIN_DOCUSPEC,
        payload: id,
    }
}

export const updateAdminDocuspec = (form) => {
    return {
        type: UPDATE_ADMIN_DOCUSPEC,
        payload: form,
    }
}

export const selectAdminDocuspec = (checkItem) => {
    return {
        type: SELECT_ADMIN_DOCUSPEC,
        payload: checkItem,
    }
}

export const getAdminUnitError = (error) => {
    return {
        type: GET_ADMIN_UNIT_ERROR,
        payload: error,
    }
}


export const getAdminPaper = () => {
    return {
        type: GET_ADMIN_PAPER,
    }
}

export const getAdminPaperSuccess = (paperList) => {
    return {
        type: GET_ADMIN_PAPER_SUCCESS,
        payload: paperList,
    }
}

export const getAdminPaperError = (error) => {
    return {
        type: GET_ADMIN_PAPER_ERROR,
        payload: error,
    }
}

export const createAdminPaper = (form) => {
    return {
        type: CREATE_ADMIN_PAPER,
        payload: form
    }
}

export const createAdminPaperSuccess = (paper) => {
    return {
        type: CREATE_ADMIN_PAPER_SUCCESS,
        payload: paper
    }
}

export const deleteAdminPaper = (id) => {
    return {
        type: DELETE_ADMIN_PAPER,
        payload: id
    }
}

export const updateAdminPaper = (form) => {
    return {
        type: UPDATE_ADMIN_PAPER,
        payload: form
    }
}

export const selectAdminPaper = (checkItem) => {
    return {
        type: SELECT_ADMIN_PAPER,
        payload: checkItem
    }
}

export const createAdminQuantity = (form) => {
    return {
        type: CREATE_ADMIN_QUANTITY,
        payload: form,
    }
}

export const deleteAdminQuantity = (form) => {
    return {
        type: DELETE_ADMIN_QUANTITY,
        payload: form,
    }
}

export const selectAdminQuantity = (quantity) => {
    return {
        type: SELECT_ADMIN_QUANTITY,
        payload: quantity,
    }
}

export const getAdminPageOption = () => {
    return {
        type: GET_ADMIN_PAGEOPTION,
    }
}

export const getAdminPageOptionSuccess = (pageOptionList) => {
    return {
        type: GET_ADMIN_PAGEOPTION_SUCCESS,
        payload: pageOptionList,
    }
}

export const getAdminPageOptionError = (error) => {
    return {
        type: GET_ADMIN_PAGEOPTION_ERROR,
        payload: error,
    }
}

export const getAdminPostProcess = () => {
    return {
        type: GET_ADMIN_POSTPROCESS,
    }
}

export const getAdminPostProcessSuccess = (postProcessList) => {
    return {
        type: GET_ADMIN_POSTPROCESS_SUCCESS,
        payload: postProcessList,
    }
}

export const getAdminPostProcessError = (error) => {
    return {
        type: GET_ADMIN_POSTPROCESS_ERROR,
        payload: error,
    }
}

export const createAdminPageOption = () => {
    return {
        type: CREATE_ADMIN_PAGEOPTION,

    }
}

export const createAdminPageOptionSuccess = (form) => {
    return {
        type: CREATE_ADMIN_PAGEOPTION_SUCCESS,
        payload: form
    }
}

export const deleteAdminPageOption = (form) => {
    return {
        type: DELETE_ADMIN_PAGEOPTION,
        payload: form,
    }
}

export const updateAdminPageOption = (form) => {
    return {
        type: UPDATE_ADMIN_PAGEOPTION,
        payload: form,
    }
}

export const selectAdminPageOption = (checkItem) => {
    return {
        type: SELECT_ADMIN_PAGEOPTION,
        payload: checkItem,
    }
}

export const createAdminPostProcess = (form) => {
    return {
        type: CREATE_ADMIN_POSTPROCESS,
        payload: form,
    }
}

export const createAdminPostProcessSuccess = (postProcess) => {
    return {
        type: CREATE_ADMIN_POSTPROCESS_SUCCESS,
        payload: postProcess,
    }
}

export const deleteAdminPostProcess = (form) => {
    return {
        type: DELETE_ADMIN_POSTPROCESS,
        payload: form
    }
}

export const updateAdminPostProcess = (form) => {
    return {
        type: UPDATE_ADMIN_POSTPROCESS,
        payload: form
    }
}

export const selectAdminPostProcess = (checkItem) => {
    return {
        type: SELECT_ADMIN_POSTPROCESS,
        payload: checkItem,
    }
}

export const selectAdminOffset = (offset) => {
    return {
        type: SELECT_ADMIN_OFFSET,
        payload : offset,
    }
}

export const getAdminPrintMethod = () => {
    return {
        type : GET_ADMIN_PRINTMETHOD,
    }
}

export const getAdminPrintMethodSuccess = () =>{
    return {
        type : GET_ADMIN_PRINTMETHOD_SUCCESS,
    }
}

export const getAdminPrintMethodError = (error) =>{
    return {
        type : GET_ADMIN_PRINTMETHOD_ERROR,
        payload : error,
    }
}

export const createAdminPrintMethod = (printMethod) =>{
    return {
        type : CREARE_ADMIN_PRINTMETHOD,
        payload : printMethod,
    }
}

export const updateAdminPrintMethod = (form) => {
    return {
        type : UPDATE_ADMIN_PRINTMETHOD,
        paylaod : form,
    }
}

export const deleteAdminPrintMethod = (printMethodId) => {
    return {
        type : DELETE_ADMIN_PRINTMETHOD,
        payload : printMethodId,
    }
}

