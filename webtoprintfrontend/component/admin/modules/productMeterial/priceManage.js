import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});

const PriceManage = () =>
{

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
    
    const updatePrice = () =>
    {

    }

    const deletePrice = () =>
    {

    }

    const actions = [
        {
            name: 'update',
            description: '가격설정 수정',
            icon: 'pencil',
            type: 'icon',
            onClick: updatePrice,
        },
        {
            name : 'delete',
            description: '가격설정 삭제',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deletePrice,
        }
    ]

    return (
        <>
            
        </>
    );
}
export default PriceManage;