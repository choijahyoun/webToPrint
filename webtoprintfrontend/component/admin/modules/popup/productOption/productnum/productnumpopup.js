import React ,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from 'next/dynamic'
import ProductNumResult from "./productNumResult";
import { selectAdminQuantity } from "../../../../../../store/admin/product/action";
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiRadioGroup  = dynamic(() => import('@elastic/eui/').then(module => module.EuiRadioGroup ),{ssr:false});
const ProductNumPopup = (props) =>
{
    const [searchNum, setSearchNum] = useState("");
    const [radioSelect, setRadioSelect] = useState('장수');
    const search = (e) =>{
        setSearchNum(e.target.value);
    }

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }

    const dispatch = useDispatch();

    const radios = [
        {
            id : '장수',
            label: '장수'
        },
        {
            id: '건수/부수',
            label: '건수/부수',
        }
    ]

    const onChange = (optionId) =>
    {
        setRadioSelect(optionId)
    }

    useEffect(()=>{
        dispatch(selectAdminQuantity(radioSelect));
    },[radioSelect])

    return(
        <>
            <EuiButton fill onClick={props.showModal} style={{width : "10px"}}>수량추가</EuiButton>
            {
                props.isVisiable && (
                        <EuiModal onClose={props.closeModal}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>수량선택</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <EuiRadioGroup
                            options={radios}
                            idSelected={radioSelect}
                            onChange={id => onChange(id)}
                            name="radio group"
                            />
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
export default ProductNumPopup;