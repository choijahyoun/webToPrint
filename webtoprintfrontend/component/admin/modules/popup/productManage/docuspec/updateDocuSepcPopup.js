import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdminDocuspec } from "../../../../../../store/admin/product/action";
import dynamic from 'next/dynamic';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});
const UpdateDocuSepcPopup = (props) =>
{
    const form =
    {
        id : "",
        size : "",
        name : "",
        series : "",
        cut : "",
        grain : "",
    }
    const dispatch = useDispatch();
    const [updateSize, setUpdateSize] = useState();
    const [updateName, setUpdateName] = useState();
    const [updateSeries, setUpdateSeries] = useState();
    const [updateCut, setUpdateCut] = useState();
    const [updateGrain, setUpdateGrain] = useState();

    const updateDocuSpec = (form) =>
    {
        dispatch(updateAdminDocuspec(form))
    }

    useEffect(()=>
    {
        setUpdateSize(props.updateSize);
    },[props.updateSize])
    useEffect(()=>
    {
        setUpdateName(props.updateName);
    },[props.updateName])
    useEffect(()=>
    {
        setUpdateSeries(props.updateSeries);
    },[props.updateSeries])
    useEffect(()=>
    {
        setUpdateCut(props.updateCut);
    },[props.updateCut])
    useEffect(()=>
    {
        setUpdateGrain(props.updateGrain);
    },[props.updateGrain])

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }
   
    const updateButton = () =>
    {
        form.id = props.updateId;
        form.size = updateSize;
        form.name = updateName;
        form.series = updateSeries;
        form.cut = updateCut;
        form.grain = updateGrain;
        updateDocuSpec(form);
        alert("?????????????????????.");
    }

    return (
        <>
             {
                props.isVisiable && (
                        <EuiModal onClose={(e)=>{props.closeModal(e)}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>????????????</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <table>
                                <tbody>
                                <tr>
                                    <th>?????????</th>
                                    <th>??????</th>
                                    <th>????????????</th>
                                    <th>??????</th>
                                    <th>?????????</th>
                                </tr>
                                <tr>
                                    <td><EuiFieldText placeholder="?????????" value={props.updateSize} onChange={(e)=>{props.setUpdateSize(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="??????" value={props.updateName} onChange={(e)=>{props.setUpdateName(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="????????????" value={props.updateSeries} onChange={(e)=>{props.setUpdateSeries(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="??????" value={props.updateCut} onChange={(e)=>{props.setUpdateCut(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="?????????" value={props.updateGrain} onChange={(e)=>{props.setUpdateGrain(e.target.value)}}/></td>
                                    <td><EuiButton onClick={()=>{updateButton()}}>??????</EuiButton></td>
                                </tr>
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={(e)=>{handleButton(e)}}>??????</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
        </>
    );
}
export default UpdateDocuSepcPopup;