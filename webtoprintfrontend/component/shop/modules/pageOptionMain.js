import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { pageOptionListSelector } from "../../../store/product/selector";
import Main from "./main";
import MainPaper from "./mainPaper";


const PageOptionMain = (props) =>
{
    const apiPageOption = useSelector(pageOptionListSelector());
    
    const pageOptionListForm ={
        blead : "",
        content : "",
        marginRate : "",
        pageCount : "",
        pageOption : {
            id : 2,
        },
        prf : "",
        printType : "",
        regularQuntity : "",
        separation : "",
        signature : "",
        spotColor : "",
        totalQuantity : ""
    }

    

    const [separation, setSeparation] = useState("1+0");

    const [pageOptionId,setPageOptionId] = useState();
    const [mainPrex, setMainPrex] = useState();
    const [mainColor, setMainColor] =useState();
    const [pageCount, setPageCount] = useState();

    const [companyId ,setCompayId] = useState(1);

    const [mainPaperKind, setMainPaperKind] =useState();
    const [mainCommonPaper,setMainCommonPaper] = useState();
    const [mainClassyPaper,setMainClassyPaper] = useState();

    //면지 관련 변수
    const [flyLeafOption, setFlyLeafOption] = useState();
    const [flyLeafNumber, setFlyLeafNumber]= useState();
    const [mainPaperNum,setmainPaperNum] = useState(50);

    useEffect(()=>
    {
        props.setMainPageOptionList(pageOptionListForm);
    },[])

    useEffect(()=>
    {
        if(mainPrex==="단면인쇄" && mainColor==="흑백인쇄")
        {
            setSeparation("1+0");
        }
        if(mainPrex==="단면인쇄" && mainColor==="칼라인쇄")
        {
            setSeparation("4+0");
        }
        if(mainPrex==="양면인쇄" && mainColor==="흑백인쇄")
        {
            setSeparation("1+1");
        }
        if(mainPrex==="양면인쇄" && mainColor==="칼라인쇄")
        {
            setSeparation("4+4");
        }
        props.setMainPrex(mainPrex);
        props.setMainColor(mainColor);
    },[mainPrex,mainColor])

    useEffect(()=>
    {
        pageOptionListForm.pageOption.id = pageOptionId;
        pageOptionListForm.separation = separation;
        pageOptionListForm.pageCount = mainPaperNum;
        props.setMainPageOptionList(pageOptionListForm);
    },[separation,mainPaperNum,pageOptionId])

    useEffect(()=>
    {
        props.setMainPaperKind(mainPaperKind);
        props.setMainCommonPaper(mainCommonPaper);
        props.setMainClassyPaper(mainClassyPaper);
    },[mainPaperKind,mainCommonPaper,mainClassyPaper])

    return(
        <>
            <Main mainPrex={mainPrex} mainColor={mainColor}  setMainPrex={setMainPrex} setMainColor={setMainColor} 
            apiPageOption={apiPageOption} companyId={companyId} setPageOptionId={setPageOptionId}/>
            <MainPaper   mainPaperKind={mainPaperKind} mainCommonPaper={mainCommonPaper}
                        mainClassyPaper={mainClassyPaper} 
                        flyLeafOption={flyLeafOption}
                        flyLeafNumber={flyLeafNumber} mainPaperNum={mainPaperNum}
                        setMainPaperKind={setMainPaperKind} setMainCommonPaper={setMainCommonPaper}
                        setMainClassyPaper={setMainClassyPaper} 
                        setFlyLeafOption={setFlyLeafOption}
                        setFlyLeafNumber={setFlyLeafNumber}  setmainPaperNum={setmainPaperNum} apiPageOption={apiPageOption} setFlyLeafPageOptionList={props.setFlyLeafPageOptionList}/>
        </>
    );
}
export default PageOptionMain;