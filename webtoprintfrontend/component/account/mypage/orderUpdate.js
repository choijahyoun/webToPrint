import { useEffect, useState } from "react";
import  {orderOneUpdate}  from "../../../store/shop/action";
import PostProcess from "../../shop/modules/postProcess";
import Cover from "../../shop/modules/cover";
import CoverPaper from "../../shop/modules/coverPaper";
import MainPaper from "../../shop/modules/mainPaper";
import MakeSetting from "../../shop/modules/makeSetting";
import Makesize from "../../shop/modules/makeSize";
import  Router  from "next/router";
import { useDispatch } from "react-redux";


const OrderUpdate = (props) =>
{
    const dispatch = useDispatch();

    const updateOrder = (orderList) =>
    {
        dispatch(orderOneUpdate(orderList))
    }
    //상품명에 관련된 변수 
    const [productName, setProductName] = useState();

    const [titleName, setTitleName] = useState();

    //사이즈 관련 변수 
    const [size, setSize] = useState("");

    //재단 사이즈 변수
    const [cuttingSizeVertical,setCuttingSizeVertical] =useState();
    const [cuttingSizeHorizontal,setCuttingSizeHorizontal] =useState();

    //작업 사이즈 변수 
    const [workingSizeVertical,setWorkingSizeVertical] = useState();
    const [workingSizeHorizontal,setWorkingSizeHorizontal]= useState();

    // 표지 사이즈 변수
    const [coverSizeVertical, setCoverSizeVertical] = useState();
    const [coverSizeHorizontal, setCoverSizeHorizontal] = useState();

    //제본 관련 변수 
    const [kindBinding, setKindBinding] = useState();
    const [ring, setRing] =useState();
    const [vinyl , setVinyl] = useState();

    //제본방향
    const [bindDirection , setBindDirection] = useState();

    //표지 관련 변수 
    const [coverColor,setCoverColor] = useState();
    const [coverPrex,setCoverPrex]= useState();
    
    //표지용지 관련 변수 
    const [paperKind, setPaperKind] =useState();
    const [commonPaper,setCommonPaper] = useState();
    const [classyPaper,setClassyPaper] = useState();

    //후가공에 관련 변수 
    const [kindCoating, setKindCoating] = useState('');
    const [kindLeaf, setKindLeaf]= useState('');
    const [efoxy, setEfoxy] = useState(null);

    // 본문(내지)관련 변수
    const [mainPrex, setMainPrex] = useState();
    const [mainColor, setMainColor] =useState();
  
    //본문용지 관련 변수 
    const [mainPaperKind, setMainPaperKind] =useState();
    const [mainCommonPaper,setMainCommonPaper] = useState();
    const [mainClassyPaper,setMainClassyPaper] = useState();

    //면지 관련 변수
    const [flyLeafOption, setFlyLeafOption] = useState();
    const [flyLeafNumber, setFlyLeafNumber]= useState();
    const [mainPaperNum,setmainPaperNum] = useState(50);

    //제작부수, 급한인쇄 관련 변수 
    const [quickPrint, setQuickPrint] = useState();
    const [makeNum , setmakeNum] = useState(10);

    useEffect(()=>
    {
        setProductName(props.orderList.productName);
        setTitleName(props.orderList.titleName);
        setSize(props.orderList.size);
        setCuttingSizeVertical(props.orderList.cutting_size.split(" ")[0]);
        setCuttingSizeHorizontal(props.orderList.cutting_size.split(" ")[1]);
        setKindBinding(props.orderList.kindBinding);
        setRing(props.orderList.ring);
        setVinyl(props.orderList.vinyl);
        setPaperKind(props.orderList.paperKind);
        setCommonPaper(props.orderList.conmmonPaper);
        setKindCoating(props.orderList.postProcessKindCoating);
        setKindLeaf(props.orderList.postProcessKindLeaf);
        setEfoxy(props.orderList.postProcessEfoxy);
        setMainPrex(props.orderList.mainPrex);
        setMainColor(props.orderList.mainColor);
        setMainPaperKind(props.orderList.mainPaperKind);
        setMainCommonPaper(props.orderList.mainCommonPaper);
        setMainClassyPaper(props.orderList.mainClassyPaper);
        setFlyLeafOption(props.orderList.flyLeafOption);
        setFlyLeafNumber(props.orderList.flyLeafNumber);
        setmainPaperNum(props.orderList.mainPaperNum);
        setQuickPrint(props.orderList.quickPrint);
        setmakeNum(props.orderList.makeNum);
    },[])

    const handleSummit = () =>
    {
        props.orderList.title = titleName;
        props.orderList.productName = productName;
        props.orderList.size = size;
        props.orderList.cutting_size = cuttingSizeVertical.toString() + " " + cuttingSizeHorizontal.toString();
        props.orderList.kindBinding = kindBinding;
        if(kindBinding==="스프링제본(트윈링)")
        {
            props.orderList.ring = ring;
            props.orderList.vinyl= vinyl;
        }
        else if(kindBinding==="크리스탈링제본")
        {
            props.orderList.ring = ring;
            props.orderList.vinyl= vinyl;
        }
        props.orderList.bindDirection= bindDirection;
        //표지 용지 
        if(paperKind==="일반지")
        {
            props.orderList.coverPaper=commonPaper;
        }
        else if(paperKind==="고급지")
        {
            props.orderList.coverPaper=classyPaper;
        }
        props.orderList.coverPrex= coverPrex;
        props.orderList.coverColor=coverColor;
        //본문 용지 
        if(mainPaperKind==="일반지")
        {
            props.orderList.mainPaper=mainCommonPaper;
        }
        else if(mainPaperKind==="고급지")
        {
            props.orderList.mainPaper=mainClassyPaper;
        }
        props.orderList.mainColor=mainColor;
        props.orderList.mainPrex=mainPrex;
        props.orderList.mainPaperNum= mainPaperNum;
        //후가공
        if(efoxy)
        {
            props.orderList.postProcessEfoxy=efoxy;
        }
        if(kindCoating)
        {
            props.orderList.postProcessKindCoating=kindCoating;

        }
        if(kindLeaf)
        {
            props.orderList.postProcessKindLeaf=kindLeaf;
        }
        if(flyLeafOption)
        {
            if(flyLeafOption==="본문종이와 동일"&&mainPaperKind==="일반지")
            {
                props.orderList.flyLeaf=mainCommonPaper + " " + flyLeafNumber
            }
            else if(flyLeafOption==="본문종이와 동일"&&mainPaperKind==="고급지")
            {
                props.orderList.flyLeaf=mainClassyPaper + " " + flyLeafNumber
            }
            else{
                props.orderList.flyLeaf=flyLeafOption + " " + flyLeafNumber
            }
        }
        props.orderList.makeNum=makeNum;
        if(quickPrint===true)
        {
            props.orderList.quickPrint=true;
        }
        else if(quickPrint===false)
        {
            props.orderList.quickPrint=false;
        }
        if(titleName===undefined)
        {
            alert("주문명을 입력하세요")
        }
        else if(Cookies.get('token')===undefined)
        {
            alert("로그인이 필요합니다.");
            Router.push('/account/login');
        }
        else
        {
            console.log(props.orderList.id);
            updateOrder(props.orderList,props.orderList.id);
            alert("수정되었습니다.")
            Router.push('/mypage/orderDilivery');
        }
    }

    const handleCansle = () =>
    {
        Router.push('/mypage/orderDilivery');
    }

    return (
        <div className="container">
            <h3>{props.orderList.productName}</h3>
        <div className="myWrap">
            <div className="h2wrap">
                    <h2>주문명(작업명)입력</h2>
            </div>
                <ul class="fileName2">
                    <li>
                    <input type="text" style={{width:"100%"}} placeholder="20자 이내로 적어주세요." maxlength="20" id="ORDER_TITLE" value={titleName} onChange = {
                        (e)=>{setTitleName(e.target.value)} 
                    }  required />
                    </li>
                </ul>
            <div className="orderTLWrap">
                <Makesize size={size} setSize={setSize} cuttingSizeVertical={cuttingSizeVertical} cuttingSizeHorizontal={cuttingSizeHorizontal}
                            workingSizeVertical={workingSizeVertical}
                            workingSizeHorizontal={workingSizeHorizontal}
                            coverSizeVertical={coverSizeVertical}
                            coverSizeHorizontal={coverSizeHorizontal}

                            setKindBinding={setKindBinding}
                            setRing={setRing}
                            setVinyl={setVinyl}
                            setBindDirection={setBindDirection}

                            setCuttingSizeVertical={setCuttingSizeVertical}
                            setCuttingSizeHorizontal={setCuttingSizeHorizontal}
                            setWorkingSizeVertical={setWorkingSizeVertical}
                            setWorkingSizeHorizontal={setWorkingSizeHorizontal}
                            setCoverSizeVertical={setCoverSizeVertical}
                            setCoverSizeHorizontal={setCoverSizeHorizontal}
                    />
                
                <Cover setCoverColor={setCoverColor} setCoverPrex={setCoverPrex}/>
                <CoverPaper setPaperKind={setPaperKind} setCommonPaper={setCommonPaper} setClassyPaper={setClassyPaper}/>
                <PostProcess kindCoating={kindCoating} kindLeaf={kindLeaf} efoxy={efoxy}
                                setKindCoating={setKindCoating} setKindLeaf={setKindLeaf} setEfoxy={setEfoxy}
                                    />

                    <MainPaper  mainPrex={mainPrex} mainColor={mainColor}
                                mainPaperKind={mainPaperKind} mainCommonPaper={mainCommonPaper}
                                mainClassyPaper={mainClassyPaper} 
                                flyLeafOption={flyLeafOption}
                                flyLeafNumber={flyLeafNumber} mainPaperNum={mainPaperNum}
                                setMainPrex={setMainPrex} setMainColor={setMainColor}
                                setMainPaperKind={setMainPaperKind} setMainCommonPaper={setMainCommonPaper} 
                                setMainClassyPaper={setMainClassyPaper} 
                                setFlyLeafOption={setFlyLeafOption}
                                setFlyLeafNumber={setFlyLeafNumber}  setmainPaperNum={setmainPaperNum} />

                <MakeSetting  quickPrint={quickPrint} makeNum={makeNum}
                            setQuickPrint={setQuickPrint} setmakeNum={setmakeNum}/>
            </div>
            <div>
                    <button type="button" className="btn btn-primary orderButton1" onClick={handleSummit}>수정하기</button>
                    <button type="button" className="btn btn-danger orderButton1" onClick={handleCansle}>수정취소</button>
            </div>
        </div>
    </div>
    );
}
export default OrderUpdate;