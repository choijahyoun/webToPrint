import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostProcessListSelector } from '../../../../../../store/admin/product/selector';
import ProcessResult from './processResult';

const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldSearch = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldSearch),{ssr:false});

const ProcessPopup = (props) =>
{
   
    const [searchPaper, setSearchPaper] = useState("");
    const handleButton = (e) =>
    {
        props.closeModal(e)
    }

    return (
        <>
        <EuiButton fill onClick={(e)=>{props.showModal(e)}} style={{width : "20px"}}>추가</EuiButton>
        {
            props.isVisiable && (
                    <EuiModal style={{width: 800}} onClose={props.closeModal}>
                    <EuiModalHeader>
                        <EuiModalHeaderTitle>
                            <h5>후가공</h5>
                        </EuiModalHeaderTitle>
                    </EuiModalHeader>
                    <EuiModalBody>
                       <EuiFieldSearch
                       placeholder="검색"
                       value={searchPaper}
                       onChange={(e)=>setSearchPaper(e.target.value)}
                       isClearable={true}
                       />
                       <br/>
                        <table>
                            <tbody>
                                <tr>
                                    <th>후가공이름</th>
                                    <th>관리</th>
                                </tr>
                                <ProcessResult/>
                            </tbody>
                        </table>
                    </EuiModalBody>
                    <EuiModalFooter>
                        <EuiButton fill onClick={(e) =>handleButton(e)}>확인</EuiButton>
                    </EuiModalFooter>
                </EuiModal>
            )
        }
    </>
    );
}
export default ProcessPopup;