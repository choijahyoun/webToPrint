import { createSelector } from "reselect";
import { initState } from "./reducer"

const CartSelector = (state)=> state.Cart || initState;

const cartItemSelector = () => createSelector( CartSelector, (state)=>state.cartItems);

const amountSelector = () => createSelector( CartSelector, (state)=> state.amount);

const cartTotalSelector = () => createSelector( CartSelector, (state)=>state.cartTotal);

const idSelector = () => createSelector( CartSelector, (state)=>state.id);

export {cartItemSelector,amountSelector,cartTotalSelector,idSelector}
