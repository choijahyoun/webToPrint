import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdminDocuspec, deleteAdminPageOption, getAdminPageOption, selectAdminPageOption } from "../../../../../../store/admin/product/action";
import { pageOptionSelector, selectPageOptionListSelector } from "../../../../../../store/admin/product/selector";
import dynamic from 'next/dynamic'
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const PageOptionResult = () =>
{
    const selectPageOptionList = useSelector(selectPageOptionListSelector());
    const pageOptionList = useSelector(pageOptionSelector());
    const dispatch = useDispatch();
    const getPageOption = () =>
    {
        dispatch(getAdminPageOption());
    }
    useEffect(()=>
    {
        getPageOption();
    },[])

    const [checkItem, setCheckItem] = useState(selectPageOptionList);
    // 전체 체크 및 체크박스 확인 코드
    const handleSingleCheck = (e, id, name) =>{
        if (e.target.checked) {
            const form = {
                id : id,
                name : name,
            }
          setCheckItem([...checkItem, form ]);
        } else {
          setCheckItem(checkItem.filter((el) => el.id !== id));
        }
      };

      useEffect(()=>
      {
          dispatch(selectAdminPageOption(checkItem));
        
      },[checkItem])
  
      const handleAllCheck = (e) => {
        if(e.target.checked) {
          console.log("전체선택");
          const idArray = [];
          pageOptionList.forEach((el) =>  {
              const form ={
                    id : el.id,
                    name : el.pageOption,
              }
              idArray.push(form);
          });
          setCheckItem(idArray);
         
        }
        else {
            setCheckItem([])
        }
      }

    return (
        <>
        <tr>
            <th><input type="checkbox" id="checkAll" onChange={(e)=> handleAllCheck(e)} checked={checkItem.length === pageOptionList.length ? true : false}></input></th>
            <th style={{width : "100px"}}>순서</th>
            <th style={{width : "100px"}}>페이지옵션</th>
        </tr>
        { 
            pageOptionList.map((list,index)=>(
                <tr key={index}>
                    <td>
                        <input type="checkbox" onChange={(e)=> handleSingleCheck(e,list.id, list.pageOption)} checked={checkItem.some(code => code.id === list.id)}/>
                    </td>
                    <td>
                        {index+1}
                    </td>
                    <td>
                        {list.pageOption}
                    </td>
                </tr>
            ))
        }
        </>
    );
}
export default PageOptionResult;