import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPageOptionListSelector } from "../../../../store/admin/product/selector";
import { pageOptionListSelector } from "../../../../store/product/selector";
import PageOptionPopup from "../popup/productOption/pageOption/pageOptionPopup";

const AdminPageOptionModule = () =>
{
    // 인쇄방법, 인쇄도수, 인쇄방식
    // 추가 내지의 제본위치는 프론트에서 처리
    const [selectPageOption, setSelcetPageOption] = useState();
    const selectPageOptionList = useSelector(selectPageOptionListSelector());
    const pageOption = useSelector(pageOptionListSelector());
    const [isVisiable, setIsVisiable] = useState(false);

    const closeModal = (e) =>
    {
        e.preventDefault();
        setIsVisiable(false);
    }

    const showModal = (e) =>
    {
        e.preventDefault();
        setIsVisiable(true); 
    }

    useEffect(()=>
    {
        console.log(selectPageOptionList);
    },[selectPageOptionList])

    return (
        <>
            <h4>페이지옵션</h4>
            <br/>
            {
                selectPageOptionList.map((list,index)=>(
                    <div key={index}>
                        <h4>{list.name}</h4>
                    </div>
                ))
            }
            <PageOptionPopup isVisiable={isVisiable} showModal={showModal} closeModal={closeModal} setIsVisiable={setIsVisiable}/>
        </>
    );
}
export default AdminPageOptionModule;