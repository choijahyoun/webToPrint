import { all, call, fork, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { useSelector } from "react-redux";
import { cartItemSelector, idSelector } from "./selector";

const modalSuccess = (type) => {
    notification[type]({
        message: 'Success',
        description: 'This product has been added to your cart!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Remove A Item',
        description: 'This product has been removed from your cart!',
        duration: 1,
    });
};

function* getCartSaga(){
    const cart = yield useSelector(cartItemSelector());
    try{
        yield 
    }catch(err)
    {
        console.log(err);
    }
}


export default function* rootSaga() {
    yield all([takeEvery(FILE_REQUEST, fileSaga)]);
    yield all([takeEvery(FILE_NAME_REQUEST, fileNameSaga)]);
  }