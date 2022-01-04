import { createSelector } from 'reselect';
import { initState } from './reducer';

const RegisterSelector = (state) => state.Register || initState;

const errorSelecotor = () => createSelector(RegisterSelector, (state)=> state.error);

const formSelector = () =>createSelector(RegisterSelector , (state) => state.form);



const isBusinessSelecotor = () =>createSelector(RegisterSelector, (state) => state.IsBusiness);

export {errorSelecotor,formSelector,isBusinessSelecotor};