import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAdminPageOption } from '../../../../../../store/admin/product/action';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const AddPageOptionPopup = (props) =>
{
    const form = 
    {
       pageOption : ""
    }

    const dispatch = useDispatch();
    const [pageOption, setPageOption]  = useState();
   
    const addPageOption = () =>
    {
        form.pageOption = pageOption;
        dispatch(createAdminPageOption(form));
    }

    const addButton = () =>
    {
        addPageOption();
    }

    const handleButton = (e) =>
    {
        props.closeModal(e)
    }

    return (
        <>
            <EuiButton fill onClick={()=>{props.showModal()}} style={{width : "20px"}}>추가</EuiButton>
            {
                props.isVisiable && (
                        <EuiModal onClose={()=>{props.closeModal()}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>페이지옵션</h5>
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
                                    <td><EuiFieldText placeholder="페이지옵션" value={pageOption} onChange={(e)=>{setPageOption(e.target.value)}}/></td>
                                    <td><EuiButton onClick={()=>{addButton()}}>추가</EuiButton></td>
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
export default AddPageOptionPopup;