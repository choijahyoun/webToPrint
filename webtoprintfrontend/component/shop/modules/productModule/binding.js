import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectOrderBinding } from "../../../../store/shop/action";


const BindingModule = (props) =>
{
    const [bindingMethodSelect, setBindingMethodSelect] = useState(props.binding[0].method);
    const [bindDirectionSelect, setbindDirectionSelect] = useState(props.binding[0].direction);
    const [bindingMethodList , setBindingMethodList] = useState([]);
    const [bindingDirectionList, setBindingDirectionList] = useState([]);

    const dispatch = useDispatch();
    useEffect(()=>
    {
        const bindingMethod = [];
        const bindingDirection = [];
        for(let i = 0; i < props.binding.length; i++)
        {
            
            bindingMethod.push(props.binding[i].method);
            bindingDirection.push(props.binding[i].direction);
        }
        const methodSet = Array.from(new Set(bindingMethod));
        const directionSet = Array.from(new Set(bindingDirection));
        setBindingMethodList(methodSet);
        setBindingDirectionList(directionSet);
    },[props.binding])

    useEffect(()=>
    {
        let bindingList = []
        bindingList = props.binding;
        const selectbind = bindingList.filter(function(item){
            return item.method === bindingMethodSelect && item.direction === bindDirectionSelect
        })
        dispatch(selectOrderBinding(selectbind[0]));
    },[bindingMethodSelect,bindDirectionSelect])

    useEffect(()=>
    {
        const selectbind = props.binding.filter(function(item){
            return item.method === bindingMethodSelect && item.direction === bindDirectionSelect
        })
        dispatch(selectOrderBinding(selectbind[0]));
    },[])
    
    return(
    <tr>
      <table>
          <tbody>
                <tr>
                    <th>제본</th>
                    <td>
                        <select value={bindingMethodSelect} className="form-select" onChange={(e)=>{setBindingMethodSelect(e.target.value)}}>
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
                        <select value={bindDirectionSelect} onChange={(e)=>{setbindDirectionSelect(e.target.value)}}>
                           {
                               bindingDirectionList.map((list,index)=>(
                                    <option key={index} value={list}>
                                        {list}
                                    </option>
                               ))
                           }
                        </select>
                    </td>
                </tr>
          </tbody>
      </table>
    </tr>
    );
}
export default BindingModule;