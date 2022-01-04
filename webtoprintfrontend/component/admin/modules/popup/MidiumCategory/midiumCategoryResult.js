import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMidiumAdminCategory } from "../../../../../store/admin/category/action";
import { midiumCategoryListSelector } from "../../../../../store/admin/category/selector";

const MidiumCategoryResult = () =>
{
    const midiumCategoryList = useSelector(midiumCategoryListSelector());
    const form ={
        name,
    }
    const dispatch = useDispatch();
    const [category, setCategory] = useState([]);
    const deleteCategory = (form) =>
    {
        dispatch(deleteMidiumAdminCategory(form))
    }
    
    const handleDeleteButton = (name, index) =>
    {
        form.name = name;
        deleteCategory(form);
    }
    return (
        midiumCategoryList.map((list,index)=>
        (
            <tr key={index}>
                <td><input type="checkbox" defaultChecked={list.checked} onChange={()=>{handleChecked}}/></td>
                <td>{list.name}</td>
                <td>{list.code}</td>
                <td><button type="button" onClick={()=>handleDeleteButton(list.name, index)}>삭제</button></td>
            </tr>
        ))
    );
}
export default MidiumCategoryResult;