import React from 'react';
import Login from '../../component/account/auth/login';
import BreadCrumb from '../../component/elements/BreadCrumb';
import FooterDefault from '../../component/shared/footers/FooterDefault';
import HeaderDefault from '../../component/shared/headers/HeaderDefault';


// import HeaderMobile from '../../components/shared/headers/HeaderMobile';
// import NavigationList from '../../components/shared/navigation/NavigationList';

const login = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: '로그인',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            {/* <HeaderMobile /> */}
            {/* <NavigationList /> */}
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb}/>
                <Login />
            </div>
            <FooterDefault/>
        </div>
    );
};

export default login;
