import { all, call, fork, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import Router  from "next/router";
import { tokenSelector } from "../auth/login/selector";
import { adminOrderListError, adminOrderListSuccess, apiSlipInsertError, apiSlipInsertSuccess, orderError, orderListError, orderListSuccess, orderOneError, orderOneSuccess, orderSuccess, resentOrderListError, resentOrderListSuccess} from "./action";
import { PRINTING_API_SLIP_INSERT, PRINTING_PRODUCT_ADMIN_LIST_REQUEST, PRINTING_PRODUCT_LIST_REQUEST, PRINTING_PRODUCT_ONE_DELETE, PRINTING_PRODUCT_ONE_REQUEST, PRINTING_PRODUCT_ONE_UPDATE, PRINTING_PRODUCT_REQUEST, PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST } from "./content";
import {shopRequestGet,shopAdminRequestGet, shopOneRequestGet, shopResentOrderGet} from "./requestGet";
import { formSelector, idSelector } from "./selector";
import cookie from "js-cookie"
import { func } from "prop-types";
import {shopApiRequest, shopRequestDeletePost, shopRequestImgPost, shopRequestPost, shopRequestUpdatePost} from "./request";

function* shopPostSaga(){
    const form = yield select(formSelector());
    try{
        const res = yield call(shopRequestPost,form,cookie.get('token'));
        const formData = yield new FormData();
        yield formData.append('filepdf', form.files[0]);
        yield console.log(res);
        if (res.data.response.order && form.files) {
            yield call(shopRequestImgPost, cookie.get('token'),res.data.response.order.id,formData);
            yield Router.push('/shop/payment/payment');
        }
        yield Router.push('/shop/payment/payment');
    }catch(err)
    {
      console.log(err);
      if(err.statusCode===401)
      {
        yield alert("로그인을 해주세요");
        yield Router.push('/account/login');
      }
       yield put(orderError(err));
    }
}

function* shopGetSaga(){
  try{
    const res = yield call(shopRequestGet,cookie.get('token'));
    if(res.data)
    {
      yield console.log(res);
      yield put(orderListSuccess(res.data));
    }
  }
  catch(error){
    if(error.statusCode===401)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login');
    }
    yield console.log(error);
    yield put(orderListError(error));
  }
}

function* shopOneGetSaga(){
  const id = yield select(idSelector())
  try{
    const res = yield call(shopOneRequestGet,cookie.get('token'),id)
    if(res.data)
    {
      yield console.log(res);
      yield put(orderOneSuccess(res.data));
    }
  }
  catch(error){
    if(error.statusCode===401)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login');
      yield console.log(error);
      
    }
    yield put(orderOneError(error));
  }
}

function* shopOneUpdatePostSaga(){
  const id = yield select(idSelector());
  const form = yield select(formSelector());
  try{
      yield(id, form);
      yield console.log('수정')
     yield call(shopRequestUpdatePost,cookie.get('token'),form,id)
  }
  catch(error){
    if(error.statusCode===401)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login');
    }
    yield console.log(error);
  }
}

function* shopOneDeletePostSaga(){
  const id = yield select(idSelector())
  try{
     yield call(shopRequestDeletePost,cookie.get('token'),id)
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

function* shopAdminGetSaga(){
  try{
    const res = yield call(shopAdminRequestGet,cookie.get('token'));
    if(res.data)
    {
      yield console.log(res);
      yield put(adminOrderListSuccess(res.data));
    }
    
  }
  catch(error){
    if(error.statusCode===401)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login')
    }
    yield console.log(error);
    yield put(adminOrderListError(error));
  }
}

function* shopResentOrderListGetSaga(){
  try{
    const res = yield call(shopResentOrderGet,cookie.get('token'));
    if(res.data)
    {
      yield console.log(res);
      yield put(resentOrderListSuccess(res.data));
    }
  }
  catch(error){
    if(error.statusCode===401)
    {
      yield alert("로그인을 해주세요");
      yield Router.push('/account/login')
    }
    yield console.log(error);
    yield put(resentOrderListError(error));
  }
}

function* shopSlipInsert() {
  try{
  yield console.log("전표보냄");
   const form = yield select(formSelector());
   const res = yield call(shopApiRequest, form);
   if(res.data)
   {
     yield console.log(res);
     yield put(apiSlipInsertSuccess(res.data));
   }
  }
  catch(error)
  {
    yield console.log(error);
    yield put(apiSlipInsertError(error));
  }
}

export default function* rootSaga() {
    yield all([takeEvery(PRINTING_PRODUCT_REQUEST, shopPostSaga)]);
    yield all([takeEvery(PRINTING_PRODUCT_ONE_REQUEST,shopOneGetSaga)]);
    yield all([takeEvery(PRINTING_PRODUCT_ONE_DELETE, shopOneDeletePostSaga)]);
    yield all([takeEvery(PRINTING_PRODUCT_ONE_UPDATE, shopOneUpdatePostSaga)]);
    yield all([takeEvery(PRINTING_PRODUCT_LIST_REQUEST, shopGetSaga)]);
    yield all([takeEvery(PRINTING_PRODUCT_ADMIN_LIST_REQUEST, shopAdminGetSaga)]);
    yield all([takeEvery(PRINTING_PRODUCT_RESENTORDER_LIST_REQUEST, shopResentOrderListGetSaga)]);
    yield all([takeEvery(PRINTING_API_SLIP_INSERT,shopSlipInsert)]);
}
