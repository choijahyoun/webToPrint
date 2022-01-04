import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiSelect  = dynamic(() => import('@elastic/eui/').then(module => module.EuiSelect),{ssr:false});

const AddBindingPopup = (props) =>
{
    const form =
    {
        method : "",
        direction : "",
    }
    const dispatch = useDispatch();
   

    const directionOptions =[
        { value: '세로좌철', text: '세로좌철' },
        { value: '세로상철', text: '세로상철' },
        { value: '가로좌철', text: '가로좌철' },
        { value: '가로상철', text: '가로상철' },
    ]

    const methodOptions =[
        { value: '무선', text: '무선' },
        { value: '중철', text: '중철' },
        { value: '스프링', text: '스프링' },
        { value: '양장', text: '양장'},
        { value: 'PUR', text: 'PUR'},
        { value: '떡' , text: '떡'},
    ]

    const [direction, setDirection] = useState(directionOptions[0].value);
    const [method, setMethod] = useState(methodOptions[0].value);
    const createBinding = (form) =>
    {
        dispatch(createAdminBinding(form));
    }
    const addButton = () =>
    {
        form.direction = direction;
        form.method = method;
        createBinding(form);
        alert('추가되었습니다.');
    }

    const directionChange = (e) =>
    {
        console.log(e.target.value);
        setDirection(e.target.value);
    }

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
                <table>
                    <tbody>
                        <tr>
                            <th>제본방향</th>
                            <th>제본방식</th>
                        </tr>
                        <tr>
                            <td><EuiSelect options={directionOptions} value={direction} onChange={(e)=>{directionChange(e)}}/></td>
                            <td><EuiSelect options={methodOptions} value={method} onChange={(e)=>{setMethod(e.target.value)}}/></td>
                            <td><EuiButton  onClick={()=>{addButton()}}>추가</EuiButton></td>
                        </tr>
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
            <EuiButton fill style={{width : "10px"}} onClick={(e)=>{props.showModal(e)}}>추가</EuiButton>
            {modal}
        </>
    );
}
export default AddBindingPopup;