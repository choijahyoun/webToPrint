import { createSelector } from 'reselect';
import { initState } from './reducer';
/*
* form 데이터를 가져오게 하는 함수 이다. reselct를 이용하여 form데이터를 가져온다. state.auth 의 auth는 
* rootReducer 의 auth이다. 
*
* @auther 최재현
* @version 1.0 
*/



const loginSelector = (state) => state.Login || initState;

const tokenSelector = () =>createSelector(loginSelector, (state)=>state.token);

const isLoggedInSelector = () =>createSelector(loginSelector, (state) =>state.isLoggedIn);

const formSelector = () => createSelector(loginSelector, (state) => state.form);

const errorSelecotor = () => createSelector(loginSelector,(state)=> state.error);

const idSelecotor = () => createSelector(loginSelector, (state)=> state.id);

export {formSelector,isLoggedInSelector, tokenSelector, errorSelecotor , idSelecotor };