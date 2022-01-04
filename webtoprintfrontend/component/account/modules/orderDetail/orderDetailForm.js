import Router  from "next/router";
import { useDispatch } from "react-redux";
import { orderOneDelete } from "../../../../store/shop/action";

const OrderDetailForm = (props) =>
{
    const dispatch = useDispatch();

    const deleteOrder = (id) =>
    {
        dispatch(orderOneDelete(id));
    }

    const handleUpdateButton = () =>
    {
        Router.push(`/mypage/orderDetail/modify/${props.orderList.id}`);
    }

    const handleDeleteButton = () =>
    {
        deleteOrder(props.orderList.id);
        alert("주문이 삭제되었습니다.");
        Router.push("/mypage/orderDilivery");
    }

    const handleGoButton = () =>
    {
        Router.push("/mypage/orderDilivery");
    }

    return (
        <div className="myOutline mgb40">
        <div className="myTit">
          <h4 id="myDview" style={{width: "auto"}}>주문제작 옵션</h4>
          <span className="pric">공급가액 <strong>56,700원</strong></span>
          <div className="orderUpDel">
              <button type="button" onClick={handleUpdateButton} className="btn btn-primary">수정</button>
              <button type="button" onClick={handleDeleteButton} className="btn btn-danger">삭제</button> 
          </div>
        </div>
        <div id="table" className="myList2 mgb20">
            <table>
                <tbody>
                    <tr>
                        <th>주문명</th>
                            <td colspan="3">
                            책만들기 - 테스트</td>
                        <th>제작부수</th>
                            <td>10 권</td>
                    </tr>
                    <tr>
                        <th>사이즈</th> 
                            <td>A4 (210 X 297)</td>
                        <th>제본</th>
                            <td>무선</td>
                        <th>제본방향</th>
                            <td>세로형좌철</td>
                    </tr>
                    <tr>
                        <th className="bgY">표지양단면</th>
                            <td>단면인쇄</td>
                        <th className="bgY">표지컬러</th>
                            <td>컬러인쇄(4도)</td>
                        <th className="bgY">표지용지</th>
                            <td>아트지 250g</td>
                    </tr>
                    <tr>
                        <th className="bgY">앞뒤면비닐</th>
                            <td>
                            </td>
                        <th className="bgY">표지후가공</th>
                            <td>무광코팅</td>
                    </tr>
                    <tr>
                        <th>본문양단면</th>
                            <td>양면인쇄</td>
                        <th>본문컬러</th>
                            <td>칼라인쇄(4도)</td>
                        <th>본문용지</th>
                            <td>모조지(미색) 80g</td>
                    </tr>
                    <tr>
                        <th>본문면지</th>
                            <td>- / -</td>
                        <th>표지/내지 번호</th>
                            <td>- / -</td>
                        <th>페이지수</th>
                            <td>50 페이지</td>
                    </tr>
                    <tr>
                        <th>작업내용</th>
                        <td colspan="5"></td>
                        </tr>
                </tbody>
            </table>
        </div>
        <div  className="mgr20 myTable">
          <h4 className="table3title">첨부파일</h4>
          <div className="myList2 mgb20 table3">
            <table>
              <tbody>
                <tr>
                  <th>첨부파일1</th>
                  <td id="downloadfile1">&nbsp;  <span className="myR"><a href="#" className="myBtnmg download">다운로드</a></span></td>
                </tr>
                <tr>
                  <th>첨부파일2</th>
                  <td id="downloadfile2">&nbsp;  <span className="myR"><a href="#" className="myBtnmg download">다운로드</a></span></td>
                </tr>
                <tr>
                  <th>첨부파일3</th>
                  <td id="downloadfile3">&nbsp;  <span className="myR"><a href="#" className="myBtnmg download">다운로드</a></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="myTable2">
          <h4 className="table3title">추가옵션</h4>
          <div className="myList2 mgb20 table3">
            <table>
              <tbody>
                <tr>
                  <th>디자인작업</th>
                  <td><label><input type="checkbox" id="design_request_yn" disabled="disabled"/> 요청</label></td>
                </tr>
                <tr>
                  <th>급한인쇄</th>
                  <td><label><input type="checkbox" id="urgent_order_yn" disabled="disabled"/> 요청</label></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="orderGo">
          <button type="button" onClick={handleGoButton} className="btn btn-black orderGoButton">목록으로</button>
        </div>
      </div>
    );
}
export default OrderDetailForm;