import { combineReducers } from 'redux';
import Login from './auth/login/reducer';
import Register from './auth/register/reducer';
import Shop from './shop/reducer';
import User from './user/reducer';
import Shipping from './mypage/shipping/reducer';
import FileReducer from './file/reducer';
import PaymentReducer from './payment/reducer';
import Product from './product/reducer';
import AdminCategoryReducer from './admin/category/reducer';
import AdminProductReducer from './admin/product/reducer';
// import Cart from './cart/reducer';

export default combineReducers({
    Login,
    Register,
    Shop,
    User,
    Shipping,
    FileReducer,
    PaymentReducer,
    Product,
    AdminCategoryReducer,
    AdminProductReducer
    // Cart
});