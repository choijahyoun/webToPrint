import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveMidiumAdminCategory } from "../../../../../store/admin/category/action";

const EmptyRow = (props) =>
{
    const form = {
        name : "",
        code : "",
        largeCategory : ""
    }

    const [largeCategory, setLargeCategory] = useState();

    const dispatch = useDispatch();

    const saveCategory = (form) =>
    {
        dispatch(saveMidiumAdminCategory(form));
    }
    
    const [categoryName, setCategoryName] = useState();
    const [categoryCode, setCategoryCode] = useState();
    const addCategory = () =>
    {
        console.log(categoryName);
        form.name = categoryName;
        form.code = categoryCode;
        form.largeCategory = largeCategory;
        saveCategory(form);
        alert("추가되었습니다");
        setCategoryName("");
        setCategoryCode("");
    }

    useEffect(()=>
    {
        console.log(props.largeCategory);
        setLargeCategory(props.largeCategory);

    },[props.largeCategory])

    return(
        <tr>
            <td/>
            <td>
                <input placeholder="카테고리 이름" value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}}/>
            </td>
            <td>
                <input placeholder="카테고리 코드" value={categoryCode} onChange={(e)=>{setCategoryCode(e.target.value)}}/>
            </td>
            <td>
                <button type="button" onClick={addCategory}>추가</button>
            </td>
        </tr>
    );
}
export default EmptyRow;