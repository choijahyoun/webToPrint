import { useDispatch, useSelector } from "react-redux"
import OrderDetailForm from "../../../component/account/modules/orderDetail/orderDetailForm"
import { orderOneRequest } from "../../../store/shop/action"
import { formSelector } from "../../../store/shop/selector"
import OrderList from "../modules/orderDetail/orderList"
import OrderPay from "../modules/orderDetail/orderPay"
import OrderStatus from "../modules/orderDetail/orderStatus"


// 디테일이면 동적 라우팅으로 처리를 해주어야 할 것같다. 그럴려면 먼저 주문 창 부터 만드는 것이 좋을 것 같다. 
// [pid] 상태로 진행을 해야 할 것 같다. 

const OrderDetail = (props) =>
{
    
    return (
        <div className="container">
            <div className="myWrap">
                <div className="myTit"> 
                    <h3>주문사항</h3>
                    <span>고객님의 주문접수현황, 주문상태 및 배송에 대한 안내입니다.</span>
                </div>
                <OrderStatus orderList={props.orderList}/>
                <OrderPay />
                {/* <OrderList/> */}
                <OrderDetailForm orderList={props.orderList}/>
            </div>
        </div>
    );
}

export default OrderDetail;