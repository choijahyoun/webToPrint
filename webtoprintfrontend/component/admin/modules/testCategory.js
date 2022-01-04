
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLargeAdminCategory, getMidiumAdminCategory } from "../../../store/admin/category/action";
import { largeCategoryListSelector, midiumCategoryListSelector } from "../../../store/admin/category/selector";
import PopupLargeCategory from "./popup/LargeCategory/popupLargeCategory";
import PopupMidiumCategory from "./popup/MidiumCategory/popupMidiumCategory";

const TestCategory = () =>
{
    const largeCategoryList= useSelector(largeCategoryListSelector());
    const midiumCategoryList = useSelector(midiumCategoryListSelector());

    const [largeCategory, setLargeCategory] = useState([]);
    const [midiumCategory, setMidiumCategory] = useState([]);

    const [selectLargeCategory, setSelectLargeCategory] = useState();
    const [selectmidiumCategory, setSelectMidiumCategory] = useState();

    const dispatch = useDispatch();

    const getLargeCategory = () =>
    {
        dispatch(getLargeAdminCategory());
    }

    const getMidiumCategory = () =>
    {
        dispatch(getMidiumAdminCategory());
    }

    useEffect(()=>
    {
        getLargeCategory();
        getMidiumCategory();

    },[])

   
    useEffect(()=>{
        let category = [];
        category = midiumCategoryList.filter(function(value){
            console.log(value.largeCategory)
            const largeCategory = value.largeCategory
            return largeCategory.name=== selectLargeCategory
        });
        setMidiumCategory(category);
    },[midiumCategoryList,selectLargeCategory])

  
    return (
        <div>
            <div>
                <h4>대분류</h4>
                <select value={selectLargeCategory} onChange={(e)=>{setSelectLargeCategory(e.target.value)}}>
                        {
                            largeCategoryList.map((list,key)=>(
                                    <option key={key} value={list.name}>
                                        {list.name}
                                    </option>
                                )
                            )
                        }
                </select>
                <PopupLargeCategory largeCategoryList={largeCategory}/>
            </div>
            <div>
                <h4>중분류</h4>
                <select value={selectmidiumCategory} onChange={(e)=>{setSelectMidiumCategory(e.target.value)}}>
                    {
                        midiumCategory.map((list,key)=>
                        (
                            <option key={key} value={list.name}>
                                {list.name}
                            </option>
                        ))
                    }
                </select>
                <PopupMidiumCategory midiumCategoryList={midiumCategory} largeCategory={selectLargeCategory}/>
            </div>
        </div>
    );
}
export default TestCategory;