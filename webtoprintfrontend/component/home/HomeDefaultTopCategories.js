import React from 'react';
import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>주문 바로가기</h3>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop/bookmake">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/yeolimprinting/book.png" alt="martfury" />
                        <p>책자</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/yeolimprinting/card.png" alt="martfury" />
                        <p>카드엽서</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/yeolimprinting/namecard.png" alt="martfury" />
                        <p>명함</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/yeolimprinting/pamplate.png" alt="martfury" />
                        <p>홍보전단</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/yeolimprinting/md_img05.png" alt="martfury" />
                        <p>현수막/배너</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/yeolimprinting/md_img06.png" alt="martfury" />
                        <p>패브릭 프린팅</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
