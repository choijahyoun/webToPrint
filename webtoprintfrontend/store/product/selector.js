import { createSelector } from "reselect";
import { initState } from "./reducer";



const ProductSelector = (state) => state.Product || initState;

const idSelector = () => createSelector(ProductSelector, (state)=> state.id);

const bindingListSelector = () =>createSelector(ProductSelector, (state)=>state.bindingList);

const docuSpecListSelector = () =>createSelector(ProductSelector, (state)=>state.docuSpecList);

const pageOptionListSelector = () =>createSelector(ProductSelector, (state)=>state.pageOptionList);

const processListSelector = () =>createSelector(ProductSelector, (state)=>state.processList);

const processInfoListSelector = () =>createSelector(ProductSelector, (state)=> state.processInfoList);

const slipTypeListSelector = () =>createSelector(ProductSelector, (state)=>state.slipTypeList);

export {idSelector,bindingListSelector,docuSpecListSelector,pageOptionListSelector,processListSelector,slipTypeListSelector,processInfoListSelector}


