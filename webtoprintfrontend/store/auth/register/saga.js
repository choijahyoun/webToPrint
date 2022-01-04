import { all, select, put, call, takeEvery } from 'redux-saga/effects';
import { formSelector } from './selector';
import RegisterRequest from './request'
import {REGISTER_REQUEST_PERSONAL,REGISTER_REQUEST_BUSINESS} from './content'
import { Register_success,Register_error, } from './action';
import Router  from 'next/router';


function* registerSaga() {
    const form = yield select(formSelector()); // reselect를 이용하여 form 데이터를 가져온다. 
    try {
        yield call(RegisterRequest, form);
        yield put(Register_success()); 
        yield alert('회원가입이 되었습니다.');
        yield Router.push('/account/login');
    } catch (err) {
        yield put(Register_error());
        console.log(err);
    }
}


export default function* rootSaga() {
    yield all([takeEvery(REGISTER_REQUEST_PERSONAL, registerSaga)]);
    yield all([takeEvery(REGISTER_REQUEST_BUSINESS, registerSaga)]);
}