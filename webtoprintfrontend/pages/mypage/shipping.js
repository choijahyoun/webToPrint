import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import MypageNavigation from "../../component/account/modules/mypageNavigation"
import ShippingComponent from "../../component/account/mypage/shippingComponent"
import FooterDefault from "../../component/shared/footers/FooterDefault"
import HeaderDefault from "../../component/shared/headers/HeaderDefault"
import { shippingListRequest } from "../../store/mypage/shipping/action"
import { shippingListSelecotor } from "../../store/mypage/shipping/selector"


const Shipping = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <ShippingComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}
export default Shipping;