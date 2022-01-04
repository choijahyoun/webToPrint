import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectOrderDocuSpec } from "../../../../store/shop/action";


const DocuSpecModule = (props) =>
{
   
    const [printSize, setPrintSize] = useState(props.docuSpec[0].id);
    const [selectPrintSize , setSelectPrintSize] = useState();
    const [cuttingSizeVertical,setCuttingSizeVertical] =useState(Number(props.docuSpec[0].size.split("*")[0]));
    const [cuttingSizeHorizontal,setCuttingSizeHorizontal] =useState(Number(props.docuSpec[0].size.split("*")[1]));
    const [docuSpec, setDocuSpec] = useState([]);
    const [checkecdCuttingSize, setCheckedCuttingSize] =useState();
    const dispatch = useDispatch();
    useEffect(()=>
    {
        setDocuSpec(props.docuSpec);
    },[])

    const sizeOption = docuSpec.map((list,index)=>(<option key={index} value={list.id}>{list.name}</option>))

    // 사용자가 규격을 바꾸면 재단사이즈도 같이 바꾸는 함수 
    const changeSize = (e) =>
    {
        setPrintSize(e.target.value);
        const selectSize = docuSpec.filter(function(list){
            return list.id === +e.target.value
        })
       setCuttingSizeVertical(Number(selectSize[0].size.split('*')[0]));
       setCuttingSizeHorizontal(Number(selectSize[0].size.split('*')[1]));
    }

    

    return (
        <table>
            <tbody>
                <tr>
                    <td rowSpan="2">규격</td>
                    <td>
                        <select value={printSize} onChange={(e)=>changeSize(e)}> 
                            {sizeOption}
                        </select>
                    </td>
                    <td>
                        <label>
                            <input type="checkbox" value={checkecdCuttingSize} onChange={(e)=>{setCheckedCuttingSize(e.target.checked)}}></input>
                            <span>직접입력(재단사이즈)</span>
                        </label>
                        <br/>
                        <span>재단사이즈</span>
                        <input type="text" style={{width:45+'px'}} disabled={!checkecdCuttingSize} value={cuttingSizeVertical} onChange={(e)=>{setCuttingSizeVertical(e.target.value)}}></input>
                        x
                        <input type="text" style={{width:45+'px'}} disabled={!checkecdCuttingSize} value={cuttingSizeHorizontal} onChange={(e)=>{setCuttingSizeHorizontal(e.target.value)}}></input>
                        <span>mm</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default DocuSpecModule;