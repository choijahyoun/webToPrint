import { createSelector } from "reselect";


const userSelector = (state) => state.User || initState;

const errorSelecotor = () => createSelector(userSelector, (state)=> state.error);

const userListSelector = () => createSelector(userSelector, (state) => state.userList);

const formSelector = () =>createSelector(userSelector, (state)=> state.form);

const idSelector = () => createSelector(userSelector, (state) => state.id);

export {errorSelecotor,userListSelector, formSelector, idSelector}