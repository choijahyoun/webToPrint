
// 주문 금액 테이블 
const OrderPay = (props) =>
{

    return (
        <div className="payT2 mgb10">
        <table>
          <tbody><tr>
            <th>공급가액</th>
            <th>부가세(+)</th>
            <th>배송비(+)</th>
            <th className="red">등급할인(-)</th>
            <th className="red">쿠폰(-)</th>
            <th className="red">포인트(-)</th>
            <th className="red">상품권(-)</th>
            <th className="red">총결제금액</th>
          </tr>
          <tr>
            <td id="supply_amt_format"></td>
            <td id="vat_amt_format"></td>
            <td id="tran_amt_format"></td>
            <td id="grd_discount_amt_format"></td>
            <td id="coupon_discount_amt_format"></td>
            <td id="point_discount_amt_format"></td>
            <td id="gift_card_discount_amt_format"></td>
            <td><strong className="red" id="total_amt_format"></strong></td>
          </tr>
        </tbody></table>
      </div>
    );
}
export default OrderPay;