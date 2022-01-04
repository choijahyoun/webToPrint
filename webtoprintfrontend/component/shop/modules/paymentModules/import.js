import { importKey } from "../../../../config/config";

const Import = () =>
{
    
    IMP.init(importKey);
    IMP.request_pay({
        pg: ' inicis',
        pay_method : 'card',
        merchant_uid : 'merchant_' + new Date().getTime(),
        name : '주문명 : 결제 테스트',
        amount : 14000, 
        buyer_email : ''
    })
    return (
        <div>
            
        </div>
    );

}

export default Import;