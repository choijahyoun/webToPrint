import { createSelector } from "reselect";
import { initState } from "./reducer"

const PaymentSelector = (state)=> state.PaymentReducer || initState;

const idSelector = () => createSelector( PaymentSelector, (state)=>state.id);

export {idSelector}


