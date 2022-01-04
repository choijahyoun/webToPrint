import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bindingListSelector, selectBindingListSelector } from "../../../../store/admin/product/selector";
import BindingPopup from "../popup/productOption/binding/bindingpopup";

const AdminBinding = () =>
{
    const selectBindingList = useSelector(selectBindingListSelector());
    const [isVisiable, setIsVisiable] = useState(false);

    const [bindingMethodList , setBindingMethodList] = useState([]);
    const [bindingDirectionList, setBindingDirectionList] = useState([]);

    useEffect(()=>
    {
        const bindingMethod = [];
        const bindingDirection = [];
        for(let i = 0; i < selectBindingList.length; i++)
        {
            bindingMethod.push(selectBindingList[i].method);
            bindingDirection.push(selectBindingList[i].direction);
        }
        const methodSet = Array.from(new Set(bindingMethod));
        const directionSet = Array.from(new Set(bindingDirection));
        setBindingMethodList(methodSet);
        setBindingDirectionList(directionSet);
    },[selectBindingList])

    const closeModal = () =>
    {
        setIsVisiable(false);
    }
    
    const showModal = () =>
    {
        setIsVisiable(true); 
    }

    return (
        <>
            <table className="productBinding" >
                <tbody>
                <tr>
                    <th>제본</th>
                    {
                        selectBindingList.length > 0 ? (
                            <>
                            <td>
                                <select >
                                    {
                                        bindingMethodList.map((list, index)=>
                                            (
                                                <option key={index} value={list}>
                                                    {list}
                                                </option>
                                            )
                                        )
                                    }
                                    </select>
                            </td>
                            <td>
                                <select >
                                {
                                    bindingDirectionList.map((list,index)=>(
                                            <option key={index} value={list}>
                                                {list}
                                            </option>
                                    ))
                                }
                                </select>
                            </td>
                            </>
                        ) : (
                            <>
                                <td>
                                    <select>
                                        <option>
                                            선택제본없음
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                        <option>
                                            선택제본없음
                                        </option>
                                    </select>
                                </td>
                            </>
                        )
                    }
                    
                </tr>
                </tbody>
            </table>
            <BindingPopup isVisiable={isVisiable} closeModal={closeModal} showModal={showModal} setIsVisialbe={setIsVisiable}/>
        </>
    )
}
export default AdminBinding;