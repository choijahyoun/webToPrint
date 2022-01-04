import React, { Component, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../store/cart/action';

import Link from 'next/link';
import ProductCart from '../elements/product/ProductCart';
import { amountSelector, cartItemSelector, cartTotalSelector } from '../../store/cart/selector';
import { storageService } from '../elements/storage/storageService';
import OrderTable from '../common/orderTable';


const MartShoppingCart = () => {

    const dispatch = useDispatch();

    const handleIncreaseItemQty = (product) => {
        dispatch(increaseItemQty(product));
    }

    const handleDecreaseItemQty = (product) => {
        dispatch(decreaseItemQty(product));
    }

   const handleRemoveCartItem = product => {
        dispatch(removeItem(product));
    };

    const [cartItems, setCartItems] = useState([]);
   
    let currentCartItems = [];

    useEffect(()=>
    {
        setCartItems(JSON.parse(storageService.getItem('cartList')));

    },[])

    useEffect(()=>
    {
        // dispatch(getCart());
        setCartItems(JSON.parse(storageService.getItem('cartList')));

    },[setCartItems, storageService.setItem])

    return (
        <div className="myWrap">
            <OrderTable List={cartItems} IsCart={true}/>
       </div>
               
       
    );
}



export default MartShoppingCart;
