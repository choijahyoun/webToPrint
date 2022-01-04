import { all, select, put, call, takeEvery } from 'redux-saga/effects';
import { formSelector } from './selector';
import LoginRequest from './request';
import {LOGIN,LOGOUT} from './content'

import {Login_SuccessAction, Login_ErrorAction,LogoutSuccessAction} from './action';
import Router  from 'next/router';

function* loginSaga() {
    const form = yield select(formSelector());
    try {
        const res = yield call(LoginRequest, form);
        if(res.Role==='Admin')
        {
            yield Router.push('/admin/dashboard');
        }
        yield put(Login_SuccessAction(res.token));

    } catch (err) {
        yield put(Login_ErrorAction(err))
    }
}

function* logOutSaga() {
    try {
        yield put(LogoutSuccessAction());
        yield Router.push('/');
        
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(LOGIN, loginSaga)]);
    yield all([takeEvery(LOGOUT, logOutSaga)]);
}