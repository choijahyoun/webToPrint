import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLargeAdminCategory, getMidiumAdminCategory } from "../../../../store/admin/category/action";
import { largeCategoryListSelector, midiumCategoryListSelector } from "../../../../store/admin/category/selector";
import { getAdminProduct } from "../../../../store/admin/product/action";
import { productListSelector } from "../../../../store/admin/product/selector";
import RedNavigationLitag from "./redNavigationLitag";

const RedNavigation = () =>
 {
    const ApiLargeCategoryList = useSelector(largeCategoryListSelector());
    const ApiMidiumCategoryList = useSelector(midiumCategoryListSelector());
    const ApiProductList = useSelector(productListSelector());
    
    const [largeCategoryList, setLargeCategoryList] = useState([]);
    const [midiumCategoryList, setMidiumCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [mouseHover, setMouseHover] = useState();

    const handleMouseHover = () =>
    {
        console.log("마우스호버");
        setMouseHover(true)
    }

    const handleMouseLeave = () =>
    {
        console.log("마우스떠남");
        setMouseHover(false);
    }

    const dispatch = useDispatch();

    const getLargeCategory = () =>
    {
        dispatch(getLargeAdminCategory());
    }

    const getMidiumCategory = () =>
    {
        dispatch(getMidiumAdminCategory());
    }

    const getProduct = () =>
    {
        dispatch(getAdminProduct());
    }

    useEffect(()=>
    {
        getLargeCategory();
        getMidiumCategory();
        getProduct();

    },[])

    useEffect(()=>{
        setLargeCategoryList(ApiLargeCategoryList);
      
    },[ApiLargeCategoryList])

    useEffect(()=>
    {
        setMidiumCategoryList(ApiMidiumCategoryList)
    },[ApiMidiumCategoryList])
    
    useEffect(()=>{
        setProductList(ApiProductList);
    },[ApiProductList])

    return (
        <div className="header-menu">
            <ul>
               <RedNavigationLitag largeCategory={largeCategoryList} midiumCategory={midiumCategoryList} product={productList}
               handleMouseHover={handleMouseHover} handleMouseLeave={handleMouseLeave} mouseHover={mouseHover}/>
            </ul>
        </div>
    );
}
export default RedNavigation;