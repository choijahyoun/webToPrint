import { all, call, put, select, takeEvery } from "@redux-saga/core/effects";
import { userError, userSuccess } from "./action";
import { USER_DELETE, USER_REQUEST, USER_UPDATE } from "./content";
import {userDeleteRequest, userListRequest, userUpdateRequest} from "./request";
import cookie from "js-cookie"
import { formSelector, idSelector } from "./selector";

function* userSaga(){
    
    try{
        const res = yield call(userListRequest,cookie.get('token'));
        if(res.data)
        {
            yield console.log(res);
            yield put(userSuccess(res.data));
        }
    }
    catch(error)
    {
        console.log(error);
        yield put(userError(error));
    }
    
}

function* userUpdateSaga(){
    const form = yield select(formSelector());
    const id = yield select(idSelector());
    try{
        yield call(userUpdateRequest,cookie.get('token'),form,id);
        
    }
    catch(error)
    {
        console.log(error);
        yield put(userError(error));
    }
}

function* userDeleteSaga(){
    const id = yield select(idSelector());
    try{
        yield call(userDeleteRequest,cookie.get('token'),id);
    }catch(error)
    {
        console.log(error);
        yield put(userError(error));
    }
}


export default function* rootSaga() {
    yield all([takeEvery(USER_REQUEST, userSaga)]);
    yield all([takeEvery(USER_DELETE,userDeleteSaga)]);
    yield all([takeEvery(USER_UPDATE,userUpdateSaga)])
}