import {React, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Makesize from './modules/makeSize';
import MakeSetting from './modules/makeSetting';
import OrderSheet from './modules/orderSheet';
import SheetModal from './modules/modalModules/sheetModal';
import {apiSlipInsert, orderRequest} from '../../store/shop/action';
import Router from "next/router";
import Cookies from 'js-cookie';
import { storageService } from '../elements/storage/storageService';
import { addItem } from '../../store/cart/action';
import LoginModel from '../account/auth/modules/LoginModal';
import PageOptionCover from './modules/pageOptionCover';
import PageOptionMain from './modules/pageOptionMain';
import ProcessInfo from './modules/processInfo';
import { getProcessInfoList } from '../../store/product/action';
import { processInfoListSelector, processListSelector } from '../../store/product/selector';


// 데이터 모델
// 작성일자 2월 26일 
// 작성자 최재현 

const Bookmake= () =>{
    const form={
        publishedDate : "",
        //제본 아이디
        bindId : "",
        //사이즈 아이디
        docuSpecId : "",
        //페이지 옵션 리스트
        pageOptionList : [],
        //프로세스 정보 리스트 
        processInfoList : [],
        //제본종류
        kindBinding : "",
        //제본방향
        bindDirection : "",
        //사이즈 
        size: "",
        //재단사이즈
        cutting_size: "",
        //주문명 
        title : "",
        //주문종류
        productName : "",
        //표지  양단면
        coverPrex : "",
        //표지 색깔
        coverColor : "", 
        // 표지 용지 
        coverPaper : "",
        //후가공
        postProcessEfoxy : false,
        postProcessKindCoating : null,
        postProcessKindLeaf : null,
        //본문 양단면
        mainPrex : "",
        //본문 색깔
        mainColor : "",
        //본문 용지 
        mainPaper : "",
        //본문용지페이지수
        mainPaperNum : "",
        //면지
        flyLeaf : null,
        // 제작부수 
        makeNum : "",
        //급한 인쇄 
        quickPrint : null,
    }
    const [companyId, setCompanyId] = useState(1);

    const [docuSpecId , setDocuSpecId] = useState();
    const [bindingId, setBindingId] = useState();
    
    const [titleName, setTitleName] = useState();

    //사이즈 관련 변수 
    const [size, setSize] = useState("타블로이드");

    //재단 사이즈 변수
    const [cuttingSizeVertical,setCuttingSizeVertical] =useState(297);
    const [cuttingSizeHorizontal,setCuttingSizeHorizontal] =useState(420);
    
    //제본 관련 변수 
    const [kindBinding, setKindBinding] = useState();

    //제본방향
    const [bindDirection , setBindDirection] = useState();

    const [pageOptionList, setPageOptionList] = useState([]);
    const [coverPageOptionList, setCoverPageOptionList] = useState({});
    const [mainPageOptionList, setMainPageOptionList] = useState({});
    const [flyLeafPageOptionList, setFlyLeafPageOptionList] = useState({});

    //표지 관련 변수 
    const [coverColor,setCoverColor] = useState();
    const [coverPrex,setCoverPrex]= useState();
    
    //표지용지 관련 변수 
    const [paperKind, setPaperKind] =useState();
    const [commonPaper,setCommonPaper] = useState();
    const [classyPaper,setClassyPaper] = useState();

    //후가공에 관련 변수 
    const [kindCoating, setKindCoating] = useState();
    const [kindLeaf, setKindLeaf]= useState();
    const [efoxy, setEfoxy] = useState(false);
   
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

    //상품명에 관련된 변수 
    const [productName, setProductName] = useState();
    
    const [cartItems, setCartItems] = useState([]);
    
    //프로세스에 관한 변수 
    const processInfoList = useSelector(processInfoListSelector());
    const [processPaperInfo, setProcessPaperInfo] = useState();
    const [processDigitalInfo, setProcessDigitalInfo] = useState();
    //프로세스에 관련해서 넣어주는 함수  
    useEffect(()=>
    {
        const processPaper = processInfoList.filter(function(item){
            return item.alias === "재고사용"
        })

        const processDigital = processInfoList.filter(function(item){
            return item.alias === "Screen잉크젯디지털인쇄"
        })
        const paperForm={
            processInfo : {
                id : ""
            }
        }
        const digitalForm={
            processInfo : {
                id : ""
            }
        }
        if(processPaper[0])
        {
            paperForm.processInfo.id = processPaper[0].id;
            setProcessPaperInfo(paperForm);
        }

        if(processDigital[0])
        {
            digitalForm.processInfo.id = processDigital[0].id;
            setProcessDigitalInfo(digitalForm);
        }

    },[processInfoList])

    const dispatch = useDispatch();

    const getProcessInfo = (id) =>
    {
        dispatch(getProcessInfoList(id))
    }

    useEffect(()=>
    {
        setProductName("책만들기-디지털책자");
        getProcessInfo(companyId);
        if(JSON.parse(storageService.getItem('cartList'))!== null)
        {
            setCartItems(JSON.parse(storageService.getItem('cartList')));
        }
    },[])

    const shopRequest = (form) =>
    {
        dispatch(orderRequest(form));
    }

    const cartAdd = (form) =>
    {
        dispatch(addItem(form));
    }

    const slipInsert = (form) =>
    {
        dispatch(apiSlipInsert(form))
    }
    
    const handleCartClick = () =>
    {
        form.title = titleName;
        form.productName = productName;
        form.size = size;
        form.cutting_size = cuttingSizeVertical.toString() + "*" + cuttingSizeHorizontal.toString();
        form.kindBinding = kindBinding;
        form.bindDirection= bindDirection;
        //표지 용지 
        if(paperKind==="일반지")
        {
            form.coverPaper=commonPaper;
        }
        else if(paperKind==="고급지")
        {
            form.coverPaper=classyPaper;
        }
        form.coverPrex= coverPrex;
        form.coverColor=coverColor;
        //본문 용지 
        if(mainPaperKind==="일반지")
        {
            form.mainPaper=mainCommonPaper;
        }
        else if(mainPaperKind==="고급지")
        {
            form.mainPaper=mainClassyPaper;
        }
        form.mainColor=mainColor;
        form.mainPrex=mainPrex;
        form.mainPaperNum= mainPaperNum;
        //후가공
        if(efoxy)
        {
            form.postProcessEfoxy=efoxy;
        }
        if(kindCoating)
        {
            form.postProcessKindCoating=kindCoating;

        }
        if(kindLeaf)
        {
            form.postProcessKindLeaf=kindLeaf;
        }
        if(flyLeafOption)
        {
            if(flyLeafOption==="본문종이와 동일"&&mainPaperKind==="일반지")
            {
                form.flyLeaf=mainCommonPaper + " " + flyLeafNumber
            }
            else if(flyLeafOption==="본문종이와 동일"&&mainPaperKind==="고급지")
            {
                form.flyLeaf=mainClassyPaper + " " + flyLeafNumber
            }
            else{
                form.flyLeaf=flyLeafOption + " " + flyLeafNumber
            }
        }
        form.makeNum=makeNum;
        if(quickPrint===true)
        {
            form.quickPrint=true;
        }
        else if(quickPrint===false)
        {
            form.quickPrint=null;
        }
  
        if(titleName===undefined)
        {
            alert("주문명을 입력하세요");
        }
        else if(Cookies.get('token')===undefined)
        {
            alert("장바구니에 넣어졌습니다.");
            cartItems.push(form);
            cartAdd(cartItems);
            console.log(cartItems);
            
            storageService.setItem("cartList", JSON.stringify(cartItems));
            Router.push('/shop/cart');
            
        }
        else{
            alert("장바구니에 넣어졌습니다.");
            cartItems.push(form);
            console.log(cartItems);
            storageService.setItem("cartList", JSON.stringify(cartItems));
            Router.push('/shop/cart');
        }
    }

    const handleSummit = (e) =>
    {
        form.title = titleName;
        form.productName = productName;
        form.size = size;
        form.cutting_size = cuttingSizeVertical.toString() + " " + cuttingSizeHorizontal.toString();
        form.kindBinding = kindBinding;
        form.bindDirection= bindDirection;
        //표지 용지 
        if(paperKind==="일반지")
        {
            form.coverPaper=commonPaper;
        }
        else if(paperKind==="고급지")
        {
            form.coverPaper=classyPaper;
        }
        form.coverPrex= coverPrex;
        form.coverColor=coverColor;
        //본문 용지 
        if(mainPaperKind==="일반지")
        {
            form.mainPaper=mainCommonPaper;
        }
        else if(mainPaperKind==="고급지")
        {
            form.mainPaper=mainClassyPaper;
        }
        form.mainColor=mainColor;
        form.mainPrex=mainPrex;
        form.mainPaperNum= mainPaperNum;
        
        //후가공
        if(efoxy)
        {
            form.postProcessEfoxy=efoxy;
        }
        if(kindCoating)
        {
            form.postProcessKindCoating=kindCoating;

        }
        if(kindLeaf)
        {
            form.postProcessKindLeaf=kindLeaf;
        }
        if(flyLeafOption)
        {
            if(flyLeafOption==="본문종이와 동일"&&mainPaperKind==="일반지")
            {
                form.flyLeaf=mainCommonPaper + " " + flyLeafNumber
            }
            else if(flyLeafOption==="본문종이와 동일"&&mainPaperKind==="고급지")
            {
                form.flyLeaf=mainClassyPaper + " " + flyLeafNumber
            }
            else{
                form.flyLeaf=flyLeafOption + " " + flyLeafNumber
            }
        }
        form.makeNum=makeNum;
        if(quickPrint===true)
        {
            form.quickPrint=true;
        }
        else if(quickPrint===false)
        {
            form.quickPrint=null;
        }

        if(titleName===undefined)
        {
            alert("주문명을 입력하세요")
        }
        else if(Cookies.get('token')===undefined)
        {
            alert("로그인이 필요합니다.");
        }
        else
        {
            form.publishedDate = new Date();

             //api를 위한 form 
            form.bindingId = bindingId,
            form.docuSpecId = docuSpecId,

            //페이지 옵션 리스트 
            form.pageOptionList.push(coverPageOptionList);
            form.pageOptionList.push(mainPageOptionList);

            //프로세스 인포 리스트 (지류: 재고사용 , 인쇄 : Screen잉크젯디지털인쇄)
            form.processInfoList.push(processPaperInfo);
            form.processInfoList.push(processDigitalInfo);
            console.log("주문되었습니다");
            console.log(form);
            slipInsert(form);
            shopRequest(form);
            // Router.push('/mypage/orderDilivery');
        }
    }

    useEffect(()=>
    {
        console.log(coverPageOptionList);
    },[coverPageOptionList])

    useEffect(()=>{
        console.log(mainPageOptionList);
    },[mainPageOptionList])
    
    return (
        <div className="container">
            <h3>책 만들기 - 디지털 책자 </h3>
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
                                    setKindBinding={setKindBinding}
                                    setBindDirection={setBindDirection}
                                    setCuttingSizeVertical={setCuttingSizeVertical}
                                    setCuttingSizeHorizontal={setCuttingSizeHorizontal}
                                    setBindingId={setBindingId} setDocuSpecId={setDocuSpecId}
                        />
                        
                        <PageOptionCover setCoverPageOptionList={setCoverPageOptionList} 
                                            setCoverColor={setCoverColor} setCoverPrex={setCoverPrex}
                                            setPaperKind={setPaperKind} setCommonPaper={setCommonPaper} setClassyPaper={setClassyPaper}/>

                        
                        <PageOptionMain setMainPageOptionList={setMainPageOptionList} setFlyLeafPageOptionList={setFlyLeafPageOptionList}
                                        mainPrex={mainPrex} mainColor={mainColor}
                                        mainPaperKind={mainPaperKind} mainCommonPaper={mainCommonPaper}
                                        mainClassyPaper={mainClassyPaper} 
                                        flyLeafOption={flyLeafOption}
                                        flyLeafNumber={flyLeafNumber} mainPaperNum={mainPaperNum}
                                        setMainPrex={setMainPrex} setMainColor={setMainColor}
                                        setMainPaperKind={setMainPaperKind} setMainCommonPaper={setMainCommonPaper} 
                                        setMainClassyPaper={setMainClassyPaper} 
                                        setFlyLeafOption={setFlyLeafOption}
                                        setFlyLeafNumber={setFlyLeafNumber}  setmainPaperNum={setmainPaperNum}/>

                        <ProcessInfo kindCoating={kindCoating} kindLeaf={kindLeaf} efoxy={efoxy}
                                setKindCoating={setKindCoating} setKindLeaf={setKindLeaf} setEfoxy={setEfoxy}/>
                       
                    {/* <Cover setCoverColor={setCoverColor} setCoverPrex={setCoverPrex}/>

                    <CoverPaper setPaperKind={setPaperKind} setCommonPaper={setCommonPaper} setClassyPaper={setClassyPaper}/>

                    <MainPaper  mainPrex={mainPrex} mainColor={mainColor}
                                mainPaperKind={mainPaperKind} mainCommonPaper={mainCommonPaper}
                                mainClassyPaper={mainClassyPaper} 
                                flyLeafOption={flyLeafOption}
                                flyLeafNumber={flyLeafNumber} mainPaperNum={mainPaperNum}
                                setMainPrex={setMainPrex} setMainColor={setMainColor}
                                setMainPaperKind={setMainPaperKind} setMainCommonPaper={setMainCommonPaper} 
                                setMainClassyPaper={setMainClassyPaper} 
                                setFlyLeafOption={setFlyLeafOption}
                                setFlyLeafNumber={setFlyLeafNumber}  setmainPaperNum={setmainPaperNum} /> */}

                    {/* <PostProcess kindCoating={kindCoating} kindLeaf={kindLeaf} efoxy={efoxy}
                                setKindCoating={setKindCoating} setKindLeaf={setKindLeaf} setEfoxy={setEfoxy}
                                    /> */}

                    <MakeSetting  quickPrint={quickPrint} makeNum={makeNum}
                                setQuickPrint={setQuickPrint} setmakeNum={setmakeNum}/>

                                
                </div>                
                <div className="orderTR">
                    <OrderSheet size={size} cuttingSizeVertical={cuttingSizeVertical} cuttingSizeHorizontal={cuttingSizeHorizontal} 

                                kindBinding={kindBinding}  bindDirection={bindDirection} 

                                coverColor={coverColor} coverPrex={coverPrex}

                                paperKind={paperKind} commonPaper={commonPaper}
                                classyPaper={classyPaper} 
                                
                                kindCoating={kindCoating}  kindLeaf={kindLeaf} efoxy={efoxy}

                                mainPrex={mainPrex} mainColor={mainColor}

                                mainPaperKind={mainPaperKind} mainCommonPaper={mainCommonPaper}
                                mainClassyPaper={mainClassyPaper} 
                                flyLeafOption={flyLeafOption}
                                flyLeafNumber={flyLeafNumber} mainPaperNum={mainPaperNum}

                                quickPrint={quickPrint} makeNum={makeNum}

                                productName={productName}
                                />
                        <SheetModal/>
                        <button type="button" className="btn btn-primary orderButton1" onClick={handleCartClick}>장바구니</button>
                        {console.log(Cookies.get('token'))}
                        {
                            Cookies.get('token')===undefined ? 
                            (
                                <>
                                            {/* <button type="button" className="btn btn-primary orderButton1" data-toggle="modal" data-target="#LoginModal">
                                                주문하기
                                            </button>
                                            <LoginModal route="/shop/fileUpload/fileUpload"/> */}
                                            <LoginModel form={form}/>
                                </>         

                            )
                            :
                            (
                                <button type="button" className="btn btn-primary orderButton1" onClick={handleSummit}>주문하기</button>
                            )

                        }
                </div>
            </div>
        </div>
    );
}

export default Bookmake;