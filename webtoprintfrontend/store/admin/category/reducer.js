import { HYDRATE } from "next-redux-wrapper";
import { DELETE_LARGECATEGORY_ADMIN, DELETE_MIDIUMCATEGORY_ADMIN, GET_LARGECATEGORY_ADMIN, GET_LARGECATEGORY_ERROR, GET_LARGECATEGORY_SUCCESS, GET_MIDIUMCATEGORY_ADMIN, GET_MIDIUMCATEGORY_ERROR, GET_MIDIUMCATEGORY_SUCCESS, SAVE_LARGECATEGORY_ADMIN, SAVE_LARGECATEGORY_ERROR, SAVE_LARGECATEGORY_SUCCESS, SAVE_MIDIUMCATEGORY_ADMIN, SAVE_MIDIUMCATEGORY_ERROR, SAVE_MIDIUMCATEGORY_SUCCESS } from "./content"
export const initState = {
    form : {},
    largeCategoryList : [],
    midiumCategoryList : [],
    categoryList : [],
    error : "",
}
function AdminCategoryReducers(state = initState, action){
    switch(action.type)
    {
        case GET_LARGECATEGORY_ADMIN:
            return {
                ...state
            };
        case GET_LARGECATEGORY_SUCCESS:
            return {
                ...state,
                largeCategoryList : action.payload
            };
        case GET_LARGECATEGORY_ERROR: 
            return {
               ...state,
               error : action.payload
            };
        case SAVE_LARGECATEGORY_ADMIN:
            const largeCategoryList = [];
            for(let i = 0; i < state.largeCategoryList.length; i++)
            {
                largeCategoryList.push(state.largeCategoryList[i]);
            }
            largeCategoryList.push(action.payload);
            return{
                ...state,
                largeCategoryList : largeCategoryList,
                form : action.payload
            };
        case GET_MIDIUMCATEGORY_ADMIN:
            return {
                ...state
            };
        case GET_MIDIUMCATEGORY_SUCCESS:
            return {
                ...state,
                midiumCategoryList : action.payload
            };
        case GET_MIDIUMCATEGORY_ERROR:
            return{
                ...state,
                error : action.payload
            };
        case SAVE_MIDIUMCATEGORY_ADMIN:
            const midiumCategoryList = [];
            for(let i = 0 ; i < state.midiumCategoryList.length; i++)
            {
                midiumCategoryList.push(state.midiumCategoryList[i]);
            }
            midiumCategoryList.push(action.payload);
            return{
                ...state,
                midiumCategoryList : midiumCategoryList,
                form : action.payload
            };
        case DELETE_LARGECATEGORY_ADMIN:
            let deleteLargeCategoryList = [];
            deleteLargeCategoryList = state.largeCategoryList.filter(function(largeCategory){
                return largeCategory.name !== action.payload.name;
            })
            return {
                ...state,
                form : action.payload,
                largeCategoryList : deleteLargeCategoryList,
            }
        case DELETE_MIDIUMCATEGORY_ADMIN:
            let deleteMidiumCategoryList = [];
            deleteMidiumCategoryList = state.midiumCategoryList.filter(function(midiumCategory){
                return midiumCategory.name !== action.payload.name;
            })
            return{
                ...state,
                form : action.payload,
                midiumCategoryList : deleteMidiumCategoryList,
            }
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export default AdminCategoryReducers;