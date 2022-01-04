import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import EmptyRow from './emptyRow'
import PrintMethodResult from './printMethodResult';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const PrintMethodPopup = (props) =>
{

    return (
        <>
            <EuiButton size="s" onClick={showModal} fill>인쇄도수변경</EuiButton>
            <EuiModal onClose={()=>{props.closeModal()}}>
                <EuiModalHeader>
                    <EuiModalHeaderTitle>
                        <h5>대분류 추가</h5>
                    </EuiModalHeaderTitle>
                </EuiModalHeader>
                <EuiModalBody>
                    <thead>
                        <tr>
                            <th>인쇄컬러</th>
                            <th>별색</th>
                        </tr>
                    </thead>
                    <tbody>
                            <PrintMethodResult />
                            <EmptyRow />
                    </tbody>
                </EuiModalBody>
                <EuiModalFooter>
                    <EuiButton color="text" onClick={()=>{props.closeModal()}} fill>
                        닫기
                    </EuiButton>
                    <EuiButton onClick={()=>{props.closeModal()}} fill>
                        확인
                    </EuiButton>
                </EuiModalFooter>
            </EuiModal>
        </>
    );
}
export default PrintMethodPopup;