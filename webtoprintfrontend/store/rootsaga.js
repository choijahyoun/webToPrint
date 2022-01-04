import { all, fork } from "redux-saga/effects";
import loginSaga from "./auth/login/saga";
import registerSaga from "./auth/register/saga"
import shopSaga from "./shop/saga";
import userSaga from "./user/saga";
import shippingSaga from "./mypage/shipping/saga";
import fileSaga from "./file/saga";
import paymentSaga from "./payment/saga";
import productSaga from "./product/saga";
import adminCategorySaga from "./admin/category/saga";
import adminProductSaga from "./admin/product/saga";

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(registerSaga),
        fork(shopSaga),
        fork(userSaga),
        fork(shippingSaga),
        fork(fileSaga),
        fork(paymentSaga),
        fork(productSaga),
        fork(adminCategorySaga),
        fork(adminProductSaga),
      ]);
}