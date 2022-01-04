import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductPage from '../../../shop/productPage';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});

// 미리보기 페이지 팝업
const PreView = (props) =>
{
    const handleButton = (e) =>
    {
        props.closeModal(false);
    }
    
    return (
        <>
            <EuiButton fill color={"text"} onClick={(e)=>{props.showModal(e)}} style={{width : "20px"}}>미리보기</EuiButton>
        {
            props.isVisiable && (
                    <EuiModal style={{maxWidth : "1000px"}} onClose={(e)=>{props.closeModal(e)}}>
                    <EuiModalHeader>
                        <EuiModalHeaderTitle>
                            <h5>미리보기</h5>
                        </EuiModalHeaderTitle>
                    </EuiModalHeader>
                    <EuiModalBody>
                       {/* <ProductPage product={props.product}/> */}
                    </EuiModalBody>
                    <EuiModalFooter>
                        <EuiButton fill onClick={(e) =>{handleButton(e)}}>확인</EuiButton>
                    </EuiModalFooter>
                </EuiModal>
            )
        }
        </>
    );
}
export default PreView;