import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderUpdate from "../../../../component/account/mypage/orderUpdate";
import FooterDefault from "../../../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../../../component/shared/headers/HeaderDefault";
import { orderOneRequest } from "../../../../store/shop/action";
import { productListSelector } from "../../../../store/shop/selector";


const OrderModify = () =>{
    
    const router = useRouter();
    const {pid} = router.query
    const orderList = useSelector(productListSelector());
    const [id, setId] = useState();
    const dispatch = useDispatch();
    
    const getOrderList = (pid) =>
    {
        dispatch(orderOneRequest(pid))
    }

    useEffect(()=>
    {
        setId(pid);
    },[])

    useEffect(()=>
    {
        getOrderList(id);
    },[id])

    return (
        <div>
            <div>
            <HeaderDefault/>
            {console.log(pid)}
            {console.log(orderList)}
                <div className="container">
                    <OrderUpdate orderList={orderList}/>
                </div>
            <FooterDefault/>
             </div>
        </div>
    )
}
export default OrderModify;