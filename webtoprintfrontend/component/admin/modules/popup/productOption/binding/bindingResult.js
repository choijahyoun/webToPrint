import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminBinding, getAdminBinding, selectAdminBinding } from "../../../../../../store/admin/product/action";
import { bindingListSelector, selectBindingListSelector } from "../../../../../../store/admin/product/selector";
import dynamic from 'next/dynamic';

const BindingResult = (props) =>
{
    
    const bindingList = useSelector(bindingListSelector());
    const selectBindingList = useSelector(selectBindingListSelector());
    const dispatch = useDispatch();

    const getBinding = () =>
    {
        dispatch(getAdminBinding());
    }
   
    useEffect(()=>
    {
        console.log(bindingList);
    },[bindingList])
    useEffect(()=>
    {
        getBinding();
    },[])
    
    const [checkItem, setCheckItem] = useState(selectBindingList);
    const handleSingleCheck = (e, id, direction, method) =>{
        if (e.target.checked) {
            const form = {
                id : id,
                direction : direction,
                method : method
            }
          setCheckItem([...checkItem, form ]);
        } else {
          setCheckItem(checkItem.filter((el) => el.id !== id));
        }
      };
  
      const handleAllCheck = (e) => {
        if(e.target.checked) {
          console.log("전체선택");
          const idArray = [];
          bindingList.forEach((el) =>  {
              const form ={
                    id : el.id,
                    direction : el.direction,
                    method : el.method,
              }
              idArray.push(form);
          });
          setCheckItem(idArray);
         
        }
        else {
            setCheckItem([])
        }
      }

      useEffect(()=>
      {
          dispatch(selectAdminBinding(checkItem))
      },[checkItem])

    return (
        <>
            <tr>
                <th><input type="checkbox" id="checkAll" onChange={(e)=> handleAllCheck(e)} checked={checkItem.length === bindingList.length ? true : false}></input></th>
                <th style={{width : "100px"}}>순서</th>
                <th style={{width : "100px"}}>제본방향</th>
                <th style={{width : "100px"}}>제본방식</th>
            </tr>
            {
                bindingList.map((list,index)=>(
                    <tr key={index}>
                        <td>
                            <input type="checkbox" onChange={(e)=> handleSingleCheck(e,list.id, list.direction, list.method)} checked={checkItem.some(code => code.id === list.id)}/>
                        </td>
                        <td>{index+1}</td>
                        <td>{list.direction}</td>
                        <td>{list.method}</td>
                    </tr>
                ))
            }
        </>
    );
}
export default BindingResult;