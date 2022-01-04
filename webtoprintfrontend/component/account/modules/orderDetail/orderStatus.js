import { useState } from "react";
const OrderStatus = (props) =>
{   
    return (
        <div className="myList2 mgb10">
            <table>
              <tbody>
                <tr>
                  <th style={{width: "10%"}}>주문번호</th>
                  {/* 주문번호는 주문 아이디로 가져오면 될것이다.  */}
                    <td className="wid1" style={{width: "23%"}} id="order_no">{props.orderList.id}</td>
                  <th style={{width: "10%"}}>송장번호</th>
                    <td className="wid2" style={{width: "23%"}} id="tran_no"></td>
                  <th style={{width: "10%"}}>주문시간</th>
                  {/* 시간은 생성시간으로 보면 될것 같다. */}
                  <td className="wid3" style={{width: "24%"}} id="order_dtm">{props.orderList.createdAt}</td>
                </tr>
                <tr>
                  <th>주문상태</th>
                  <td><strong className="myTxt" id="order_status_nm">입금(결제)대기</strong>
                    {/* <span className="myR">
                      <a href="#" className="myBtnmb  mgr5" id="waitPay1" style="display: none;">무통장입금</a> <a href="#" id="waitPay2" className="myBtnmb mgr5" style="display: none;">카드결제</a>
                    </span> */}
                    </td>
                  <th>배송구분</th>
                  <td><strong className="myTxt" id="tran_type">일반인쇄 / 택배배송</strong></td>
                  <th>결제금액/방식</th>
                  <td><strong className="myTxt2" id="amt_pament_type">62,370 원 /가상계좌</strong></td>
                </tr>
                <tr>
                  <th>배송지주소</th>
                  {/* 배송지 테이블에서 가져와야 하는 곳 (기본 배송지) */}
                  <td colSpan="3" id="f_address">06330 서울 강남구 개포로 지하 522 2층</td>
                  <th>받는분</th>
                    {/* 사용자의 이름을 받는 곳 */}
                  <td id="receiver_name">최재현</td>
                </tr>
                <tr>
                  <th>배송지메모</th>
                  <td colSpan="3" id="tran_memo">-</td>
                  <th>전화번호</th>
                  <td id="phone">010-2007-2700</td>
                </tr>
              </tbody>
            </table>
          </div>
    );
}
export default OrderStatus;