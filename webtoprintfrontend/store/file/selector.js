import { createSelector } from "reselect";
import { initState } from "./reducer";

const fileSelector = (state) => state.FileReducer || initState;

const fileDataSelector = () =>createSelector(fileSelector, (state)=>state.file);

const idSelector = () => createSelector(fileSelector, (state)=>state.id);

export {fileDataSelector,idSelector};

