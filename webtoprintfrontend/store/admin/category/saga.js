import { all, call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getLargeAdminCategoryError, getLargeAdminCategorySuccess, getMidiumAdminCategoryError, getMidiumAdminCategorySuccess, saveLargeAdminCategoryError, saveLargeAdminCategorySuccess, saveMidiumAdminCategoryError, saveMidiumAdminCategorySuccess } from "./action";
import { DELETE_LARGECATEGORY_ADMIN, DELETE_MIDIUMCATEGORY_ADMIN, GET_LARGECATEGORY_ADMIN, GET_MIDIUMCATEGORY_ADMIN, SAVE_LARGECATEGORY_ADMIN, SAVE_MIDIUMCATEGORY_ADMIN } from "./content";
import { createLargeAdminCategoryRequest, createMidiumAdminCategoryRequest, deleteLargeAdminCetegoryRequest, deleteMidiumAdminCetegoryRequest, getLargeAdminCategoryRequest, getMidiumAdminCategoryRequest } from "./request";
import cookie from "js-cookie"
import { formSelector } from "./selector";

function* getLargeAdminCategorySaga() {
    try {
       const res =  yield call(getLargeAdminCategoryRequest);
       yield console.log(cookie.get('Pycharm-9a0e83c7'));
       if(res.data)
        {
            yield console.log(res);
            yield put(getLargeAdminCategorySuccess(res.data));
        }
    } catch (error)
    {
        yield console.log(error);
        yield put(getLargeAdminCategoryError(error));
    }
}

function* getMidiumAdminCategorySaga() {
    try {
        const res = yield call(getMidiumAdminCategoryRequest);
        if(res.data)
        {
            yield console.log(res);
            yield put(getMidiumAdminCategorySuccess(res.data));
        }
    } catch (error)
    {
        yield console.log(error);
        yield put(getMidiumAdminCategoryError(error));
    }
}

function* createLargeAdminCategorySaga() {
    try {
        yield console.log('라지카테고리 생성');
        const form = yield select(formSelector());
        const res = yield call(createLargeAdminCategoryRequest,form,cookie.get('token'));
       
    } catch (error)
    {
        yield console.log(error);
      
    }
}

function* createMidiumAdminCategorySaga() {
    try {
        yield console.log('미들카테고리 생성');
        const form = yield select(formSelector());
        const res = yield call(createMidiumAdminCategoryRequest,form,cookie.get('token'));
        
    } catch (error)
    {
        yield console.log(error);
       
    }
}

function* deleteLargeAdminCategorySaga() {
    try {
        yield console.log('라지카테고리 삭제 ');
        const form = yield select(formSelector());
        const res = yield call(deleteLargeAdminCetegoryRequest,form,cookie.get('token'));
        yield console.log(res);
        yield alert('삭제되었습니다');
    } catch (error)
    {
        yield console.log(error);
        yield alert("삭제가 되지 못했습니다");
    }
}

function* deleteMidiumAdminCategorySaga() {
    try {
        yield console.log('중분류 삭제');
        const form = yield select(formSelector());
        const res = yield call(deleteMidiumAdminCetegoryRequest,form,cookie.get('token'));
        yield console.log(res);
        yield alert('삭제되었습니다');
    } catch (error)
    {
        yield console.log(error);
        yield alert("삭제가 되지 못했습니다");
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(GET_LARGECATEGORY_ADMIN, getLargeAdminCategorySaga),
        takeLatest(GET_MIDIUMCATEGORY_ADMIN, getMidiumAdminCategorySaga),
        takeLatest(SAVE_LARGECATEGORY_ADMIN,createLargeAdminCategorySaga),
        takeLatest(SAVE_MIDIUMCATEGORY_ADMIN,createMidiumAdminCategorySaga),
        takeLatest(DELETE_LARGECATEGORY_ADMIN, deleteLargeAdminCategorySaga),
        takeLatest(DELETE_MIDIUMCATEGORY_ADMIN,deleteMidiumAdminCategorySaga),
    ]);
}
