import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MypageNavigation from "../../../component/account/modules/mypageNavigation";
import OrderDetail from "../../../component/account/mypage/orderDetail";

import FooterDefault from "../../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../../component/shared/headers/HeaderDefault";
import { orderListRequest, orderOneRequest } from "../../../store/shop/action";
import {  productListSelector } from "../../../store/shop/selector";

const DymamicOrder = () =>
{
    const router = useRouter();
    const {pid} = router.query
    const orderList = useSelector(productListSelector());

    const dispatch = useDispatch();
    const getOrderList = (pid) =>
    {
       
        dispatch(orderOneRequest(pid))
    }

    useEffect(()=>
    {
        getOrderList(pid);
    },[pid])

    return (
        <div>
            <HeaderDefault/>
                <div className="container">
                    <MypageNavigation/>
                    <OrderDetail orderList={orderList}/>
                </div>
            <FooterDefault/>
        </div>
    );
}
export default DymamicOrder;