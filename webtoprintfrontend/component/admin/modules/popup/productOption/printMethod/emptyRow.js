import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAdminPrintMethod } from "../../../../../../store/admin/product/action";


const EmptyRow = (props) =>
{
    const form = {
        printMethod : "",
        plusColor : "",
    }
    const dispatch = useDispatch();
    const [printMethod, setPrintMethod] = useState();
    const [plusColor, setPlusColor] = useState();
    
    const addPrintMethod = () =>{
        form.printMethod = printMethod;
        form.plusColor = plusColor;
        dispatch(createAdminPrintMethod(form));
    }

    return (
        <tr>
            <td>
                <input placeholder="인쇄컬러" value={printMethod} onChange={(e)=>{setPrintMethod(e.target.value)}}/>
            </td>
            <td>
                <input placeholder="별색" value={plusColor} onChange={(e)=>{setPlusColor(e.target.value)}}/>
            </td>
            <td>
                <button type="button" onClick={()=>{addPrintMethod()}}>추가</button>
            </td>
        </tr>
    );
}
export default EmptyRow;