import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaperResult from './paperResult';

const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldSearch = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldSearch),{ssr:false});
const PaperPopup = (props) =>
{
    const [searchPaper, setSearchPaper] = useState("");

    const search = () =>
    {
        
    }

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }

    return(
        <>
            <EuiButton fill onClick={props.showModal} style={{width : "20px"}}>용지선택</EuiButton>
            {
                props.isVisiable && (
                        <EuiModal style={{width : 1000}} onClose={props.closeModal}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>용지</h5>
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
                                    <PaperResult />
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={(e)=>handleButton(e)}>확인</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
        </>
    );
}
export default PaperPopup;