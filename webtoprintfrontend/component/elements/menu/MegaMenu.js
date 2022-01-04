import React, { Component } from 'react';

import Link from 'next/link';

const Menu = () =>{
    return (
        <div className="menu">
            <li className='menu-item-has-children has-mega-menu'>
                    <Link href="/shop/bookmake" >
                        <a>출력/제본</a>
                    </Link>
                <div className="mega-menu">
                    <div
                        className="mega-menu__column">
                        <h4>디지털인쇄</h4>
                        <ul className="mega-menu__list">
                                <li>
                                    <Link
                                        href="/shop/bookmake">
                                        <a>책만들기</a>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className='menu-item-has-children has-mega-menu'>
                    <Link href="/shop/bookmake" >
                        <a>게시판</a>
                    </Link>
                <div className="mega-menu">
                    <div
                        className="mega-menu__column">
                        <h4>게시판</h4>
                        <ul className="mega-menu__list">
                                <li>
                                    <Link
                                        href="/shop/list/notice">
                                        <a>공지게시판</a>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </li>
        </div>
    );
}


export default Menu;
