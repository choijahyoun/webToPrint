import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAdminBinding } from '../../../../../../store/admin/product/action';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const UpdataBindingPopup = (props) =>
{
    const form =
    {
        id : "",
        method : "",
        direction : "",
    }

    const dispatch = useDispatch();
    const [updateMethod, setUpdateMethod] = useState();
    const [updateDirection, setUpdateDirection] = useState();

    const updateBindingButton = () =>
    {
        form.id = props.updateId;
        form.method = updateMethod;
        form.direction = updateDirection;
        dispatch(updateAdminBinding(form));
        alert("수정되었습니다.");
    }

    useEffect(()=>
    {
        setUpdateMethod(props.updateMethod);
    },[props.updateMethod])

    useEffect(()=>
    {
        setUpdateDirection(props.updateDirection);
    },[props.updateDirection])

    const handleButton = (e) =>
    {
        props.closeModal(e)
    }

    return (
        <>
            {
                props.isVisiable && (
                        <EuiModal onClose={(e)=>{props.closeModal(e)}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>제본수정</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <table>
                                <tbody>
                                <tr>
                                   <th>방식</th>
                                   <th>방향</th>
                                </tr>
                                <tr>
                                    <td><EuiFieldText value={props.updateMethod} onChange={(e)=>{props.setUpdateMethod(e.target.value)}}/></td>
                                    <td><EuiFieldText value={props.updateDirection} onChange={(e)=>{props.setUpdateDirection(e.target.value)}}/></td>
                                    <td><EuiButton onClick={()=>{updateBindingButton()}}>수정</EuiButton></td>
                                </tr>
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={(e)=>{handleButton(e)}}>확인</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
        </>
    )
}
export default UpdataBindingPopup;