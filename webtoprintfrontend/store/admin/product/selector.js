import { createSelector } from "reselect";
import { initState } from "./reducer";

const AdminProductSelecter = (state)=> state.AdminProductReducer || initState;

const formSelector = () => createSelector(AdminProductSelecter, (state)=>state.form);
const idSelector = () => createSelector(AdminProductSelecter, (state) => state.id);
const errorSelector = () => createSelector(AdminProductSelecter, (state) => state.error);

const productListSelector = () => createSelector(AdminProductSelecter, (state)=>state.productList);
const quantityListSelector = () =>createSelector(AdminProductSelecter, (state)=>state.quantityList);
const productFormSelector = () => createSelector(AdminProductSelecter, (state)=>state.productForm);
const bindingListSelector = () => createSelector(AdminProductSelecter, (state)=> state.bindingList);
const paperListSelector = () => createSelector(AdminProductSelecter, (state)=> state.paperList);
const oneProductSelector = () => createSelector(AdminProductSelecter, (state)=> state.oneProduct);
const unitListSelector = () => createSelector(AdminProductSelecter, (state)=> state.unitList);
const pageOptionSelector = () => createSelector(AdminProductSelecter, (state)=> state.pageOptionList);
const postProcessSelector = () => createSelector(AdminProductSelecter, (state)=> state.postProcessList);
const postProcessDetailSelector = () => createSelector(AdminProductSelecter, (state)=> state.postProcessDetail);
const docuspecListSelector = () => createSelector(AdminProductSelecter, (state) => state.docuspecList);
const printMethodListSelector = () => createSelector(AdminProductSelecter, (state) => state.printMethodList);
const priceListSelector = () => createSelector(AdminProductSelecter, (state) => state.priceListSelector);
const selectOffsetSelector = () => createSelector(AdminProductSelecter, (state)=> state.isOffset);

const selectBindingListSelector = () => createSelector(AdminProductSelecter, (state) => state.selectBindingList);
const selectPaperListSelector = () => createSelector(AdminProductSelecter, (state) => state.selectPaperList);
const selectDocuSpecListSelector = () => createSelector(AdminProductSelecter, (state) => state.selectDocuSpecList);
const selectPageOptionListSelector = () => createSelector(AdminProductSelecter, (state) => state.selectPageOptionList);
const selectPostProcessListSelector = () => createSelector(AdminProductSelecter, (state) => state.selectPostProcessList);
const selectProductNumSelector = () => createSelector(AdminProductSelecter, (state) => state.selectProductNum);

export {
    formSelector,
    idSelector,
    errorSelector,
    productListSelector,
    oneProductSelector,
    quantityListSelector,
    unitListSelector,
    productFormSelector,
    bindingListSelector,
    paperListSelector,
    pageOptionSelector,
    postProcessSelector,
    postProcessDetailSelector,
    docuspecListSelector,
    printMethodListSelector,
    priceListSelector,
    selectOffsetSelector,
    selectBindingListSelector,
    selectPaperListSelector,
    selectDocuSpecListSelector,
    selectPageOptionListSelector,
    selectPostProcessListSelector,
    selectProductNumSelector,
}
