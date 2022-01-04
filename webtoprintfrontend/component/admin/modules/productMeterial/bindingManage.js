
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAdminDocuspec, deleteAdminBinding, getAdminBinding } from '../../../../store/admin/product/action';
import { bindingListSelector } from '../../../../store/admin/product/selector';
import AddBindingPopup from '../popup/productManage/binding/addBindingPopup';
import UpdataBindingPopup from '../popup/productManage/binding/updateBindingPopup';

const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});
const EuiLink = dynamic(() => import('@elastic/eui/').then(module => module.EuiLink),{ssr:false});
const EuiHealth = dynamic(() => import('@elastic/eui/').then(module => module.EuiHealth),{ssr:false});

const BindingManage = () =>
{
    const bindingList = useSelector(bindingListSelector());
    const dispatch = useDispatch();
    const [updateMethod, setUpdateMethod] = useState();
    const [updateDirection, setUpdateDirection] = useState();
    const [updateId, setUpdateId] = useState();
    const getBindingList = () =>
    {
        dispatch(getAdminBinding());
    }

    useEffect(() =>{

        getBindingList();

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

    const updateBinding = (binding) => {
        console.log(binding);
        setUpdateMethod(binding.method);
        setUpdateDirection(binding.direction);
        setUpdateId(binding.id);
        showUpdateModal();
    }

    const deleteBinding = (binding) =>
    {
        dispatch(deleteAdminBinding(binding.id))
    }

    const actions = [
        {
            name: 'update',
            description: '규격 수정',
            icon: 'pencil',
            type: 'icon',
            onClick: updateBinding,
        },
        {
            name : 'delete',
            description: '규격 삭제',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deleteBinding,
        }
    ]

    const columns = [
        {
            field : 'method',
            name : '방식',
        },
        {
            field : 'direction',
            name : '방향'
        },
        {
            name : '관리',
            actions,
        }
    ]
    
    return(
        <div>
            <EuiBasicTable
            items={bindingList}
            columns={columns}
            hasActions={true}
            isSelectable={true}/>
            <AddBindingPopup isVisiable={isVisiable} closeModal={closeModal} showModal={showModal} setIsVisialbe={setIsVisiable}/>
            <UpdataBindingPopup isVisiable={isUpdateVisiable} updateBinding={updateBinding} 
            closeModal={closeUpdateModal} showModal={showUpdateModal}
            setIsVisialbe={setIsUpdateVisiable}
            updateMethod={updateMethod} setUpdateMethod={setUpdateMethod} updateDirection={updateDirection} setUpdateDirection={setUpdateDirection}
            updateId={updateId} setUpdateId={setUpdateId}/>
        </div>
    )
}
export default BindingManage;