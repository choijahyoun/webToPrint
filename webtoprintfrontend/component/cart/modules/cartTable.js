import { Table } from "antd"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartItemSelector } from "../../../store/cart/selector";
import PrevArrow from "../../elements/carousel/PrevArrow";

const CartTable = () =>
{
    const cartList = {
        product : "",
        amount : "",
        price : "",
        indeviualOrder : "",
        createTime : "",
    }

    const items = useSelector(cartItemSelector());

    const [dataSource,setDataSource] = useState();

    useEffect(()=>{
        cartList.product = items.
        setDataSource(cartList);
    },[items])

    const columns = [
        {
            title : '주문제품',
            dataIndex : 'product',
        },
        {
            title : '수량x건수',
            dataIndex : 'amount'
        },
        {
            title : '주문금액',
            dataIndex : 'price'
        },
        {
            title : '개별주문',
            dataIndex : 'indeviualOrder'
        },
        {
            title : '삭제',
            dataIndex : 'delete'
        },
        {
            title : '등록일자',
            dataIndex : 'createTime'
        }
    ]

    const rowSelection = {
        type : 'checkbox',
        onChange :(selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
        }

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const handleRowSelection = () =>
    {
        selectedRowKeys 
    }

    return(
        <div>
            <Table
             rowSelection={rowSelection}
             columns={columns}
             dataSource={dataSource}
             pagination={false}
            />
        </div>
    );
}

export default CartTable;