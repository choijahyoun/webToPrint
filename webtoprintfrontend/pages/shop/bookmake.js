import React from 'react'
import FooterDefault from '../../component/shared/footers/FooterDefault'
import HeaderDefault from '../../component/shared/headers/HeaderDefault'
import Bookmake from '../../component/shop/bookmake'

const bookMakePage = () =>{
    return (
        <div>
            <HeaderDefault/>
            <Bookmake/>
            <FooterDefault/>
        </div>
    );
}

export default bookMakePage;