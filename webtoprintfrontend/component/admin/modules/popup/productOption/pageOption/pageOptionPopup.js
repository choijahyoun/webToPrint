import PageOptionResult from "./pageOptionResult";
import { useState } from "react";
import dynamic from 'next/dynamic'
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const PageOptionPopup = (props) =>
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
            <EuiButton fill onClick={(e)=>{props.showModal(e)}} style={{width : "20px"}}>추가</EuiButton>
            {
                props.isVisiable && (
                        <EuiModal onClose={(e)=>{props.closeModal(e)}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>페이지옵션</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <table>
                                <tbody>
                                    <PageOptionResult/>
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
export default PageOptionPopup;