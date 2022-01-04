import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminDocuspec, getAdminDocuspec, selectAdminDocuspec } from "../../../../../store/admin/product/action";
import { docuspecListSelector } from "../../../../../store/admin/product/selector";

const DocusepcResult = () =>
{
    const docuSpecList = useSelector(docuspecListSelector());
    const dispatch = useDispatch();
    const getDocuspec = () =>
    {
        dispatch(getAdminDocuspec());
    }
    useEffect(()=>
    {
        getDocuspec();
    },[])
    
    const [checkItem, setCheckItem] = useState([]);
    const handleSingleCheck = (e, id, series, name, size, cut) =>{
        if (e.target.checked) {
            const form = {
                id : id,
                series : series,
                name : name,
                size : size,
                cut : cut
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
          docuSpecList.forEach((el) =>  {
              const form ={
                  id : el.id,
                  series : el.series,
                  name : el.name,
                  size : el.size,
                  cut : el.cut,
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
        console.log(checkItem)
          dispatch(selectAdminDocuspec(checkItem));
        
      },[checkItem])

      const deleteDocuSpec = (id) =>
      {
          dispatch(deleteAdminDocuspec(id))
      }

      const deleteButton = (id) =>
      {
          console.log(id);
            deleteDocuSpec(id);
      }
    return (
        <>
            <tr>
                <th style={{width : "100px"}}><input type="checkbox" id="checkAll" onChange={(e)=> handleAllCheck(e)} checked={checkItem.length === docuSpecList.length ? true : false}></input></th>
                <th style={{width : "100px"}}>순서</th>
                <th style={{width : "100px"}}>사이즈</th>
                <th style={{width : "100px"}}>이름</th>
                <th style={{width : "100px"}}>종이유형</th>
                <th style={{width : "100px"}}>절수</th>
            </tr>
            {
                docuSpecList.map((list,index)=>(
                    <tr key={index}>
                        <td>
                            <input type="checkbox" onChange={(e)=> handleSingleCheck(e, list.id, list.series, list.name, list.size, list.cut)} checked={checkItem.some(code => code.id === list.id)}/>
                        </td>
                        <td>{index+1}</td>
                        <td>{list.size}</td>
                        <td>{list.name}</td>
                        <td>{list.series}</td>
                        <td>{list.cut}</td>
                    </tr>
                ))
            }
        </>
    );
}
export default DocusepcResult;