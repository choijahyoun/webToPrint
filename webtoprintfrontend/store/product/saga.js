import { all, select, put, call, takeEvery } from 'redux-saga/effects';
import { getBindingError, getBindingSuccess, getDocuSpecError, getDocuSpecSuccess, getPageOptionError, getPageOptionSuccess, getProcessError, getProcessInfoError, getProcessInfoListSuccess, getProcessSuccess, getSlipTypeError, getSlipTypeSuccess } from './action';
import { GET_BINDING, GET_DOCU_SPEC, GET_PAGE_OPTION, GET_PROCESS, GET_PROCESS_INFO_LIST, GET_SLIP_TYPE } from './content';
import { productBindingGet, productDocuSpecGet, productPageOptionGet, productProcessGet, productProcessInfoGet, productSlipTypeGet } from './request';
import { idSelector } from './selector';
function* bindingSaga()
{
    try{
       const res = yield call(productBindingGet);
       yield put(getBindingSuccess(res));
    }catch(error)
    {
        yield console.log(error);
        yield put(getBindingError(error));
    }
}

function* docuSpecSaga()
{   
    const id = yield select(idSelector());
  
    yield console.log(id);
    try{
        const res = yield call(productDocuSpecGet,id);
        yield put(getDocuSpecSuccess(res));
    }
    catch(error)
    {
        yield console.log(error);
        yield put(getDocuSpecError(error));
    }
}

function* pageOptionSage()
{   const id = yield select(idSelector());
    try{
        const res = yield call(productPageOptionGet,id);
        yield put(getPageOptionSuccess(res));
    }
    catch(error)
    {
        yield console.log(error);
        yield put(getPageOptionError(error));
    }
}

function* processSaga()
{
    try{
        const res = yield call(productProcessGet);
        yield put(getProcessSuccess(res));
    }
    catch(error)
    {
        yield console.log(error);
        yield put(getProcessError(error));
    }
}

function* processInfoSaga()
{
    const id = yield select(idSelector());
    try{
        const res = yield call(productProcessInfoGet, id);
        yield put(getProcessInfoListSuccess(res));
    }
    catch(error)
    {
        yield console.log(error);
        yield put(getProcessInfoError(error));
    }
}

function* slipTypeSaga()
{
    try{
        const res = yield call(productSlipTypeGet);
        yield put(getSlipTypeSuccess(res));

    }
    catch(error)
    {
        yield console.log(error);
        yield put(getSlipTypeError(error));
    }
}



export default function* rootSaga() {
    yield all([takeEvery(GET_BINDING, bindingSaga)]);
    yield all([takeEvery(GET_DOCU_SPEC, docuSpecSaga)]);
    yield all([takeEvery(GET_PAGE_OPTION, pageOptionSage)]);
    yield all([takeEvery(GET_PROCESS, processSaga)]);
    yield all([takeEvery(GET_PROCESS_INFO_LIST,processInfoSaga)]);
    yield all([takeEvery(GET_SLIP_TYPE, slipTypeSaga)]);
}