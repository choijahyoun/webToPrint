import React, { Component, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Link from 'next/link';
// import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';
import { isLoggedInSelector, tokenSelector } from '../../../../store/auth/login/selector';
import Cookies from 'js-cookie';

const HeaderActions= () =>
{
    const isLoggedIn = useSelector(isLoggedInSelector());
    
    return (
        <div className="header__actions">
            <Link href="/account/compare">
                <a className="header__extra">
                    <i className="icon-chart-bars"></i>
                </a>
            </Link>
            <Link href="/account/wishlist">
                <a className="header__extra">
                    <i className="icon-heart"></i>
                </a>
            </Link>
            {/* <MiniCart /> */}
            { Cookies.get('token')!=undefined ? (
                <AccountQuickLinks isLoggedIn={true} />
            ) : (
                <AccountQuickLinks isLoggedIn={false} />
            )}
        </div>
    );
}


export default HeaderActions;
