import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindingListSelector } from '../../../../../../store/admin/product/selector';
import BindingResult from './bindingResult';

const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldSearch = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldSearch),{ssr:false});
const BindingPopup = (props) =>
{
    const bindingList = useSelector(bindingListSelector());
    const [searchBindingList, setSearchBinindgList] = useState([]);
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }
    
    let modal; 
    if(props.isVisiable) {
        modal = (
            <EuiModal onClose={props.closeModal}>
            <EuiModalHeader>
                <EuiModalHeaderTitle>
                    <h4>제본</h4>
                </EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
            <EuiFieldSearch
                placeholder="제본 검색"
                value={value}
                onChange={(e) => onChange(e)}
                isClearable={true}
                aria-label="Use aria labels when no actual label is in use"
            />
                <table>
                    <tbody>
                        <BindingResult/>
                    </tbody>
                </table>
            </EuiModalBody>
            <EuiModalFooter>
                <button type="button" onClick={(e)=>handleButton(e)}>확인</button>
            </EuiModalFooter>
        </EuiModal>
        )
    }
    
    return (
        <>
            <EuiButton fill style={{width : "10px"}} onClick={props.showModal}>제본선택</EuiButton>
            {modal}
        </>
    );
}
export default BindingPopup;