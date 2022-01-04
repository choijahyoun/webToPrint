
import MypageNavigation from "../../../component/account/modules/mypageNavigation";
import HeaderDefault from "../../../component/shared/headers/HeaderDefault";
import FooterDefault from "../../../component/shared/footers/FooterDefault";
import OrderDiliveryComponent from "../../../component/account/mypage/orderDiliveryComponent";

const OrderDilivery = () =>
{
    return (
        <div>
            <HeaderDefault/>
            <div className="container">
                <MypageNavigation/>
                <OrderDiliveryComponent/>
            </div>
            <FooterDefault/>
        </div>
    );
}

export default OrderDilivery;