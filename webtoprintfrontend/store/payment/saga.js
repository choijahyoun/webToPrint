import { all, select, put, call, takeEvery } from 'redux-saga/effects';
import { ORDER_PAY } from './content';
import { idSelector } from './selector';
import cookie from "js-cookie";
import { PaymentRequest } from './request';
import { orderPayError, orderPaySuccess } from './action';


function* payOrderSaga(){
    const id = yield select(idSelector());
    try{
        const res = yield call(PaymentRequest,cookie.get('token'),id)
        yield put(orderPaySuccess(res));
    }catch(err)
    {
        console.log(err);
        yield put(orderPayError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(ORDER_PAY, payOrderSaga)]);
}