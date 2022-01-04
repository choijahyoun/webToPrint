import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shippingListDelete, shippingListRequest } from "../../../store/mypage/shipping/action";
import {shippingListSelecotor} from "../../../store/mypage/shipping/selector"
import ShippingModal from "../modules/shippingmodal";
import ShippingUpdateModel from "../modules/shippingUpdateModel";


const ShippingComponent = () =>
{
    const shippingList = useSelector(shippingListSelecotor());
    const dispatch = useDispatch();

    const getShippingList = () =>
    {
        dispatch(shippingListRequest())
    }

    useEffect(()=>
    {
        console.log("시작");
        getShippingList();
        console.log("끝");
    },[])

    const deleteShipping = (id) =>
    {
        dispatch(shippingListDelete(id))
    }

    const handleDelete = (id) =>
    {
        alert("삭제되었습니다");
        deleteShipping(id);
    }

    return (
        <div className="myWrap">
            <div className="myTit">
                <h3>배송지관리</h3>
                <span>고객님의 배송지에 대한 관리입니다.</span>
                {console.log(shippingList)}
            </div>
            <div className="myList1_n3 mgb40">
                <table>
                    <tr>
                        <th className="borL">순번</th>
                        <th>배송지명</th>
                        <th>수령인</th>
                        <th>배송지주소</th>
                        <th>기본배송지</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                    {
                        shippingList.map((List,index) =>(
                            <>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{List.pickupLoca}</td>
                                    <td>{List.recipient}</td>
                                    <td>{List.shippingAddress + " " + List.shippingAddressEtc}</td>
                                    {
                                        List.basicShippingAddress ? (
                                            <td>
                                                기본배송지
                                            </td>
                                        ) : (
                                            <td>

                                            </td>
                                        )
                                    }
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateModal" >수정</button>
                                        <ShippingUpdateModel shipping={List}/>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(List.id)}>삭제</button>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </table>
            </div>
            <button type="button" className="btn btn-primary shippingButton1" data-toggle="modal" data-target="#exampleModal">
                    배송지관리
            </button>
            <ShippingModal shippingList={shippingList}/>
        </div>
    );
}
export default ShippingComponent;