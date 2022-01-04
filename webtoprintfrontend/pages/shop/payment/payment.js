import FooterDefault from "../../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../../component/shared/headers/HeaderDefault";
import PaymentComponent from "../../../component/shop/paymentcomponent";


const Payment = () =>
{
    return(
        <div>
            <HeaderDefault/>
            <PaymentComponent/>
            <FooterDefault/>
        </div>
    );
}
export default Payment;