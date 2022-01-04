import { createSelector } from "reselect";
import initState from './reducer'



const ShopSelector = (state) => state.Shop || initState;

const idSelector = () => createSelector(ShopSelector, (state)=> state.id);

const errorSelecotor = () => createSelector(ShopSelector, (state)=> state.error);

const formSelector = () =>createSelector(ShopSelector , (state) => state.form);

const userOrderListSelector = () => createSelector(ShopSelector, (state) => state.UserOrderList)

const adminOrderListSelector = () => createSelector(ShopSelector, (state)=> state.AdminOrderList)

const productListSelector = () => createSelector(ShopSelector, (state)=> state.productList)

const resentOrderListSelector = () => createSelector(ShopSelector, (state)=> state.resentOrderList)

const selectPaperSelector = () => createSelector(ShopSelector, (state) => state.paper)

const selectDocuSpecSelector = () => createSelector(ShopSelector, (state) => state.docuSpec)

const selectBindingSelector = () => createSelector(ShopSelector, (state) => state.binding)



export {errorSelecotor,formSelector,userOrderListSelector,
    adminOrderListSelector,idSelector,productListSelector,resentOrderListSelector,
    selectPaperSelector,selectDocuSpecSelector,selectBindingSelector};