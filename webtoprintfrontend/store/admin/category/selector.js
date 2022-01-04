import { createSelector } from "reselect";
import { initState } from "./reducer";


const AdminCategorySelecter = (state)=> state.AdminCategoryReducer || initState;

const formSelector = () => createSelector(AdminCategorySelecter, (state)=>state.form);

const largeCategoryListSelector = () => createSelector(AdminCategorySelecter, (state)=>state.largeCategoryList);

const midiumCategoryListSelector = () => createSelector(AdminCategorySelecter, (state)=>state.midiumCategoryList);

const errorSelector = () => createSelector(AdminCategorySelecter, (state) => state.error);

export {
    formSelector,
    errorSelector,
    largeCategoryListSelector,
    midiumCategoryListSelector
}