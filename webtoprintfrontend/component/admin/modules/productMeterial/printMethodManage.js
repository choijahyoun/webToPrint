import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminPrintMethod } from '../../../../store/admin/product/action';
import { printMethodListSelector } from '../../../../store/admin/product/selector';
import AddPrintMethodPopup from '../popup/productManage/printMethod/addPrintMethodPopup';
import UpdatePrintMethodPopup from '../popup/productManage/printMethod/updatePrintMethodPopup';

const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});

const PrintMethodManage = () =>
{
    const printMethodList = useSelector(printMethodListSelector());

    const [updateId, setUpdateId] = useState();
    const [updateName, setUpdateName] = useState();
    const [updatePlusColor, setUpdatePlusColor] = useState();
    const [isVisiable, setIsVisiable] = useState(false);
    const [isUpdateVisiable, setIsUpdateVisiable] = useState(false);
    const dispatch = useDispatch();
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

    const updatePrintMethod = (printMethod) =>
    {
        setUpdateId(printMethod.id);
        showUpdateModal();
    }

    const deletePrintMethod = (printMethod) =>
    {
        dispatch(deleteAdminPrintMethod(printMethod.id));
    }

    const actions = [
        {
            name: 'update',
            description: '인쇄도수 수정',
            icon: 'pencil',
            type: 'icon',
            onClick: updatePrintMethod,
        },
        {
            name : 'delete',
            description: '인쇄도수 삭제',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deletePrintMethod,
        }
    ]

    const columns = [
        {
            field : 'name',
            name : '인쇄도수',
        },
        {
            field : 'plusColor',
            name : '별색'
        },
        {
            name : '관리',
            actions,
        }
    ]

    return (
        <>
            <EuiBasicTable 
            items={printMethodList}
            columns={columns}
            />
            <AddPrintMethodPopup isVisiable={isVisiable} setIsVisiable={setIsVisiable} closeModal={closeModal} showModal={showModal}/>
            <UpdatePrintMethodPopup updateId={updateId} updateName={updateName} setUpdateName={setUpdateName} updatePlusColor={updatePlusColor} setUpdatePlusColor={setUpdatePlusColor} 
            isUpdateVisiable={isUpdateVisiable} setIsUpdateVisiable={setIsUpdateVisiable}
            closeUpdateModal={closeUpdateModal} showUpdateModal={showUpdateModal}/>
        </>
    );
}
export default PrintMethodManage;