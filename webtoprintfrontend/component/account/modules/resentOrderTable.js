import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resentOrderListRequest } from "../../../store/shop/action";
import { resentOrderListSelector } from "../../../store/shop/selector";


const ResentOrderTable = () =>
{
    const resentOrderList = useSelector(resentOrderListSelector());
    const dispatch = useDispatch();

    const getResentOrderList = () =>
    {
        dispatch(resentOrderListRequest());
    }

    useEffect(()=>
    {
        getResentOrderList();

    },[])

    return (
        <div>
            <div className="mgb10">
                <span>최근 주문내역</span>
            </div>

            <div className="payT2 mgb10">
            <table>
                <tbody>
                    <tr>
                        <th>주문번호</th>
                        <th>주문상품명</th>
                        <th>주문내역</th>
                        <th>파일업로드</th>
                        <th>결제</th>
                        <th>진행상황</th>
                    </tr>
                    {
                        resentOrderList &&
                        <tr>
                            <td>{resentOrderList.id}</td>
                            <td>{resentOrderList.titleName}</td>
                            <td>{resentOrderList.size}/{resentOrderList.kindBinding}/{resentOrderList.mainPaperNum}page/{resentOrderList.makeNum}권</td>
                            <td>
                                <button type="button"></button> 
                            </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
      </div>
    );
}

export default ResentOrderTable;