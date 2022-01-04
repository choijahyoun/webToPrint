import { createSelector } from "reselect";
import { initState } from "./reducer";

const ShippingSelector = (state) => state.Shipping || initState;

const idSelector = () => createSelector(ShippingSelector, (state)=> state.id);

const formSelector = () =>createSelector(ShippingSelector , (state) => state.form);

const errorSelecotor = () =>createSelector(ShippingSelector, (state)=> state.error);

const shippingListSelecotor = () =>createSelector(ShippingSelector, (state)=> state.shippingList)

export {formSelector,errorSelecotor,shippingListSelecotor,idSelector};