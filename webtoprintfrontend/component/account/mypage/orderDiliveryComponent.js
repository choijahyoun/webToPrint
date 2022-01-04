import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderListRequest } from "../../../store/shop/action";
import { userOrderListSelector } from "../../../store/shop/selector";
import OrderTable from "../../common/orderTable"


const orderDiliveryComponent = () =>
{
    const userOrderList = useSelector(userOrderListSelector());
    
    const dispatch = useDispatch();
    const requestUserOrder = () =>
    {
       
        dispatch(orderListRequest());
        
    }
    useEffect(()=>
    {
        console.log("시작");
        requestUserOrder();
        console.log("끝");
    },[])

    return (
        <div className="myWrap">
            <OrderTable List={userOrderList} IsCart={false}/>
        </div>
    );
}

export default orderDiliveryComponent;