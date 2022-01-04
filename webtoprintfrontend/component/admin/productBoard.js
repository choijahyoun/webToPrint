import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLargeAdminCategory, getMidiumAdminCategory } from "../../store/admin/category/action";
import { largeCategoryListSelector, midiumCategoryListSelector } from "../../store/admin/category/selector";
import TestProduct from "./modules/topProduct";
import ProductBoardCom from "./productBoardCom";
import dynamic from 'next/dynamic';
import { createAdminProduct } from "../../store/admin/product/action";
import { docuSpecListSelector, pageOptionListSelector } from "../../store/product/selector";
import { bindingListSelector, paperListSelector, postProcessSelector, productListSelector, quantityListSelector, selectBindingListSelector, selectDocuSpecListSelector, selectOffsetSelector, selectPageOptionListSelector } from "../../store/admin/product/selector";
import PreView from "./modules/popup/preView";
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const AdminProduct = () =>
{
    const form =
    {
        largeCategory : "",
        midiumCategory : "",
        productName  : "",
        productCode : "",
        files : {},
        offset: "",
        docuSpec : [],
        process : [],
        binding : [],
        pageOption : [],
        paperList : [],
        quantityList : [],
        sortList : [],
    }

    const largeCategoryList = useSelector(largeCategoryListSelector());
    const midiumCategoryList = useSelector(midiumCategoryListSelector());

    const productList = useSelector(productListSelector());
    const pageOptionList = useSelector(pageOptionListSelector());
    const bindingList = useSelector(bindingListSelector());
    const docuSpecList = useSelector(docuSpecListSelector());
    const postProcessList = useSelector(postProcessSelector());
    const paperList = useSelector(paperListSelector());
    const quantityList = useSelector(quantityListSelector());

    const selectBindingList = useSelector(selectBindingListSelector());
    const selectDocuSpecList = useSelector(selectDocuSpecListSelector());
    const selectPageOptionList = useSelector(selectPageOptionListSelector());

    const [offset, setOffset] = useState('옵셋');
    const [largeCategory, setLargeCategory] = useState([]);
    const [midiumCategory, setMidiumCategory] = useState([]);
    const [productCode , setProductCode] = useState("");

    const [selectLargeCategory, setSelectLargeCategory] = useState();
    const [selectmidiumCategory, setSelectMidiumCategory] = useState();
    const [files, setFiles] = useState([]);
    const [isBinding, setIsBinding] = useState();
    const [isDocuSpec, setIsDocuSpec] = useState();
    const [isQuantity, setIsQuantity] = useState();
    const [isPaper, setIsPaper] = useState();
    const [isProductNum,setIsProductNum] = useState();
    const [isVisiable, setIsVisiable] = useState(false);
    const [forSort, setForSort] = useState([]);

    // 상품 관련 변수 
    const [productName, setProductName] = useState("");
    const [docuSpec, setDocuSpec] = useState([]);

    const dispatch = useDispatch();

    const getLargeCategory = () =>
    {
        dispatch(getLargeAdminCategory());
    }

    const getMidiumCategory = () =>
    {
        dispatch(getMidiumAdminCategory());
    }

    const createProduct = (form) =>
    {
        dispatch(createAdminProduct(form))
    }

    const handleSaveButton = () =>
    {
        let sortList = [];
        form.largeCategory = selectLargeCategory;
        form.midiumCategory = selectmidiumCategory;
        form.productName = productName;
        form.productCode = productCode;
        form.files = files;
        form.offset = offset;
        form.docuSpec = selectDocuSpecList;
        form.paperList = paperList;
        form.pageOption = selectPageOptionList;
        form.binding = selectBindingList;
        form.process = postProcessList;
        form.quantityList = quantityList;
        for(let i = 0; i < forSort.length; i++) 
        {
            const sort = 
            {
                sort: "",
                name : "",
            }
            sort.sort = i;
            sort.name = forSort[i].name;
            sortList.push(sort)
        }
        form.sortList = sortList;
        console.log(form);
        createProduct(form);
        alert("상품이 추가되었습니다");
    }

    const showModal = (e) =>
    {
        setIsVisiable(true);
    }
    const closeModal = (e) =>
    {
        setIsVisiable(false)
    }
    
    useEffect(()=>
    {
        getLargeCategory();
        getMidiumCategory();
    },[])

    useEffect(()=>{
        console.log(largeCategoryList);
        setLargeCategory(largeCategoryList);
    },[largeCategoryList])

    useEffect(()=>{
        console.log(selectLargeCategory);
        let category = [];
        category = midiumCategoryList.filter(function(value){
            console.log(value.largeCategory)
            const largeCategory = value.largeCategory
            return largeCategory.name === selectLargeCategory
        });
        setMidiumCategory(category);
    },[midiumCategoryList,selectLargeCategory])

    useEffect(()=>
    {
        console.log(productList, pageOptionList,bindingList,docuSpecList)
    },[productList,pageOptionList,bindingList,docuSpecList])

    return (
        <>
            <TestProduct largeCategory={largeCategory} midiumCategory={midiumCategory} selectLargeCategory={selectLargeCategory} setSelectLargeCategory={setSelectLargeCategory}
                         selectmidiumCategory={selectmidiumCategory} setSelectMidiumCategory={setSelectMidiumCategory} productCode={productCode} setProductCode={setProductCode}
                         productName={productName} setProductName={setProductName} offset={offset} setOffset={setOffset} files={files} setFiles={setFiles}/>
            <ProductBoardCom docuSpec={docuSpec} setDocuSpec={setDocuSpec} isBinding={isBinding} isDocuSpec={isDocuSpec} isQuantity={isQuantity} isProductNum={isProductNum}
                            isPaper={isPaper} setIsBinding={setIsBinding} setIsDocuSpec={setIsDocuSpec} setIsPaper={setIsPaper} setIsQuantity={setIsQuantity} setIsProductNum={setIsProductNum}
                            forSort={forSort} setForSort={setForSort}/>
            
            <div style={{margin : "0 auto", width : "225px"}}>
                <EuiButton fill onClick={()=>{handleSaveButton()}}>저장</EuiButton>
                <PreView isVisiable={isVisiable} setIsVisiable={setIsVisiable} showModal={showModal} closeModal={closeModal}/>
            </div>
        </>
    );
}
export default AdminProduct;