

import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveLargeAdminCategory } from "../../../../../store/admin/category/action";


const EmptyRow = (props) =>
{
    const form ={
        name : "",
        code : "",
    }
    
    const [categoryName, setCategoryName] = useState();
    const [categoryCode, setCategoryCode] = useState();
    const dispatch = useDispatch();

    const saveCategory = (form) =>
    {
        dispatch(saveLargeAdminCategory(form));
    }

    const addButton = () =>
    {
        console.log(categoryName);
        form.name = categoryName;
        form.code = categoryCode;
        props.category.push(form);
        saveCategory(form);
        alert("추가되었습니다");
    }
    return (
      <tr>
          <td/>
          <td>
              <input placeholder="카테고리이름" value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}}/>
          </td>
          <td>
                <input placeholder="분류코드" value={categoryCode} onChange={(e)=>{setCategoryCode(e.target.value)}}/>
          </td>
          <td>
              <button type="button"  onClick={addButton}>추가</button>
          </td>
      </tr>
    )
}
export default EmptyRow;