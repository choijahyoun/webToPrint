import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAdminPrintMethod } from '../../../../../../store/admin/product/action';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const AddPrintMethodPopup = (props)=>
{
    const form =
    {
        printMethod : "",
        plustColor : "",
    };
    const [printMethod, setPrintMethod] = useState();
    const [plustColor, setPlusColor] = useState();

    const dispatch = useDispatch();
    const addButton = () =>
    {
        form.printMethod = printMethod;
        form.plustColor = plustColor;
        dispatch(createAdminPrintMethod(form));
    }

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }

    return (
        <>
        <EuiButton fill onClick={()=>{props.showModal()}} style={{width : "20px"}}>추가</EuiButton>
        {
            props.isVisiable && (
                    <EuiModal onClose={()=>{props.closeModal()}}>
                    <EuiModalHeader>
                        <EuiModalHeaderTitle>
                            <h5>인쇄도수</h5>
                        </EuiModalHeaderTitle>
                    </EuiModalHeader>
                    <EuiModalBody>
                        <table>
                            <tbody>
                            <tr>
                                <th>인쇄도수</th>
                                <th>별색</th>
                                <th>관리</th>
                            </tr>
                            <tr>
                                <td><EuiFieldText placeholder="인쇄도수" value={printMethod} onChange={(e)=>{setPrintMethod(e.target.value)}}/></td>
                                <td><EuiFieldText placeholder="별색" value={plustColor} onChange={(e)=>{setPlusColor(e.target.value)}}/></td>
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
export default AddPrintMethodPopup;