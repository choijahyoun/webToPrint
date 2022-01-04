import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteAdminPaper, getAdminPaper, selectAdminDocuspec, selectAdminPaper } from "../../../../../../store/admin/product/action";
import { paperListSelector, selectPaperListSelector } from "../../../../../../store/admin/product/selector";

const PaperResult = () =>
{
    const dispatch = useDispatch();
    const paperList = useSelector(paperListSelector(),shallowEqual);
    const selectPaperList = useSelector(selectPaperListSelector());

    const getPaper = () => {   
        dispatch(getAdminPaper())
    }

    useEffect(()=>
    {
        getPaper();
    },[])

    const [checkItem, setCheckItem] = useState(selectPaperList);
    const handleSingleCheck = (e, id, paperName, paperColor, paperWeight) =>{
        if (e.target.checked) {
            const form = {
                id : id,
                paperName : paperName,
                paperColor : paperColor,
                paperWeight : paperWeight,
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
          paperList.forEach((el) =>  {
              const form ={
                  id : el.id,
                  paperName : el.paperName,
                  paperColor : el.paperColor,
                  paperWeight : el.paperWeight,
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
        dispatch(selectAdminPaper(checkItem));
      },[checkItem])

    return (
        <>
            <tr>
                <th style={{width : "100px"}}><input type="checkbox" id="checkAll" onChange={(e)=> handleAllCheck(e)} checked={checkItem.length === paperList.length ? true : false}></input></th>
                <th style={{width : "100px"}}>순서</th>
                <th style={{width : "100px"}}>용지 이름</th>
                <th style={{width : "100px"}}>용지 색깔</th>
                <th style={{width : "100px"}}>용지 무게</th>
            </tr>
            {
                paperList.map((list,index)=>
                (
                    <tr key={index}>
                       <td>
                            <input type="checkbox" onChange={(e)=> handleSingleCheck(e, list.id, list.paperName, list.paperColor, list.paperWeight)} checked={checkItem.some(code => code.id === list.id)}/>
                        </td>
                        <td>{index+1}</td>
                        <td>{list.paperName}</td>
                        <td>{list.paperColor}</td>
                        <td>{list.paperWeight}g</td>
                    </tr>
                ))
            }
        </>
    );
}
export default PaperResult;