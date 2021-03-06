import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminDocuspec, getAdminDocuspec } from '../../../../store/admin/product/action';
import { docuspecListSelector } from '../../../../store/admin/product/selector';
import AddDocuSpecPopup from '../popup/productManage/docuspec/addDocuSpecPopup';
import UpdateDocuSepcPopup from '../popup/productManage/docuspec/updateDocuSepcPopup';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});
const EuiLink = dynamic(() => import('@elastic/eui/').then(module => module.EuiLink),{ssr:false});
const EuiHealth = dynamic(() => import('@elastic/eui/').then(module => module.EuiHealth),{ssr:false});

const DocuSpecManage = () =>
{
    const docuSpecList = useSelector(docuspecListSelector());
    const dispatch = useDispatch();
    const [updateId, setUpdateId] = useState();
    const [updateSize, setUpdateSize] = useState();
    const [updateName, setUpdateName] = useState();
    const [updateSeries, setUpdateSeries] = useState();
    const [updateCut, setUpdateCut] = useState();
    const [updateGrain, setUpdateGrain] = useState();
    const getDocuSpecList = () =>
    {
        dispatch(getAdminDocuspec());
    }

    useEffect(()=>
    {
        getDocuSpecList();
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

    const updateDocuSpec = (docuSpec) => {
        setUpdateId(docuSpec.id);
        setUpdateSize(docuSpec.size);
        setUpdateName(docuSpec.name);
        setUpdateSeries(docuSpec.series);
        setUpdateCut(docuSpec.cut);
        setUpdateGrain(docuSpec.grain);
        showUpdateModal();
    }

    const deleteDocuSpec = (docuSepc) =>
    {
        dispatch(deleteAdminDocuspec(docuSepc.id));
    }

    const actions = [
        {
            name: 'update',
            description: '?????? ??????',
            icon: 'pencil',
            type: 'icon',
            onClick: updateDocuSpec,
        },
        {
            name : 'delete',
            description: '?????? ??????',
            icon: 'trash',
            type: 'icon',
            color: 'danger',
            onClick: deleteDocuSpec,
        }
    ]

    const columns = [
        {
            field : 'name',
            name : '??????',
        },
        {
            field : 'series',
            name : '????????????',
        },
        {
            field : 'size',
            name : '????????? '
        },
        {
            field : 'cut',
            name : '??????'
        },
        {
            field : 'grain',
            name : '?????????',
        },
        {
            name : '??????',
            actions
        },
    ];


    return (
        <>
            <EuiBasicTable
            items={docuSpecList}
            columns={columns}
            hasActions={true}
            isSelectable={true}/>
            <AddDocuSpecPopup isVisiable={isVisiable} closeModal={closeModal} showModal={showModal} setIsVisialbe={setIsVisiable}/>
            <UpdateDocuSepcPopup isVisiable={isUpdateVisiable} closeModal={closeUpdateModal} 
            showModal={showUpdateModal} setIsVisialbe={setIsUpdateVisiable}
            updateId={updateId} setUpdateId={setUpdateId} updateSize={updateSize} setUpdateSize={setUpdateSize} updateName={updateName} setUpdateName={setUpdateName}
            updateSeries={updateSeries} setUpdateSeries={setUpdateSeries} updateCut={updateCut} setUpdateCut={setUpdateCut} updateGrain={updateGrain} setUpdateGrain={setUpdateGrain}
            />
        </>
    );
}
export default DocuSpecManage;