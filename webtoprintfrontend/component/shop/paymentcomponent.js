import Router  from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { orderPay } from "../../store/payment/action";
import { orderRequest } from "../../store/shop/action";
import { formSelector } from "../../store/shop/selector";


const PaymentComponent = (props) =>
{
    
    const dispatch = useDispatch();

    const order = (id) =>
    {
        console.log(id);
        dispatch(orderPay(id));
    }
    const handleClickPayment = () =>
    {
        order(props.id);
        alert("주문되었습니다.");
        Router.push("/mypage/orderDilivery");
        
    }
    return (
        <div className="container">
            <div className="myWrap">
                <div className="myTit">
                    <h3>주문결제</h3>
                </div>
                <div>
                     <button type="button" onClick={handleClickPayment} className="btn btn-primary">결제하기</button>
                </div>
            </div>
        </div>
    ); 

}

export default PaymentComponent;