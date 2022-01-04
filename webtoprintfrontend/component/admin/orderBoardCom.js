import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminOrderListRequest } from "../../store/shop/action";
import { adminOrderListSelector } from "../../store/shop/selector";
import dynamic from 'next/dynamic'
import React, { useState } from 'react';
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false})
const EuiPage = dynamic(() => import('@elastic/eui/').then(module => module.EuiPage),{ssr:false})
const EuiSpacer = dynamic(() => import('@elastic/eui/').then(module => module.EuiSpacer),{ssr:false})
const OrderBoardCom = () =>
{
    // pagination : pageIndex, totalItem,
    // sort : sortDirection = asc, desc,

    const orderList = useSelector(adminOrderListSelector())
    const dispatch = useDispatch();

    const [pageIndex, setPageIndex] = useState(0); // 페이지 인텍스 페이지가 바뀔 1,2,3,4 이런거 
    const [pageSize, setPageSize] = useState(5); // pageSizeOptions 에 있는 숫자들
    const [sortField, setSortField] = useState('id');
    const [sortDirection , setSortDirection] = useState('asc');
    const [totalItemCount, setTotalItemCount] = useState(51); // 아이템의 전체 수량 
    const [showPerPageOption, setShowPerPageOption] = useState(true);

    const onSelectionChange = (selectedItems) => {
        console.log(selectedItems);
        // setSelectedItem(selectedItems);
      };

    const onTableChange = ({ page = {}, sort={} }) => {
        const { index, size } = page;
        setPageIndex(index);
        setPageSize(size);

        const {field, direction} = sort;
        console.log(field, direction);
        setSortField(field);
        setSortDirection(direction);
    };

    useEffect(()=>
    {
        console.log(pageIndex,pageSize);

    },[pageIndex,pageSize])

    const requestAdminOrderList = () =>
    {
        dispatch(adminOrderListRequest());
    }

    useEffect(()=>
    {
        requestAdminOrderList();
    },[])

    const selection = {
        selectable: (orderList) => orderList.id,
        onSelectionChange: onSelectionChange,
    }

    const sorting = {
        sort : {
            field : sortField,
            direction : sortDirection,
        }
    }

    const pagination = {
        pageIndex,
        pageSize,
        totalItemCount,
        pageSizeOptions : [3,5,8],
        hidePerPageOption : !showPerPageOption,
    }

    const column = [
        {
            name : '주문번호' , 
            field: 'id',
            sortable : true
        },
        {name : '생성날짜', field: 'createdAt'},
        {name : '수정날짜', field : 'updatedAt'},
        {name : '유저명', field : 'user.userEmail'}, //유저 이름으로 바뀌어야 한다. 
        {name : '상품사이즈', field: 'size'},
        {name : '재단사이즈', field : 'cutting_size'},
        {name : '제본방향' , field : 'bindDirection'},
        {name : '본문용지', field : 'mainPaper'},
        {name : '제작부수', field : 'makeNum'},
        {name : '삭제' , field : 'isDelete'}
    ]

    const tabs =[
        {
            id : 'createdAt',
            name : 'createdAt',
            content : (
                <Fragment>
                    <EuiSpacer/>

                </Fragment>
            ),
            disabled : false,
        },
        {
            id : 'userName',
            name : 'user.userEmail',
            disabled : false,
        },
    ]
    return (
      <>
        <EuiPage>
            <EuiSpacer/>
            {
                orderList ? (
                    <EuiBasicTable
                    items={orderList}
                    columns={column}
                    itemId="id"
                    sorting={sorting}
                    isSelectable={true}
                    hasActions={true}
                    selection={selection}
                    pagination={pagination}
                    onChange={onTableChange}
                    rowHeader="id"
                    />
                ) : null
            }
        </EuiPage>
       </>
    );
}
export default OrderBoardCom;