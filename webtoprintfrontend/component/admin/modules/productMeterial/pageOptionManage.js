import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminPageOption, getAdminPageOption } from '../../../../store/admin/product/action';
import { pageOptionSelector } from '../../../../store/admin/product/selector';
import AddPageOptionPopup from '../popup/productManage/pageOption/addPageOptionPopup';
import UpdatePageOptionPopup from '../popup/productManage/pageOption/updatePageOptionPopup';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});
const EuiLink = dynamic(() => import('@elastic/eui/').then(module => module.EuiLink),{ssr:false});
const EuiHealth = dynamic(() => import('@elastic/eui/').then(module => module.EuiHealth),{ssr:false});
const PageOptionManage = () =>
{
    const pageOptionList = useSelector(pageOptionSelector());
    const dispatch = useDispatch();
    const getPageOptionList = () =>
    {
        dispatch(getAdminPageOption());
    }

    useEffect(()=>{
        getPageOptionList();
    },[])

    const [isVisiable, setIsVisiable] = useState(false);
    const [isUpdateVisiable, setIsUpdateVisiable] = useState(false);

    const [updateId, setUpdateId] = useState();
    const [updatePageOptioName, setUpdatePageOptionName] = useState();
    

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

    const updatePageOption = (name) => 
    {
        setUpdateId(name.id);
        setUpdatePageOptionName(name.pageOption);
        showUpdateModal();
    }

    const deletePageOption = (name) =>
    {
        dispatch(deleteAdminPageOption(name.id));
    }

    const actions = [
        {
            name: 'update',
            description: '페이지옵션 수정',
            icon: 'pencil',
            type: 'icon',
            onClick: updatePageOption,
        },
        {
            name : 'delete',
            description: '페이지옵션 삭제',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deletePageOption,
        }
    ]

    const columns = [
        {
            field: 'pageOption',
            name: '페이지옵션'
        },
        {
            name: '관리',
            actions
        }
    ]

    return (
        <>
            <EuiBasicTable
            items={pageOptionList}
            columns={columns}
            hasActions={true}/>
            <AddPageOptionPopup isVisiable={isVisiable} closeModal={closeModal} showModal={showModal} setIsVisialbe={setIsVisiable}/>
            <UpdatePageOptionPopup isVisiable={isUpdateVisiable} closeModal={closeUpdateModal} showModal={showUpdateModal} setIsVisialbe={setIsUpdateVisiable}
            updateId={updateId} updatePageOptioName={updatePageOptioName} setUpdatePageOptionName={setUpdatePageOptionName}/>
        </>
    );
}
export default PageOptionManage;