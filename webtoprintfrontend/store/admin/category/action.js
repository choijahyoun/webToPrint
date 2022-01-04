import { DELETE_LARGECATEGORY_ADMIN, DELETE_MIDIUMCATEGORY_ADMIN, GET_LARGECATEGORY_ADMIN, GET_LARGECATEGORY_ERROR, GET_LARGECATEGORY_SUCCESS, GET_MIDIUMCATEGORY_ADMIN, GET_MIDIUMCATEGORY_ERROR, GET_MIDIUMCATEGORY_SUCCESS, SAVE_LARGECATEGORY_ADMIN, SAVE_LARGECATEGORY_ERROR, SAVE_LARGECATEGORY_SUCCESS, SAVE_MIDIUMCATEGORY_ADMIN, SAVE_MIDIUMCATEGORY_ERROR, SAVE_MIDIUMCATEGORY_SUCCESS } from "./content"
export const getLargeAdminCategory = () =>
{
    console.log('대분류 가져오기');
    return {
        type : GET_LARGECATEGORY_ADMIN,
    }
}
export const getLargeAdminCategorySuccess = (categoryList) =>
{
    return {
        type : GET_LARGECATEGORY_SUCCESS,
        payload : categoryList
    }
}
export const getLargeAdminCategoryError = (error) =>
{
    return {
        type : GET_LARGECATEGORY_ERROR,
        payload : error,
    }
}
export const saveLargeAdminCategory = (form) =>
{
    console.log(form);
    return {
        type : SAVE_LARGECATEGORY_ADMIN,
        payload : form,
    }
}
export const getMidiumAdminCategory = () =>
{
    return {
        type : GET_MIDIUMCATEGORY_ADMIN,
    }
}
export const getMidiumAdminCategorySuccess = (categoryList) =>
{
    return{
        type : GET_MIDIUMCATEGORY_SUCCESS,
        payload : categoryList,
    }
}
export const getMidiumAdminCategoryError = (error) =>
{
    return{
        type : GET_MIDIUMCATEGORY_ERROR,
        payload : error,
    }
}
export const saveMidiumAdminCategory = (form) =>
{
    return {
        type : SAVE_MIDIUMCATEGORY_ADMIN,
        payload : form,
    }
}

export const deleteLargeAdminCategory = (form) =>
{
    return {
        type : DELETE_LARGECATEGORY_ADMIN,
        payload : form,
    }
}

export const deleteMidiumAdminCategory = (form) =>
{
    return {
        type : DELETE_MIDIUMCATEGORY_ADMIN,
        payload : form,
    }
}