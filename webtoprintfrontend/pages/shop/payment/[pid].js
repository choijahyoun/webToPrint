// 결제관련 페이지 


import { useRouter } from "next/router";
import FooterDefault from "../../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../../component/shared/headers/HeaderDefault";
import PaymentComponent from "../../../component/shop/paymentcomponent"

const Payment = () =>{
    const router = useRouter(); 
    const {pid} = router.query; 
    

    return (
        <div>
            <HeaderDefault/>
            <PaymentComponent id={pid}/>
            <FooterDefault/>
        </div>
    ); 
};

export default Payment;