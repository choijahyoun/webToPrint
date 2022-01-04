import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminPostProcess, getAdminPostProcess } from '../../../../store/admin/product/action';
import { postProcessSelector } from '../../../../store/admin/product/selector';
import AddPostProcessPopup from '../popup/productManage/process/addProcessPopup';
import UpdatePostProcessPopup from '../popup/productManage/process/updateProcessPopup';

const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});

const PostProcessManage = () =>
{
    const postProcessList = useSelector(postProcessSelector());
    const dispatch = useDispatch();

    const getPostProcessList = () =>
    {
        dispatch(getAdminPostProcess());
    }

    useEffect(()=>
    {
        getPostProcessList();
    },[])

    const [isVisiable, setIsVisiable] = useState(false);
    const [isUpdateVisiable, setIsUpdateVisiable] = useState(false);
    const [updateId, setUpdateId] = useState();
    const [updateKind, setUpdateKind] = useState();
    const [updateName, setUpdateName] = useState();
    const [updateStandardCirculation, setUpdateStandardCirculation] = useState();
    const [updateMarketPrice, setUpdateMarketPrice] = useState();
    const [updateDiscountRate, setUpdateDiscountRate] = useState();
    const [updatePurchaseUnitPrice,setUpdatePurchaseUnitPrice] = useState();
    const [updateMarginRate, setUpdateMarginRate] = useState();
    const [updateSalesUnitPrice, setUpdateSalesUnitPrice] = useState();
    const closeModal = () =>
    {
        setIsVisiable(false);
    }

    const showModal = () =>
    {
        setIsVisiable(true); 
    }

    const closeUpdateModal = () =>
    {
        setIsUpdateVisiable(false);
    }

    const showUpdateModal = () =>
    {
        setIsUpdateVisiable(true);
    }

    const updatePostProcess = (name) => 
    {
        setUpdateId(name.id);
        setUpdateKind(name.kind);
        setUpdateName(name.name);
        setUpdateStandardCirculation(name.standard_circulation);
        setUpdateMarketPrice(name.market_price);
        setUpdateDiscountRate(name.discount_rate);
        setUpdatePurchaseUnitPrice(name.purchase_unit_price);
        setUpdateMarginRate(name.margin_rate);
        setUpdateSalesUnitPrice(name.sales_unit_price);
        showUpdateModal();
        console.log(name);
    }

    const deletePostProcess = (name) =>
    {
        dispatch(deleteAdminPostProcess(name.id));
    }

    const actions = [
        {
            name: 'update',
            description: '후가공 수정',
            icon: 'pencil',
            type: 'icon',
            onClick: updatePostProcess,
        },
        {
            name : 'delete',
            description: '후가공 삭제',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deletePostProcess,
        }
    ]

    const columns = [
        {
            field : 'kind',
            name: '분류'
        },
        {
            field : 'name',
            name : '품명'
        },
        {
            field : 'standard_circulation',
            name : '기준부수'
        },
        {
            field : 'market_price',
            name : '기준가격',
        },
        {
            field : 'discount_rate',
            name : '할인율'
        },
        {
            field : 'purchase_unit_price',
            name : '매입단가'
        },
        {
            field : 'margin_rate',
            name : '마진율',
        },
        {
            field : 'sales_unit_price',
            name : '매출단가',
        },
        {
            name : '관리',
            actions
        }
    ]

    return (
        <>
            <EuiBasicTable 
            items={postProcessList}
            columns={columns}/>
            <AddPostProcessPopup isVisiable={isVisiable} closeModal={closeModal} showModal={showModal} setIsVisialbe={setIsVisiable}/>
            <UpdatePostProcessPopup isVisiable={isUpdateVisiable} closeModal={closeUpdateModal} showModal={showUpdateModal} setIsVisialbe={setIsUpdateVisiable}
            updateId={updateId}
             updateKind={updateKind} updateName={updateName} updateStandardCirculation={updateStandardCirculation} updateMarketPrice={updateMarketPrice} 
             updateDiscountRate={updateDiscountRate} updatePurchaseUnitPrice={updatePurchaseUnitPrice} updateMarginRate={updateMarginRate} updateSalesUnitPrice={updateSalesUnitPrice}
             setUpdateKind={setUpdateKind} setUpdateName={setUpdateName} setUpdateStandardCirculation={setUpdateStandardCirculation} setUpdateMarketPrice={setUpdateMarketPrice}
             setUpdateDiscountRate={setUpdateDiscountRate} setUpdatePurchaseUnitPrice={setUpdatePurchaseUnitPrice} setUpdateMarginRate={setUpdateMarginRate} setUpdateSalesUnitPrice={setUpdateSalesUnitPrice}/>
        </>
    );
}
export default PostProcessManage;