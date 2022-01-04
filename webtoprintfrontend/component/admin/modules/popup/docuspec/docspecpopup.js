import React ,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuSpec } from "../../../../../store/product/action";
import { docuSpecListSelector } from "../../../../../store/product/selector";
import dynamic from 'next/dynamic';
import DocusepcResult from "./docuspecResult";
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});

const DocSpecPopup = (props) =>
{
    const [searchSize , setSearchSize] = useState();
   
    const handleButton = () =>
    {
        props.setIsVisiable(false);
    }

   
    const search = (e) =>
    {
        setSearchSize(e.target.value);
    }

    return (
       <>
            <EuiButton fill onClick={props.showModal} style={{width : "20px"}}>추가</EuiButton>
            {
                props.isVisiable && (
                        <EuiModal onClose={props.closeModal}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>규격</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <input value={searchSize} onChange={(e)=>{search(e)}}/>
                            <button type="button">검색</button>
                            <table>
                                <tbody>
                                    <DocusepcResult/>
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={handleButton}>확인</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
       </>
    );
}
export default DocSpecPopup;