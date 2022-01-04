import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminProduct, getAdminProduct } from "../../store/admin/product/action";
import { productListSelector } from "../../store/admin/product/selector";
import dynamic from 'next/dynamic';
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const ProductMainTain = () =>
{
    const dispatch = useDispatch();
    const productList = useSelector(productListSelector());
    const [selectedItems, setSelectedItems] = useState([]);
    
    useEffect(()=>
    {
        dispatch(getAdminProduct());
    },[])

    useEffect(()=>
    {
        console.log(productList);
    },[productList])

    const onClickDelete = () => {
        
        dispatch(deleteAdminProduct(selectedItems))
        setSelectedItems([]);
      };

    const columns = [
        {
            field : 'mediumCategory.name',
            name : '분류'
        },
        {
            field : 'name',
            name : '이름',
        },
    ]


    const onSelectionChange = (selectedItems) => {

        setSelectedItems(selectedItems);
    };

    const renderDeleteButton = () => {
        if (selectedItems.length === 0) {
          return;
        }
    
        return (
          <EuiButton color="danger" iconType="trash" onClick={onClickDelete}>
            삭제 할 {selectedItems.length} 상품
          </EuiButton>
        );
      };

    const deleteButton = renderDeleteButton(); 

    const selection = {
        selectable: (item) => item,
        onSelectionChange : onSelectionChange,
    }

    return (
        <>  
            <h4>상품관리</h4>
            {deleteButton}
            <EuiBasicTable items={productList} itemId="id" columns={columns}
            isSelectable={true} selection={selection}/>
        </>
    );
}
export default ProductMainTain;