import { all, call, fork, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {  fileDataSelector, idSelector } from "./selector";
import cookie from "js-cookie";
import {fileNameGet, fileRequest} from "./requestFile";
import { fileNameSuccess, fileSentError, fileSentSuccess } from "./action";
import { FILE_NAME_REQUEST, FILE_REQUEST } from "./content";

function* fileSaga(){
    const file = yield select(fileDataSelector());
    const id = yield select(idSelector());
    yield console.log(id);
  try{
      yield console.log("사가 진입");
      yield call(fileRequest,cookie.get('token'),file,id); 
      yield console.log("성공적으로 파일 보냄");
      yield put(fileSentSuccess());
    //   yield Router.push('/');
  }catch(err)
  {
    console.log(err);
    if(err.statusCode===403)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login');
    }
     yield put(fileSentError(err));
  }
}

function* fileNameSaga(){
  const id = yield select(idSelector());
  try{
    const res = yield call(fileNameGet,cookie.get('token'),id);
    yield put(fileNameSuccess(res));
  }catch(err)
  {
    console.log(err);
    if(err.statusCode===403)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login');
    }
     yield put(fileSentError(err));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(FILE_REQUEST, fileSaga)]);
  yield all([takeEvery(FILE_NAME_REQUEST, fileNameSaga)]);
}