import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AgGridColumn,AgGridReact} from 'ag-grid-react';
import { orderListRequest, Printing_product_list_request } from "../../../store/shop/action";
import { userOrderListSelector } from "../../../store/shop/selector";
import ResentOrderTable from "../modules/resentOrderTable";




const MyPageComponent = () =>
{
    

    const dispatch = useDispatch();

    useEffect(()=>
    {
        
        
    },[])
   
    return (
        <div className="myWrap">
            <div className="myTit">
                <h3>마이페이지</h3>
            </div>
            <ResentOrderTable/>
        </div>
    );
}
export default MyPageComponent;