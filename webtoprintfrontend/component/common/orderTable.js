import useSelection from "antd/lib/table/hooks/useSelection";
import Cookies from "js-cookie";
import Router from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInSelector } from "../../store/auth/login/selector";
import { orderRequest } from "../../store/shop/action";
import LoginModel from "../account/auth/modules/LoginModal";
import { storageService } from "../elements/storage/storageService";




const OrderTable = (props) =>
{
    const dispatch = useDispatch();

    const shopRequest = (form) =>
    {
        dispatch(orderRequest(form));
    }

    const handleDeleteCart = (id) =>
    {
        dispatch(removeItem(id));
        // Router.push('/')
    }
    

    const handleOrderButton = (form) =>
    {
        alert("주문되었습니다");
        shopRequest(form);
        Router.push('/mypage/orderDilivery');
    }

    return (
        <div>
            {
                props.IsCart===true ? 
                (
                    <div className="myTit">
                        <h3>장바구니 </h3>
                    </div>
                ) : 
                (
                    <div className="myTit">
                        <h3>주문배송조회 </h3>
                        <span>고객님의 주문접수현황, 주문상태 및 배송에 대한 안내입니다.</span>
                    </div>
                )
            }
        
        <div className="myList1_n2 mgb40">
          <table>
             <thead>
                <tr>
                   <th className="borL" style={{ width:'10%' }}>주문날짜</th>
                   <th>주문제목</th>
                   <th style={{ width:'12%' }}>page/제작부수</th>
                   <th style={{ width:'12%' }}>결제금액</th>
                   <th style={{ width:'9%' }}>진행상황</th>
                   <th className="boL" style={{width: '8%'}} rowspan="2">파일업로드</th>
                   <th className="boL" style={{width:'8%'}} rowspan="2">결제</th>
                   {
                            props.IsCart===true ? 
                            (
                                <>
                                    <th className="boL" style={{width:'8%'}} rowspan="2">주문</th>
                                    <th className="boL" style={{width:'8%'}} rowspan="2">삭제</th>

                                </>
                            )
                            :
                            (
                                <th className="boL" style={{width:'8%'}} rowspan="2">주문상세</th>
                            )

                        }
                </tr>
                <tr>  
                   <th className="boL borL">주문번호</th>
                   <th colspan="2" className="boL">제작사양</th>
                   <th className="boL">배송비</th>
                   <th className="boL" style={{width:'8%'}}>배송추적</th>
                </tr>
             </thead>
             <tbody className="orderData">
                 {props.List.map((userOrder)=> (
                     <>
                        <tr>
                            <td className="borL">{userOrder.createdAt}</td>
                            <td className="a_l b">{userOrder.title}</td>
                            <td className="b">{userOrder.makeNum} page / {userOrder.makeNum}부</td>
                            <td className="a_r">62,370 원</td>
                            <td className="red">입금(결제)대기</td>
                            {
                                userOrder.isFileUpload ? (
                                    <td className="boL" rowspan="2">
                                        {
                                            userOrder.file.map((file) =>(
                                                <>
                                                {console.log(file)}
                                                    <span>{file.fileName}</span>
                                                </>
                                            ))
                                        }
                                    </td>
                                )
                                 :(
                                    <td className="boL" rowspan="2">
                                       <a href={`/shop/fileUpload/${userOrder.id}`} as={`/shop/fileUpload/${userOrder.id}`} id="orderview" className="myBtnmn">파일업로드</a>
                                    </td>
                                 )
                            }
                           {
                               userOrder.isPayment ? (
                                    <td className="boL" rowspan="2">
                                        <span>결제완료</span>
                                    </td>
                               ) : (
                                    <td className="boL" rowspan="2">
                                       <a href={`/shop/payment/${userOrder.id}`} as={`/mypage/orderDetail/${userOrder.id}`} id="orderview" className="myBtnmn">결제</a>
                                    </td>
                               )
                           }
                        {
                            props.IsCart===true ? 
                            (
                                <>
                                    {
                                        Cookies.get('token')===undefined? 
                                        (
                                          <td className="boL" rowspan="2">
                                             <LoginModel IsCart={true}/>
                                          </td>
                                        ) : 
                                        (
                                            <td className="boL" rowspan="2">
                                                <button type="button" className="btn btn-primary" onClick={(userOrder)=>handleOrderButton(userOrder)}>주문하기</button>
                                            </td>
                                        )
                                    }
                                    <td className="boL" rowspan="2">
                                        <button type="button" className="btn btn-danger" onClick={(userOrder)=>handleDeleteCart(userOrder)}>삭제</button>
                                    </td>
                                </>
                                
                            )
                            :
                            (
                                <td className="boL" rowspan="2">
                                    <a href={`/mypage/orders/${userOrder.id}`} as={`/mypage/orders/${userOrder.id}`} id="orderview" className="myBtnmn">주문상세</a>
                                </td>
                            )

                        }
                        </tr>
                        <tr>
                            <td className="boL borL">{userOrder.id}</td>
                            <td colspan="2" className="a_l boL">{
                                `${userOrder.size}(${userOrder.cutting_size}) / ${userOrder.kindBinding} / ${userOrder.bindDirection}/ 표지(${userOrder.coverPrex}) - ${userOrder.coverColor} - 아트지 250g) / 무광코팅
                                내지(양면인쇄 - 칼라인쇄(4도) - 모조지(미색) 80g)`
                                }
                            </td>
                            <td className="boL a_r">0 원</td>
                            <td className="boL">
                                <a href="#" id="trackdeli" className="myBtnsb">배송추적</a>
                                </td>
                        </tr>
                    </>
                 ))}
            </tbody>
          </table>    
        </div>
       <div className="pagingMy mgb40"><strong>1</strong></div>
      </div>
    );
}
export default OrderTable;