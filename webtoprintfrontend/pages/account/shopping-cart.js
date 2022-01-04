import React from 'react';
import ShoppingCart from '../../component/account/mypage/shoppingCart';

import BreadCrumb from '../../component/elements/BreadCrumb';
import FooterDefault from '../../component/shared/footers/FooterDefault';
import HeaderDefault from '../../component/shared/headers/HeaderDefault';


// import HeaderMobile from '../../components/shared/headers/HeaderMobile';
// import NavigationList from '../../components/shared/navigation/NavigationList';

const ShoppingCartPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: '장바구니',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            {/* <HeaderMobile /> */}
            {/* <NavigationList /> */}
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb}/>
                <ShoppingCart/>
            </div>
            <FooterDefault/>
        </div>
    );
};

export default ShoppingCartPage;