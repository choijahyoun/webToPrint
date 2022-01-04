import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminPaper, getAdminPaper } from '../../../../store/admin/product/action';
import { paperListSelector } from '../../../../store/admin/product/selector';
import AddPaperPopup from '../popup/productManage/paper/addPaperPopup';
import UpdatePaperPopup from '../popup/productManage/paper/updatePaperPopup';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});
const EuiLink = dynamic(() => import('@elastic/eui/').then(module => module.EuiLink),{ssr:false});
const EuiHealth = dynamic(() => import('@elastic/eui/').then(module => module.EuiHealth),{ssr:false});
const PaperManage = () =>
{
    const paperList = useSelector(paperListSelector());
    const dispatch = useDispatch();
    const [updateId, setUpdateId] = useState();
    const [updatePaperName , setUpdatePaperName] = useState();
    const [updatePaperColor, setUpdatePaperColor] = useState();
    const [updatePaperWeight, setUpdatePaperWeight] = useState();
    const [updatePaperSize, setUpdatePaperSize] = useState();
    const [updateManufacturer, setUpdateManufacturer] = useState();
    const [updateSeries, setUpdateSeries] = useState();
    const [updateGrain, setUpdateGrain] = useState();
    const [updateMarketPrice, setUpdateMarketPrice] = useState();
    const [updateDiscountRate, setUpdateDiscountRate] = useState();
    const [updatePurchaseUnitPrice,setUpdatePurchaseUnitPrice] = useState();
    const [updateMarginRate, setUpdateMarginRate] = useState();
    const [updateSalesUnitPrice, setUpdateSalesUnitPrice] = useState();

    const getPaperList = () =>
    {
        dispatch(getAdminPaper());
    }

    useEffect(()=>{
        getPaperList();
    },[])

    const [isVisiable, setIsVisiable] = useState(false);
    const [isUpdateVisiable, setIsUpdateVisiable] = useState(false);

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

    const updatePaper = (name) =>
    {
        console.log(name);
        setUpdateId(name.id);
        setUpdatePaperName(name.paperName);
        setUpdatePaperColor(name.paperColor);
        setUpdatePaperWeight(name.paperWeight);
        setUpdatePaperSize(name.paperSize);
        setUpdateManufacturer(name.manufacturer);
        setUpdateSeries(name.series);
        setUpdateGrain(name.grain);
        setUpdateMarketPrice(name.market_price);
        setUpdateDiscountRate(name.discount_rate);
        setUpdatePurchaseUnitPrice(name.purchase_unit_price);
        setUpdateMarginRate(name.margin_rate);
        setUpdateSalesUnitPrice(name.sales_unit_price);
        showUpdateModal();
    }

    const deletePaper = (name) =>
    {
       dispatch(deleteAdminPaper(name.id));
    }

    const actions = [
        {
            name: 'update',
            description: '페이지옵션 수정',
            icon: 'pencil',
            type: 'icon',
            onClick: updatePaper,
        },
        {
            name : 'delete',
            description: '페이지옵션 삭제',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deletePaper,
        }
    ]

    const columns = [
        {
            field : 'paperName',
            name: '용지이름'
        },
        {
            field : 'paperColor',
            name : '용지색깔'
        },
        {
            field : 'paperWeight',
            name : '용지무게'
        },
        {
            field : 'paperSize',
            name : '사이즈'
        },
        {
            field : 'manufacturer',
            name : '제조사',
        },
        {
            field : 'series',
            name : '종이유형',
        },
        {
            field : 'grain',
            name : '종이결',
        },
        {
            field : 'market_price',
            name : '고시가',
        },
        {
            field : 'discount_rate',
            name : '할인율',
        },
        {
            field : 'purchase_unit_price',
            name : '매입단가',
        },
        {
            field : 'margin_rate',
            name : '마진율',
        },
        {
            field : 'sales_unit_price',
            name  : '매출단가',
        },
        {
            name : '관리',
            actions
        }
    ]

    return (
        <>
            <EuiBasicTable
            items={paperList}
            columns={columns}
            hasActions={true}/>
            <AddPaperPopup isVisiable={isVisiable} closeModal={closeModal} showModal={showModal} setIsVisialbe={setIsVisiable}/>
            <UpdatePaperPopup isVisiable={isUpdateVisiable} closeModal={closeUpdateModal} showModal={showUpdateModal} setIsVisialbe={setIsUpdateVisiable}
            updateId={updateId}
            updatePaperName={updatePaperName} updatePaperColor={updatePaperColor} updatePaperWeight={updatePaperWeight} updatePaperSize={updatePaperSize}
            updateManufacturer={updateManufacturer} updateSeries={updateSeries} updateGrain={updateGrain} updateMarketPrice={updateMarketPrice} updateDiscountRate={updateDiscountRate}
            updatePurchaseUnitPrice={updatePurchaseUnitPrice} updateMarginRate={updateMarginRate} updateSalesUnitPrice={updateSalesUnitPrice}
            setUpdatePaperName={setUpdatePaperName} setUpdatePaperColor={setUpdatePaperColor} setUpdatePaperWeight={setUpdatePaperWeight} setUpdatePaperSize={setUpdatePaperSize}
            setUpdateManufacturer={setUpdateManufacturer} setUpdateSeries={setUpdateSeries} setUpdateGrain={setUpdateGrain} setUpdateMarketPrice={setUpdateMarketPrice}
            setUpdateDiscountRate={setUpdateDiscountRate} setUpdatePurchaseUnitPrice={setUpdatePurchaseUnitPrice} setUpdateMarginRate={setUpdateMarginRate}
            setUpdateSalesUnitPrice={setUpdateSalesUnitPrice}/>
        </>
    );
}
export default PaperManage;
