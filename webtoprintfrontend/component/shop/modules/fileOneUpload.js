import { useRouter } from "next/router";


const FileUplaodOne = (props) =>
{ 

    const form = {
        orderId : "",
        files : "",
    }

    const [file , setFile] = useState([]);
    const onFileUpload = (e) =>
    {
        setFile(e.target.files[0]);
    }

    const dispatch = useDispatch();

    const fileSent = (formData) =>
    {
        dispatch(fileSentRequest(formData));
    }

    const handlePreButton = () =>
    {
        Router.push('/mypage/orderDilivery');
    }

    const handleNext = () =>
    {
        if(file !== undefined)
        {
        form.file = file;
        form.orderId = props.id;
            fileSent(form);
            Router.push('/mypage/orderDilivery');
        }
        else{

            Router.push('/mypage/orderDilivery');
        }
    }

    return (
        <div className="container">
            <div className="myWrap">
                <div className="myTit">
                    <h3>파일업로드</h3>
                </div>
                <div class="h2wrap">
                    <h2>인쇄파일 업로드</h2>
                    <p class="mgb10">제본 - 내지(본문) 파일은 인쇄 페이지를 <span class="red">모두 병합</span>하여 <span class="red">1개의 PDF파일</span>로 업로드 해 주세요.
                    <br/>
                    ※ 제본(무선,중철,스프링) 주문시 표지파일, 내지파일 각각 하나씩 작업해서 첨부해주세요. <span class="red">총 2개 파일</span> 입니다.
                    <br/>
                    </p>
                    <div class="icoRead">
                    [업로드 파일명 예시] &nbsp;&nbsp;<span class="red">홍길동_한글소설(주문명)_표지.pdf  / 홍길동_한글소설(주문명)_내지.pdf</span>
                    </div>                 
                </div>
                
                <input type="file" name="filepdf"  onChange={(e)=>{onFileUpload(e)}}></input>
            
                <div className="fileButton">
                    <button type="button" className="btn btn-light fileButton1" onClick={handlePreButton}>이전화면</button>
                    <button type="button" className="btn btn-danger fileButton3" onClick={handleNext}>파일업로드</button>
                </div>
            </div>
        </div>
    )
}
export default FileUploadOne;