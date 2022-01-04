import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPageOption } from "../../../store/product/action"
import { productProcessInfoGet } from "../../../store/product/request"
import { pageOptionListSelector } from "../../../store/product/selector"
import Cover from "./cover"
import CoverPaper from "./coverPaper"
import Main from "./main"
import MainPaper from "./mainPaper"


const PageOptionCover = (props) =>
{

    const apiPageOption = useSelector(pageOptionListSelector());

    const [companyId ,setCompayId] = useState(1);

    const [pageOptionId,setPageOptionId] = useState();

    const [pageCount, setPageCount] = useState();

    const pageOptionListForm ={
        blead : "",
        content : "",
        marginRate : "",
        pageCount : "",
        pageOption : {
            id : "",
        },
        prf : "",
        printType : "",
        regularQuntity : "",
        separation : "",
        signature : "",
        spotColor : "",
        totalQuantity : ""
    }

    const dispatch = useDispatch()

    useEffect(() =>
    {

        dispatch(getPageOption(companyId));

    },[])

     //표지 관련 변수 
    const [coverColor,setCoverColor] = useState();
    const [coverPrex,setCoverPrex]= useState();

    const [paperKind, setPaperKind] =useState();
    const [commonPaper,setCommonPaper] = useState();
    const [classyPaper,setClassyPaper] = useState();

    const [separation, setSeparation] = useState();
    const [coverCode , setCoverCode] = useState();
    const [count , setCount] = useState();

  
    useEffect(()=>
    {
        console.log(coverColor, coverPrex);
        if(coverPrex==="단면인쇄"&&coverColor==="흑백인쇄")
        {
            setSeparation("1+0");
            setPageCount(2);
        }
        if(coverPrex==="단면인쇄"&&coverColor==="컬러인쇄")
        {
            setSeparation("4+0");
            setPageCount(2);
        }
        if(coverPrex==="양면인쇄"&&coverColor==="흑백인쇄")
        {
            setSeparation("1+1");
            setPageCount(4);
        }
        if(coverPrex==="양면인쇄"&&coverColor==="컬러인쇄")
        {
            setSeparation("4+4");
            setPageCount(4);
        }
    },[coverColor,coverPrex])

    useEffect(()=>{
        console.log(separation);
        pageOptionListForm.pageCount = pageCount;
        pageOptionListForm.pageOption.id = pageOptionId;
        pageOptionListForm.separation = separation;
        props.setCoverPageOptionList(pageOptionListForm);
    },[pageOptionId,separation,pageCount])


    useEffect(()=>
    {
        props.setCoverColor(coverColor);
        props.setCoverPrex(coverPrex);
        props.setPaperKind(paperKind);
        props.setCommonPaper(commonPaper);
        props.setClassyPaper(classyPaper);
    },[coverColor,coverPrex,paperKind,commonPaper,classyPaper])

    return (
        <>
            <Cover coverColor={coverColor} coverPrex={coverPrex} setCoverColor={setCoverColor} setCoverPrex={setCoverPrex}
             apiPageOption={apiPageOption} companyId={companyId} setPageOptionId={setPageOptionId}
                />
            <CoverPaper setPaperKind={setPaperKind} setCommonPaper={setCommonPaper} setClassyPaper={setClassyPaper}/>
        </>
    )
}
export default PageOptionCover;