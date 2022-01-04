
const orderButton= () =>{

    
    const form={
        size: "",
        //재단사이즈
        cutting_size: "",
        //제본종류
        kindBinding : "",
        //링
        ring : "",
        //앞뒤면비닐
        vinyl : "",
        //제본방향
        bindDirection : "",
        //표지  양단면
        coverPrex : "",
        //표지 색깔
        coverColor : "",
        // 표지 용지 
        coverPaper : "",
        //후가공
        postProcess : "",
        //본문 양단면
        mainPrex : "",
        //본문 색깔
        mainColor : "",
        //본문 용지 
        mainPaper : "",
        //본문용지페이지수
        makeNum : "",
        //면지
        flyLeaf : "",
        // 제작부수 
        makeNum : "",
        //급한 인쇄 
        quickPrint : "",
    
    }



    return (
        <div>
            
            <button type="submit" className="btn btn-primary orderButton1">주문하기</button>
        </div>
    );
}
