import React from "react"
import ShoppingCart from "../../component/cart/shoppingCart";
import MartShoppingCart from "../../component/cart/MartShoppingCart";
import HeaderDefault from "../../component/shared/headers/HeaderDefault";
import FooterDefault from "../../component/shared/footers/FooterDefault";
//장바구니 페이지 
//이용자가 주문한 것이 우선 장바구니 안에 들어가고 그리고 결제가 완료가 된 것만 마이페이지에서 보여지게 만들어야 한다. 다른 곳에서는 보안을 위해서 세션 처리를 한다. 
//작성자 최재현
//작성일자 3월 15일

const cart = () =>
{
    return(
        <div>
            <HeaderDefault/>
                <div className="container">
                    <MartShoppingCart/>
                    {/* <ShoppingCart/> */}
                </div>
            <FooterDefault/>
        </div>
    )
}
export default cart;