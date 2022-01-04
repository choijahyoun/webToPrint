import { useEffect, useState } from "react";


const Main = (props) =>
{
 
    const [mainPrexSelect,setMainPrexSelect] = useState("단면인쇄");
    const [mainColorSelect,setMainColorSelect] = useState("흑백인쇄");

    useEffect(()=>{
        props.setMainPrex(mainPrexSelect);
        props.setMainColor(mainColorSelect);
    },[])

    useEffect(()=>{

        console.log(mainPrexSelect);
        props.setMainPrex(mainPrexSelect);

    },[mainPrexSelect])

    useEffect(()=>{

        console.log(mainColorSelect);
        props.setMainColor(mainColorSelect);
 
    },[mainColorSelect])

    useEffect(()=>
    {
       const mainPageOption = props.apiPageOption.filter(function(item){
            return item.pageType ==="본문"
       })
       if(mainPageOption[0])
       {
            props.setPageOptionId(mainPageOption[0].id);
       }
    },[props.apiPageOption])

    return (
        <div>
            <table>
                <tbody>
                    {/* 본문(내지) 관련된 테이블 */}
                    <tr>
                        <th>본문(내지)</th>
                        <td>
                            <select className='form-select' value={mainPrexSelect} onChange={(e)=>{setMainPrexSelect(e.target.value)}}>
                                <option value="단면인쇄">단면인쇄</option>
                                <option value="양면인쇄">양면인쇄</option>
                            </select>
                            <select className='form-select' value={mainColorSelect} onChange={(e)=>{setMainColorSelect(e.target.value)}}>
                                <option value="흑백인쇄">흑백인쇄(1도)</option>
                                <option value="칼라인쇄">칼라인쇄(4도)</option>
                            </select>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Main;