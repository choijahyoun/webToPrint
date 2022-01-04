import { all, call, put, select, takeLatest } from "redux-saga/effects";
import cookie from "js-cookie"
import { formSelector, idSelector } from "./selector";
import { createBindingRequest, createDocuSpecRequest, createPageOptionRequest, createPaperRequest, createPostProcessRequest, createPrintMethodRequest, createProductImgRequest, createProductRequest, createProductSortRequest, deleteBindingRequest, deleteDocuSpecRequest, deletePageOptionRequest, deletePaperRequest, deletePostProcessRequest, deletePrintMethodRequest, deleteProductRequest, getBindingRequest, getDocuSpecRequest, getOneProductRequest, getPageOptionRequest, getPaperRequest, getPostProcessRequest, getProductRequest, getUnitRequest, updateBindingRequest, updateDocuSpecRequest, updatePageOptionRequest, updatePaperRequest, updatePostProcessRequest, updatePrintMethodRequest } from "./request";
import { CREARE_ADMIN_PRINTMETHOD, CREATE_ADMIN_BINDING, CREATE_ADMIN_DOCUSPEC, CREATE_ADMIN_PAGEOPTION, CREATE_ADMIN_PAPER, CREATE_ADMIN_POSTPROCESS, CREATE_ADMIN_PRODUCT, DELETE_ADMIN_BINDING, DELETE_ADMIN_DOCUSPEC, DELETE_ADMIN_PAGEOPTION, DELETE_ADMIN_PAPER, DELETE_ADMIN_POSTPROCESS, DELETE_ADMIN_PRINTMETHOD, DELETE_ADMIN_PRODUCT, GET_ADMIN_BINDING, GET_ADMIN_DOCUSPEC, GET_ADMIN_DOCUSPEC_ERROR, GET_ADMIN_ONE_PRODUCT, GET_ADMIN_PAGEOPTION, GET_ADMIN_PAPER, GET_ADMIN_PAPER_ERROR, GET_ADMIN_POSTPROCESS, GET_ADMIN_PRODUCT, GET_ADMIN_UNIT, UPDATE_ADMIN_BINDING, UPDATE_ADMIN_DOCUSPEC, UPDATE_ADMIN_PAGEOPTION, UPDATE_ADMIN_PAPER, UPDATE_ADMIN_POSTPROCESS, UPDATE_ADMIN_PRINTMETHOD } from "./content";
import { createAdminBindingSuccess, createAdminDocuspecSuccess, createAdminPageOptionSuccess, createAdminPaperSuccess, createAdminPostProcessSuccess, getAdminBindingError, getAdminBindingSuccess, getAdminDocuspecError, getAdminDocuspecSuccess, getAdminOneProductError, getAdminOneProductSuccess, getAdminPageOptionError, getAdminPageOptionSuccess, getAdminPaper, getAdminPaperError, getAdminPaperSuccess, getAdminPostProcessSuccess, getAdminProductError, getAdminProductSuccess, getAdminUnitError, getAdminUnitSuccess, selectAdminPageOption, updateAdminPageOption } from "./action";
import Router from 'next/router';

function* getAdminProductSaga() {
    try {
        yield console.log('관리자 상품 가져오기');
        const res = yield call(getProductRequest);
        if (res.data) {
            yield console.log(res);
            yield put(getAdminProductSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminProductError(error));
    }
}

function* getAdminOneProductSaga() {
    const form = yield select(formSelector());
    try {
        yield console.log(form);
        const res = yield call(getOneProductRequest, cookie.get('token'), form);
        if (res.data) {
            yield put(getAdminOneProductSuccess(res.data.response.product));
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminOneProductError(error));
    }
}

function* getAdminUnitSaga() {
    try {
        yield console.log()
        const res = yield call(getUnitRequest, cookie.get('token'));
        if (res.data) {
            yield put(getAdminUnitSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminUnitError(error));
    }
}

function* createAdminProductSaga() {
    const form = yield select(formSelector());
    yield console.log(form);
    try {
        const res = yield call(createProductRequest, cookie.get('token'), form);
        const formData = yield new FormData();
        yield formData.append('id', res.data.response.product.id);
        yield formData.append('productImg', form.files[0]);
        yield console.log(res);
        
        if (res.data.response.product && form.files) {
            yield call(createProductImgRequest, cookie.get('token'), formData);
            yield call(createProductSortRequest, cookie.get('token'), form.sortList, res.data.response.product.id );
            yield Router.push('/admin/productManage');
        }
    } catch (error) {
        yield console.log(error)
    }
}

function* deleteAdminProductSaga() {
    const form = yield select(formSelector());
    try {
        yield call(deleteProductRequest, cookie.get('token'), form);
    } catch(error)
    {
        yield console.log(error);
    }
}

function* getAdminBindingSaga() {
    try {
        const res = yield call(getBindingRequest, cookie.get('token'));
        if (res.data) {
            yield put(getAdminBindingSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminBindingError(error));
    }
}

function* createAdminBindingSaga() {
    const form = yield select(formSelector());
    try {
        const res = yield call(createBindingRequest, cookie.get('token'), form);
        if (res.data) {
            yield put(createAdminBindingSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* deleteAdminBindiengSaga() {
    const id = yield select(idSelector());
    try {
        yield call(deleteBindingRequest, cookie.get('token'), id);
    } catch (error) {
        yield console.log(error);
    }
}

function* updateAdminBindingSaga() {
    const id = yield select(idSelector());
    const form = yield select(formSelector());
    try {
        yield call(updateBindingRequest, cookie.get('token'), id, form);
    } catch (error) {
        yield console.log(error);
    }
}

function* getAdminDocuspecSaga() {
    try {
        const res = yield call(getDocuSpecRequest, cookie.get('token'));
        if (res.data) {
            yield put(getAdminDocuspecSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminDocuspecError(error));
    }
}

function* createAdminDocuspecSaga() {
    const form = yield select(formSelector());
    try {
        const res = yield call(createDocuSpecRequest, cookie.get('token'), form);
        if (res.data) {
            yield put(createAdminDocuspecSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* deleteAdminDocuspecSaga() {
    const id = yield select(idSelector());
    try {
        yield call(deleteDocuSpecRequest, cookie.get('token'), id)
    } catch (error) {
        yield console.log(error);
    }
}

function* updateAdminDocuspecSaga() {
    const id = yield select(idSelector());
    const form = yield select(formSelector());
    yield console.log(form);
    try {
        yield call(updateDocuSpecRequest, cookie.get('token'), id, form);

    } catch (error) {
        yield console.log(error);
    }
}

function* getAdminPaperSaga() {
    try {
        const res = yield call(getPaperRequest, cookie.get('token'));
        if (res.data) {
            yield put(getAdminPaperSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminPaperError(error));
    }
}

function* createAdminPaperSaga() {
    const form = yield select(formSelector());
    try {
        const res = yield call(createPaperRequest, cookie.get('token'), form);
        if (res.data) {
            yield put(createAdminPaperSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* deleteAdminPaperSaga() {
    const id = yield select(idSelector());
    try {
        yield call(deletePaperRequest, cookie.get('token'), id)
    } catch (error) {
        yield console.log(error)
    }
}

function* updateAdminPaperSaga() {
    const id = yield select(idSelector());
    const form = yield select(formSelector());
    try {
        yield call(updatePaperRequest, cookie.get('token'), id, form)
    } catch (error) {
        yield console.log(error);
    }
}

function* getAdminPageOptionSaga() {
    try {
        const res = yield call(getPageOptionRequest, cookie.get('token'));
        if (res.data) {
            yield put(getAdminPageOptionSuccess(res.data))
        }
    } catch (error) {
        yield console.log(error);
        yield put(getAdminPageOptionError(error));
    }
}

function* createAdminPageOptionSaga() {
    const form = yield select(formSelector());
    yield console.log(form);
    try {
        const res = yield call(createPageOptionRequest, cookie.get('token'), form);
        if (res.data) {
            yield put(createAdminPageOptionSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* deleteAdminPageOptionSaga() {
    const id = yield select(idSelector());
    try {
        yield call(deletePageOptionRequest, cookie.get('token'), id);
    } catch (error) {
        yield console.log(error);
    }
}

function* updateAdminPageOptionSaga() {
    const id = yield select(idSelector());
    const form = yield select(formSelector());
    try {
        yield call(updatePageOptionRequest, cookie.get('token'), id, form);
    } catch (error) {
        yield console.log(error);
    }
}

function* getAdminPostProcessSaga() {
    try {
        const res = yield call(getPostProcessRequest, cookie.get('token'));
        if (res.data) {
            yield put(getAdminPostProcessSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* createAdminPostProcessSaga() {
    const form = yield select(formSelector());
    try {
        const res = yield call(createPostProcessRequest, cookie.get('token'), form);
        if (res.data) {
            yield put(createAdminPostProcessSuccess(res.data));
        }
    } catch (error) {
        yield console.log(error);
    }
}

function* deleteAdminPostProcessSaga() {
    const id = yield select(idSelector());
    try {
        yield call(deletePostProcessRequest, cookie.get('token'), id);
    } catch (error) {
        yield console.log(error);
    }
}

function* updateAdminPostProcessSaga() {
    const id = yield select(idSelector());
    const form = yield select(formSelector());
    try {
        yield call(updatePostProcessRequest, cookie.get('token'), id, form);
    } catch (error) {
        yield console.log(error);
    }
}

function* createAdminPrintMethodSaga() {
    const form = yield select(formSelector());
    try {
        yield call(createPrintMethodRequest, cookie.get('token'), form);
    } catch (error) {
        yield console.log(error);
    }
}

function* updateAdminPrintMethodSaga() {
    const form = yield select(formSelector());
    try {
        yield call(updatePrintMethodRequest, cookie.get('token'), form, id);
    } catch (error) {
        yield console.log(error);
    }
}

function* deleteAdminPrintMethodSaga() {
    const id = yield select(idSelector());
    try {
        yield call(deletePrintMethodRequest, cookie.get('token'), id);
    } catch (error) {
        yield console.log(error);
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(GET_ADMIN_ONE_PRODUCT, getAdminOneProductSaga),
        takeLatest(GET_ADMIN_PRODUCT, getAdminProductSaga),
        takeLatest(CREATE_ADMIN_PRODUCT, createAdminProductSaga),
        takeLatest(DELETE_ADMIN_PRODUCT, deleteAdminProductSaga),
        takeLatest(GET_ADMIN_UNIT, getAdminUnitSaga),
        takeLatest(GET_ADMIN_DOCUSPEC, getAdminDocuspecSaga),
        takeLatest(CREATE_ADMIN_DOCUSPEC, createAdminDocuspecSaga),
        takeLatest(DELETE_ADMIN_DOCUSPEC, deleteAdminDocuspecSaga),
        takeLatest(UPDATE_ADMIN_DOCUSPEC, updateAdminDocuspecSaga),
        takeLatest(GET_ADMIN_PAPER, getAdminPaperSaga),
        takeLatest(CREATE_ADMIN_PAPER, createAdminPaperSaga),
        takeLatest(DELETE_ADMIN_PAPER, deleteAdminPaperSaga),
        takeLatest(UPDATE_ADMIN_PAPER, updateAdminPaperSaga),
        takeLatest(GET_ADMIN_BINDING, getAdminBindingSaga),
        takeLatest(CREATE_ADMIN_BINDING, createAdminBindingSaga),
        takeLatest(DELETE_ADMIN_BINDING, deleteAdminBindiengSaga),
        takeLatest(UPDATE_ADMIN_BINDING, updateAdminBindingSaga),
        takeLatest(GET_ADMIN_PAGEOPTION, getAdminPageOptionSaga),
        takeLatest(CREATE_ADMIN_PAGEOPTION, createAdminPageOptionSaga),
        takeLatest(DELETE_ADMIN_PAGEOPTION, deleteAdminPageOptionSaga),
        takeLatest(UPDATE_ADMIN_PAGEOPTION, updateAdminPageOptionSaga),
        takeLatest(GET_ADMIN_POSTPROCESS, getAdminPostProcessSaga),
        takeLatest(CREATE_ADMIN_POSTPROCESS, createAdminPostProcessSaga),
        takeLatest(DELETE_ADMIN_POSTPROCESS, deleteAdminPostProcessSaga),
        takeLatest(UPDATE_ADMIN_POSTPROCESS, updateAdminPostProcessSaga),
        takeLatest(CREARE_ADMIN_PRINTMETHOD, createAdminPrintMethodSaga),
        takeLatest(UPDATE_ADMIN_PRINTMETHOD, updateAdminPrintMethodSaga),
        takeLatest(DELETE_ADMIN_PRINTMETHOD, deleteAdminPrintMethodSaga),
    ])
}
