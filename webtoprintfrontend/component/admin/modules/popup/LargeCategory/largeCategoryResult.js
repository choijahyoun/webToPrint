
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLargeAdminCategory } from "../../../../../store/admin/category/action";
import { largeCategoryListSelector } from "../../../../../store/admin/category/selector";

const LargeCategoryResult = (props) =>
{
    const LargeCategoryList = useSelector(largeCategoryListSelector());
    
    const form ={
        name,
    }
    const dispatch = useDispatch();
    const deleteCategory = (form) =>
    {
        dispatch(deleteLargeAdminCategory(form))
    }

    const handleChecked = (value) =>
    {
        console.log(value)
    }
    const deleteButton = (name) =>
    {
       
        form.name = name;
        deleteCategory(form);
    }
    useEffect(()=>
    {
        console.log(LargeCategoryList);
    },[LargeCategoryList])
    return (
        LargeCategoryList.map((list, index) =>(
            <tr key={index}>
                <td><input type="checkbox" defaultChecked={list.checked} name={list.name} onChange={(e)=>{handleChecked(e.target.checked)}}/></td>
                <td>{list.name}</td>
                <td>{list.code}</td>
                <td><button type="button" onClick={()=>{deleteButton(list.name,index)}}>삭제</button></td>
            </tr>
        ))
    );
}
export default LargeCategoryResult;