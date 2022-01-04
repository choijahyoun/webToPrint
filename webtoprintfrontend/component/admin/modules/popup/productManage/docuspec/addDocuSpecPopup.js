import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAdminDocuspec } from '../../../../../../store/admin/product/action';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const AddDocuSpecPopup = (props) =>
{
    const form = 
    {
        size : "",
        name : "",
        series : "",
        cut : "",
        grain : "",
    }

    const dispatch = useDispatch();
    const [size, setSize]  = useState("");
    const [name , setName]  = useState("");
    const [series, setSeries] = useState("");
    const [cut , setCut] = useState("");
    const [grain, setGrain] = useState("");

    const addDocuspec = () =>
    {
        form.size = size;
        form.name = name;
        form.series = series;
        form.cut = cut;
        form.grain = grain;
        dispatch(createAdminDocuspec(form));
        alert('추가되었습니다.');
        setSize("");
        setName("");
        setSeries("");
        setCut("");
        setGrain("");
    }

    const addButton = () =>
    {
        addDocuspec();
    }

    const handleButton = (e) =>
    {
        
        props.closeModal(e)
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
                            <table>
                                <tbody>
                                <tr>
                                    <th>사이즈</th>
                                    <th>이름</th>
                                    <th>종이유형</th>
                                    <th>절수</th>
                                    <th>종이결</th>
                                </tr>
                                <tr>
                                    <td><EuiFieldText placeholder="사이즈" value={size} onChange={(e)=>{setSize(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="이름" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="종이유형" value={series} onChange={(e)=>{setSeries(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="절수" value={cut} onChange={(e)=>{setCut(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="종이결" value={grain} onChange={(e)=>{setGrain(e.target.value)}}/></td>
                                    <td><EuiButton onClick={()=>{addButton()}}>추가</EuiButton></td>
                                </tr>
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
export default AddDocuSpecPopup;