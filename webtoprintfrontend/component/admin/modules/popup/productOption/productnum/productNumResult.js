import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminQuantity, getAdminQuantity } from "../../../../../../store/admin/product/action";
import { quantityListSelector } from "../../../../../../store/admin/product/selector";


const ProductNumResult = (props) =>
{
    const form =  {
        name : "",
    }

    const productNum = useSelector(quantityListSelector());
    const dispatch = useDispatch();

    const deleteQuantity = (form) =>
    {
        dispatch(deleteAdminQuantity(form));
    }

    const deleteButton = (name) =>
    {
        form.name = name;
        deleteQuantity(form);
    }

    useEffect(()=>{
        console.log(productNum);
    },[productNum])

    return (
        productNum.map((list,index)=>(
            <tr key={index}>
                <td >
                    {list.name}
                </td>
                <td>
                    <button onClick={()=>{deleteButton(list.name)}}>삭제</button>
                </td>
            </tr>
        ))
    );
}
export default ProductNumResult;