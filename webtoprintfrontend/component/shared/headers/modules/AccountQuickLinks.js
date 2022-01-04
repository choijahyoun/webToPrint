import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { LogoutAction } from '../../../../store/auth/login/action';
const AccountQuickLinks = (props) =>
{
    const dispatch = useDispatch()
    const userLogout =()=>{
        dispatch(LogoutAction());
    }

    const handleLogout=(e)=>{
        e.preventDefault();
        userLogout();
    }

    if (props.isLoggedIn === true) {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className="icon-user"></i>
                </div>
                    <div className="ps-block__right">
                        <Link href="/">
                            <a
                                onClick={handleLogout}>
                                로그아웃
                            </a>
                        </Link>
                        
                        <Link href="/mypage/mypage">
                            <a>
                                마이페이지
                            </a>
                        </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className="icon-user"></i>
                </div>
                <div className="ps-block__right">
                    <Link href="/account/login">
                        <a>로그인</a>
                    </Link>
                    <Link href="/account/register">
                        <a>회원가입</a>
                    </Link>
                </div>
            </div>
        );
    }
}


export default AccountQuickLinks;
