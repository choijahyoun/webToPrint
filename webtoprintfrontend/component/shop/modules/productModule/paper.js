import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectOrderPaper } from "../../../../store/shop/action";


const PaperModule = (props) =>
{

    const dispatch = useDispatch();
    const [selectPaper, setSelectPaper] = useState(props.paper[0]);

    useEffect(()=>
    {
        console.log(props.paper);
    },[props.paper])

    useEffect(()=>
    {
        dispatch(selectOrderPaper(selectPaper));
    },[selectPaper])

    return (
        <table>
            <tbody>
                <tr>
                    <th>용지</th>
                    <td>
                        <select value={selectPaper} onChange={(e)=>setSelectPaper(e.target.value)}>
                            {
                                props.paper.map((list,index)=>(
                                    <option key={index} value={list}>
                                        {list.paperName} {list.paperColor} {list.paperWeight}g
                                    </option>
                                ))
                            }
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default PaperModule;