import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../store/user/action";
import {userListSelector}  from "../../store/user/selector";
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false})
const MemberBoardCom = () =>
{
    const [pageIndex, setPageIndex] = useState(0); // 페이지 인텍스 페이지가 바뀔 1,2,3,4 이런거 
    const [pageSize, setPageSize] = useState(5); // pageSizeOptions 에 있는 숫자들
    const [sortField, setSortField] = useState('id');
    const [sortDirection , setSortDirection] = useState('asc');
    const [totalItemCount, setTotalItemCount] = useState(51); // 아이템의 전체 수량 
    const [showPerPageOption, setShowPerPageOption] = useState(true);

    const onTableChange = ({ page = {}, sort={} }) => {
        const { index, size } = page;
        setPageIndex(index);
        setPageSize(size);

        const {field, direction} = sort;
        console.log(field, direction);
        setSortField(field);
        setSortDirection(direction);
    };

    const userList = useSelector(userListSelector());
    const dispatch = useDispatch();

    const pagination = {
        pageIndex,
        pageSize,
        totalItemCount,
        pageSizeOptions : [3,5,8],
        hidePerPageOption : !showPerPageOption,
    }


    const onSelectionChange = (selectedItems) => {
        console.log(selectedItems);
        // setSelectedItem(selectedItems);
      };

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

    const columns =[
        {
            name : "유저고유번호", 
            field: "id",
            sortable : true,
        },
        {
            name : "생성날짜",
            field: "createdAt"
        },
        {
            name : "수정날짜", 
            field : "updatedAt"
        },
        {
            name : "역할", 
            field : "role"
        },
        {
            name : "이메일", 
            field : "userEmail"
        },
        {
            name : "유저명", 
            field : "userName"
        },
        {
            name : "핸드폰번호",
            field : "userPhoneNumber"
        },
        {
            name : "회사명", 
            field : "Company"
        },
        {
            name : "사업자명",
            field : "BusinessPersonName"
        },
    ]

    const adminUserGetList = () =>
    {
        dispatch(userRequest());
    }

    useEffect(()=>
    {
        adminUserGetList()
    },[])

    return (
        <div>
            <EuiBasicTable
               items={userList}
               columns={columns}
               itemId="id"
               sorting={sorting}
               isSelectable={true}
               hasActions={true}
               selection={selection}
               pagination={pagination}
               onChange={onTableChange}
               rowHeader="id"
              />
        </div>
    );
}
export default MemberBoardCom;