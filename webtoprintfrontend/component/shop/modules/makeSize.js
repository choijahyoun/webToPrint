import {React, useEffect, useState} from 'react'
import { set } from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { getBinding, getDocuSpec } from '../../../store/product/action';
import { bindingListSelector, docuSpecListSelector } from '../../../store/product/selector';
// 사이즈 , 제본방향, 링 , 제본 종류 

const Makesize = (props)=>
{
    const bindingList = useSelector(bindingListSelector());
    const docuspec = useSelector(docuSpecListSelector());

    //제본 관련 변수
    const [bindId , setBindId] = useState();

    //사이즈 관련 변수 
    const [sizeId, setSizeId] = useState();

    //작업 사이즈 변수 
    const [workingSizeVertical,setWorkingSizeVertical] = useState();
    const [workingSizeHorizontal,setWorkingSizeHorizontal]= useState();

    // 표지 사이즈 변수
    const [coverSizeVertical, setCoverSizeVertical] = useState();
    const [coverSizeHorizontal, setCoverSizeHorizontal] = useState();

    const dispatch = useDispatch();

    const getApiBinding = () =>
    {
        dispatch(getBinding());
    }

    const getApiDocuSpec = (id) =>
    {
        dispatch(getDocuSpec(id));
    }

    const setWorkingCoverSize = (cuttingSizeVertical,cuttingSizeHorizontal)=>
    {
        setWorkingSizeVertical(cuttingSizeVertical+6);
        setWorkingSizeHorizontal(cuttingSizeHorizontal+6);
        setCoverSizeVertical(cuttingSizeVertical+6);
        setCoverSizeHorizontal(cuttingSizeHorizontal+6);
    }

    const [checkecdCuttingSize, setCheckedCuttingSize] =useState();

    const [bob, setBob] = useState("무선");
    const [bindDirectionSelect, setbindDirectionSelect] =useState("세로형 좌철");
    const [selectbindingList, setSelectBindingList] = useState([]);

    const [companyId ,setCompayId] = useState(1);

    const handleBobChange = (e)=>
    {
       setBob(e.target.value);
    }

    useEffect(()=>
    {
        getApiBinding();
        getApiDocuSpec(companyId)
    },[])

    const handleSizeChange = (e)=>
    {
        props.setSize(e.target.value);
    }

    useEffect(()=>
    {
        setSelectBindingList(bindingList.slice(0,8));
    },[bindingList])

    useEffect(()=>
    {
        const selectdocu = docuspec.filter(function(item){
            return item.name === props.size
        });
        console.log(selectdocu[0]);
        if(selectdocu[0])
        {
            setSizeId(selectdocu[0].id);
        }
      
    },[props.size,docuspec])

    useEffect(()=>{

        setWorkingCoverSize(props.cuttingSizeVertical,props.cuttingSizeHorizontal);

    },[props.cuttingSizeVertical,props.cuttingSizeHorizontal])

    useEffect(()=>
    {
        props.setKindBinding(bob);

    },[bob])

    useEffect(()=>{

        props.setBindDirection(bindDirectionSelect);

    },[bindDirectionSelect])

    useEffect(()=>
    {
        const selecbind = bindingList.filter(function(item){
            return item.method === bob && item.direction === bindDirectionSelect
        })
        console.log(selecbind[0]);
        if(selecbind[0])
        {
            setBindId(selecbind[0].id);
        }

    },[bob,bindDirectionSelect,bindingList])

    const sizeOption =  docuspec.map((list)=>(<option value={list.name}>{list.name}</option>))

    useEffect(()=>{
        props.setDocuSpecId(sizeId);
    },[sizeId])
    
    useEffect(()=>{
        props.setBindingId(bindId);
    },[bindId])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th rowSpan="2">
                            사이즈
                        </th>
                        <td>
                            <select value={props.size} className="form-select" onChange={handleSizeChange}>
                                {sizeOption}
                            </select>
                            <label>
                                <input type="checkbox" value={checkecdCuttingSize} onChange={(e)=>{setCheckedCuttingSize(e.target.checked)}}></input>
                                <span>직접입력(재단사이즈)</span>
                            </label>
                            <br/>
                                <span>재단사이즈</span>
                                <input type="text" style={{width:45+'px'}} value={props.cuttingSizeVertical}  disabled={!checkecdCuttingSize} onChange={(e)=>{props.setCuttingSizeVertical(Number(e.target.value))}}></input>
                                x
                                <input type="text" style={{width:45+'px'}} value={props.cuttingSizeHorizontal}  disabled={!checkecdCuttingSize} onChange={(e)=>{props.setCuttingSizeHorizontal(Number(e.target.value))}}></input>
                                <span>mm</span>
                            <br/>
                                <span>작업사이즈</span>
                                <input type="text" style={{width:45+'px'}} value={workingSizeVertical} disabled></input>
                                x
                                <input type="text" style={{width:45+'px'}} value={workingSizeHorizontal}  disabled></input>
                                <span>mm</span>
                        </td>
                    </tr>
                    {/* 표지 사이즈 관련된 테이블 */}
                    <tr>
                        <td>
                            <span>표지사이즈</span>
                            <input type="text" style={{width:45+'px'}} value={coverSizeVertical} disabled></input>
                            x
                            <input type='text' style={{width:45+'px'}} value={coverSizeHorizontal} disabled></input>
                            mm
                        </td>
                    </tr>
                    {/* 제본에 관련된 테이블 */}
                    <tr>
                        <th rowSpan="2">제본</th>
                        <td>
                            <select value={bob} className="form-select" onChange={handleBobChange}>
                                {
                                    selectbindingList.map((list)=>
                                        (
                                            <option value={list.method}>{list.method}</option>
                                        )
                                    )
                                }
                                </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>제본방향</span>
                            <select value={bindDirectionSelect} onChange={(e)=>{setbindDirectionSelect(e.target.value)}}>
                                <option value="세로형 좌철">세로형좌철</option>
                                <option value="세로형 상철">세로형상철</option>
                                <option value="가로형 좌철">가로형좌철</option>
                                <option value="가로형 상철">가로형상철</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Makesize;