import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDocuSpecListSelector } from "../../../../store/admin/product/selector";
import DocSpecPopup from "../popup/docuspec/docspecpopup";

const AdminDocsSpecModule = () =>
{
    const selectDocuSpecList = useSelector(selectDocuSpecListSelector());
    const [isVisiable, setIsVisiable] = useState(false);
    const [printSize, setPrintSize] = useState('선택없음');
    const [cuttingSizeVertical,setCuttingSizeVertical] =useState();
    const [cuttingSizeHorizontal,setCuttingSizeHorizontal] =useState();
    const [workingSizeVertical,setWorkingSizeVertical] = useState();
    const [workingSizeHorizontal, setWorkingSizeHorizontal] = useState();
    const [checkecdCuttingSize, setCheckedCuttingSize] =useState();
    
    const changeSize = (e) =>
    {
        let selectDocu = []
        selectDocu = selectDocuSpecList
        setPrintSize(e.target.value);
        const selectSize = selectDocu.filter(function(list){
            return list.id === +e.target.value
        })
       setCuttingSizeVertical(Number(selectSize[0].size.split('*')[0]));
       setCuttingSizeHorizontal(Number(selectSize[0].size.split('*')[1]));
       setWorkingSizeVertical(Number(selectSize[0].size.split('*')[0])+6);
       setWorkingSizeHorizontal(Number(selectSize[0].size.split('*')[1])+6);
    }

    const closeModal = (e) =>
    {
        e.preventDefault();
        setIsVisiable(false);
    }

    const showModal = (e) =>
    {
        e.preventDefault();
        setIsVisiable(true); 
    }

    return (
        <>
            <table>
                <tbody>
                        {
                            selectDocuSpecList.length > 0 ? (
                            <>
                                <tr>
                                    <th rowSpan="3">규격</th>
                                    <td>
                                        <select value={printSize} onChange={(e)=>changeSize(e)}> 
                                            {
                                                selectDocuSpecList.map((list,index)=>(
                                                    <option key={index} value={list.id}>
                                                        {list.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <label>
                                            <input type="checkbox" value={checkecdCuttingSize} onChange={(e)=>{setCheckedCuttingSize(e.target.checked)}}></input>
                                            <span>직접입력(재단사이즈)</span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>재단사이즈</span>
                                        <input type="text" style={{width:45+'px'}} disabled={!checkecdCuttingSize} value={cuttingSizeVertical} onChange={(e)=>{setCuttingSizeVertical(e.target.value)}}></input>
                                        x
                                        <input type="text" style={{width:45+'px'}} disabled={!checkecdCuttingSize} value={cuttingSizeHorizontal} onChange={(e)=>{setCuttingSizeHorizontal(e.target.value)}}></input>
                                        <span>mm</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>작업사이즈</span>
                                        <input type="text" style={{width:45+'px'}} disabled={true} value={workingSizeVertical} onChange={(e)=>{setWorkingSizeVertical(e.target.value)}}></input>
                                        x
                                        <input type="text" style={{width:45+'px'}} disabled={true} value={workingSizeHorizontal} onChange={(e)=>{setWorkingSizeHorizontal(e.target.value)}}></input>
                                        <span>mm</span>
                                    </td>
                                </tr>
                            </>
                            ) : (
                                <>
                                    <tr>
                                        <th rowSpan="3">규격</th>
                                        <td>
                                            <select value={printSize} onChange={(e)=>changeSize(e)}> 
                                                {
                                                    selectDocuSpecList.map((list,index)=>(
                                                        <option key={index} value={list.id}>
                                                            {list.name}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                            <label>
                                                <input type="checkbox" value={checkecdCuttingSize} onChange={(e)=>{setCheckedCuttingSize(e.target.checked)}}></input>
                                                <span>직접입력(재단사이즈)</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>재단사이즈</span>
                                            <input type="text" style={{width:45+'px'}} disabled={!checkecdCuttingSize} value={cuttingSizeVertical} onChange={(e)=>{setCuttingSizeVertical(e.target.value)}}></input>
                                            x
                                            <input type="text" style={{width:45+'px'}} disabled={!checkecdCuttingSize} value={cuttingSizeHorizontal} onChange={(e)=>{setCuttingSizeHorizontal(e.target.value)}}></input>
                                            <span>mm</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>작업사이즈</span>
                                            <input type="text" style={{width:45+'px'}} disabled={true} value={workingSizeVertical} onChange={(e)=>{setWorkingSizeVertical(e.target.value)}}></input>
                                            x
                                            <input type="text" style={{width:45+'px'}} disabled={true} value={workingSizeHorizontal} onChange={(e)=>{setWorkingSizeHorizontal(e.target.value)}}></input>
                                            <span>mm</span>
                                        </td>
                                    </tr>
                                </>
                            ) 
                        }
                </tbody>
            </table>
            <DocSpecPopup isVisiable={isVisiable} setIsVisiable={setIsVisiable} closeModal={closeModal} showModal={showModal} />
        </>
    );
}
export default AdminDocsSpecModule;