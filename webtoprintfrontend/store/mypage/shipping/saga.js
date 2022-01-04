import { all, call, fork, put, select, take, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { shippingError, shippingListError, shippingListSuccess, shippingSuccess } from "./action";
import { SHIPPING_DELETE_LIST, SHIPPING_LIST_REQUEST, SHIPPING_REQUEST, SHIPPING_UPDATE_LIST } from "./content";
import { formSelector,idSelector} from "./selector";
import cookie from "js-cookie";
import {shippingDelete, shippingGetRequest, shippingPostRequest, shippingUpdate} from "./request";
import { useSelector } from "react-redux";

function* shippingSaga(){
      const form = yield select(formSelector());
    try{
        yield console.log("사가 진입");
        const res = yield call(shippingPostRequest,form,cookie.get('token')); 
        yield console.log("성공적으로 배송지 보냄");
        yield put(shippingSuccess(res));
      //   yield Router.push('/');
    }catch(err)
    {
      console.log(err);
      if(err.statusCode===403)
      {
        yield alert("로그인을 해주세요");
        yield Router.push('/account/login');
      }
       yield put(shippingError(err));
    }
}

function* shppingListGetSaga(){
    try{
      yield console.log("배송지 리스트 사가 진입");
      const res = yield call(shippingGetRequest,cookie.get('token'));
      yield console.log("성공적으로 가져옴");
      yield put(shippingListSuccess(res.data));
    }
    catch(error)
    {
      console.log(error);
      if(error.statusCode===403)
      {
        yield alert("로그인을 해주세요");
        // yield Router.push('/account/login');
      }
       yield put(shippingListError(error));
    }
}

function* shippingUpdateSaga(){
  const form = yield select(formSelector());
  const id = yield select(idSelector());
  try{
    yield console.log("배송지 수정");
    yield call(shippingUpdate,cookie.get('token'),id ,form)
  }
  catch(error)
  {
    console.log(error);
    if(error.statusCode===403)
    {
      yield alert("로그인을 해주세요");
      // yield Router.push('/account/login');
    }
     yield put(shippingListError(error));
  }
}


function* shippingDeleteSaga(){
  const id = yield select(idSelector())
  console.log(id);
  try{
     yield call(shippingDelete,cookie.get('token'),id)
  }
  catch(error){
    if(error.statusCode===401)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login');
      yield console.log(error);
    }
  }
}

export default function* rootSaga() {
    yield all([takeEvery(SHIPPING_REQUEST, shippingSaga)]);
    yield all([takeEvery(SHIPPING_LIST_REQUEST, shppingListGetSaga)]);
    yield all([takeEvery(SHIPPING_DELETE_LIST, shippingDeleteSaga)]);
    yield all([takeEvery(SHIPPING_UPDATE_LIST, shippingUpdateSaga)]);
}