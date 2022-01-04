import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { updateAdminPageOption } from '../../../../../../store/admin/product/action';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const UpdatePageOptionPopup = (props) =>
{
    const form = {
        id : "",
        pageOption : "",
    }
    const dispatch = useDispatch();

    const updatePageOption = (form) =>
    {
        dispatch(updateAdminPageOption(form))
    }

    const updateButton = () =>
    {
        form.id = props.updateId;
        form.pageOption = props.updatePageOptioName;
        updatePageOption(form);
    }

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }
    return (
        <>
            {
                props.isVisiable && (
                        <EuiModal onClose={()=>{props.closeModal()}} style={{width : "400px"}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>페이지옵션수정</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <table>
                                <tbody>
                                <tr>
                                    <th>페이지옵션</th>
                                    <th>관리</th>
                                </tr>
                                <tr>
                                    <td><EuiFieldText placeholder="페이지옵션" value={props.updatePageOptioName} onChange={(e)=>{props.setUpdatePageOptionName(e.target.value)}}/></td>
                                    <td><EuiButton onClick={()=>{updateButton()}}>수정</EuiButton></td>
                                </tr>
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={()=>{handleButton()}}>확인</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
        </>
    );
}
export default UpdatePageOptionPopup;