import {React, useEffect, useState} from 'react'
import FlyLeaf from './flyLeaf';
import { useSelector } from 'react-redux';

// ToDo : option 태그를 map함수로 정의를 해야 한다. 그리고 데이터는 환경변수로 설정하여야 관리자 페이지를 만들때 편리 할 것이다. 
const MainPaper = (props) =>
{
    
    const [paperKindSelect,setPaperKindSelect] = useState('01');
    const [commonPaperSelect, setCommonPaperSelect] = useState('01');
    const [classyPaperSelect, setClassyPaperSelect] = useState('01');

    useEffect(()=>
    {
        
        setPaperKindSelect('01');
        // if(props.flyLeafOption)
        // {
        //     setCheckedFlyLeaf(true);
        // }
        switch(props.mainPrex){
            case '단면인쇄':
                setMainPrexSelect("01");
                break;
            case '양면인쇄':
                setMainPrexSelect("02");
                break;
        }

        switch(props.mainColor){
            case '흑백인쇄(1도)':
                setMainColorSelect("01");
                break;
            case '칼라인쇄(4도)':
                setMainColorSelect("02");
                break;
        }

        switch(props.mainPaperKind){
            case '일반지':
                setPaperKindSelect("01");
                break;
            case '고급지':
                setPaperKindSelect("02");
                break;
        }

        switch(props.mainCommonPaper){
            case '스노우지 100g':
                setCommonPaperSelect("01");
                break;
            case '스노우지 120g':
                setCommonPaperSelect("02");
                break;
            case '스노우지 150g':
                setCommonPaperSelect("03");
                break;
            case '아트지 100g':
                setCommonPaperSelect("04");
                break;
            case '아트지 120g':
                setCommonPaperSelect("05");
            case '아트지 150g':
                setCommonPaperSelect("06");
                break;
            case '모조지(미색) 80g':
                setCommonPaperSelect("07");
                break;
            case '모조지(미색) 100g':
                setCommonPaperSelect("08");
                break;
            case '모조지(백색) 80g':
                setCommonPaperSelect("09");
                break;
            case '모조지(백색) 100g':
                setCommonPaperSelect("10");
                break;
            case '모조지(백색) 120g':
                setCommonPaperSelect("11");
                break;
            case '모조지(백색) 150g':
                setCommonPaperSelect("12");
                break;
            case '뉴플렉스(미색) 100g':
                setCommonPaperSelect("13");
                break;
            case '뉴플렉스(백색) 100g':
                setCommonPaperSelect("14");
                break;
        }

        switch(props.mainClassyPaper){
            case '랑데뷰(내추럴) 105g':
                setClassyPaperSelect("01");
                break;
            case '랑데뷰(내추럴) 130g':
                setClassyPaperSelect("02");
                break;
            case '랑데뷰(울트라화이트) 105g':
                setClassyPaperSelect("03");
                break;
            case '랑데뷰(울트라화이트) 130g':
                setClassyPaperSelect("04");
                break;
            case '랑데뷰(울트라화이트) 160g':
                setClassyPaperSelect("05");
                break;
        }

        switch(props.flyLeafOption){
            case '본문종이와 동일':
                setFlyLeafOptionSelect("01");
                break;
            case '매직매칭A 회색 120g':
                setFlyLeafOptionSelect("02");
                break;
            case '매직매칭B 참외색 120g':
                setFlyLeafOptionSelect("03");
                break;
            case '매직코튼(고백색) 120g':
                setFlyLeafOptionSelect("04");
                break;
            case '매직코튼(백옥색) 120g':
                setFlyLeafOptionSelect("05");
                break;
            case '매직코튼(연미색) 120g':
                setFlyLeafOptionSelect("06");
                break;
            case '매직콤마A(백색) 120g':
                setFlyLeafOptionSelect("07");
                break;
            case '매직콤마A(베이지색) 120g':
                setFlyLeafOptionSelect("08");
                break;
            case '매직콤마A(아이보리) 120g':
                setFlyLeafOptionSelect("09");
                break;
            case '매직패브릭(백색) 110g':
                setFlyLeafOptionSelect("10");
                break;
            case '색지(분홍) 90g':
                setFlyLeafOptionSelect("11");
                break;
            case '색지(연두) 90g':
                setFlyLeafOptionSelect("12");
                break;
            case '색지(옥색) 90g':
                setFlyLeafOptionSelect("13");
                break;
            case '색지(황색) 90g':
                setFlyLeafOptionSelect("14");
                break;
        }

        switch(props.flyLeafNumber){
            case '앞뒤1장씩':
                setFlyLeafNumberSelect("01");
                break;
            case '앞뒤2장씩':
                setFlyLeafNumberSelect("02");
                break;
        }

    },[])

    
    useEffect(()=>
    {
        switch(paperKindSelect){
            case '01':
                props.setMainPaperKind("일반지");
                break;
            case '02':
                props.setMainPaperKind("고급지");
                break;
        }
    },[paperKindSelect]);

    useEffect(()=>
    {
        switch(commonPaperSelect){
            case '01':
                props.setMainCommonPaper("스노우지 100g");
                break;
            case '02':
                props.setMainCommonPaper("스노우지 120g");
                break;
            case '03':
                props.setMainCommonPaper("스노우지 150g");
                break;
            case '04':
                props.setMainCommonPaper("아트지 100g");
                break;
            case '05':
                props.setMainCommonPaper("아트지 120g");
            case '06':
                props.setMainCommonPaper("아트지 150g");
                break;
            case '07':
                props.setMainCommonPaper("모조지(미색) 80g");
                break;
            case '08':
                props.setMainCommonPaper("모조지(미색) 100g");
                break;
            case '09':
                props.setMainCommonPaper("모조지(백색) 80g");
                break;
            case '10':
                props.setMainCommonPaper("모조지(백색) 100g");
                break;
            case '11':
                props.setMainCommonPaper("모조지(백색) 120g");
                break;
            case '12':
                props.setMainCommonPaper("모조지(백색) 150g");
                break;
            case '13':
                props.setMainCommonPaper("뉴플렉스(미색) 100g");
                break;
            case '14':
                props.setMainCommonPaper("뉴플렉스(백색) 100g");
                break;
        }
    },[commonPaperSelect]);

    useEffect(()=>
    {   
        switch(classyPaperSelect){
            case '01':
                props.setMainClassyPaper("랑데뷰(내추럴) 105g");
                break;
            case '02':
                props.setMainClassyPaper("랑데뷰(내추럴) 130g");
                break;
            case '03':
                props.setMainClassyPaper("랑데뷰(울트라화이트) 105g");
                break;
            case '04':
                props.setMainClassyPaper("랑데뷰(울트라화이트) 130g");
                break;
            case '05':
                props.setMainClassyPaper("랑데뷰(울트라화이트) 160g");
                break;
        }
    },[classyPaperSelect])

    useEffect(()=>
    {
        
    },[])

    return (
        <div>
            <table>
                <tbody>
                    {/* 본문 용지에 관련된 테이블 */}
                    <tr>
                        <th>본문용지</th>
                        <td>
                            <select value={paperKindSelect} onChange={(e)=>{setPaperKindSelect(e.target.value)}} className="form-select">
                                <option value='01'>일반지</option>
                                <option value='02'>고급지</option>
                            </select>
                            {
                                paperKindSelect==="01" ? (
                                <select value={commonPaperSelect} onChange={(e)=>{setCommonPaperSelect(e.target.value)}} className='form-select'>
                                    <option value='01'>스노우지 100g</option>
                                    <option value='02'>스노우지 120g</option>
                                    <option value='03'>스노우지 150g</option>
                                    <option value='04'>아트지 100g</option>
                                    <option value='05'>아트지 120g</option>
                                    <option value='06'>아트지 150g</option>
                                    <option value='07'>모조지(미색) 80g</option>
                                    <option value='08'>모조지(미색) 100g</option>
                                    <option value='09'>모조지(백색) 80g</option>
                                    <option value='10'>모조지(백색) 100g</option>
                                    <option value='11'>모조지(백색) 120g</option>
                                    <option value='12'>모조지(백색) 150g</option>
                                    <option value='13'>뉴플러스(미색) 100g</option>
                                    <option value='14'>뉴플러스(백색) 100g</option>
                                </select>
                            ):(
                                <select className='form-select' value={classyPaperSelect} onChange={(e)=>{setClassyPaperSelect(e.target.value)}}>
                                    <option value='01'>랑데뷰(내추럴) 105g</option>
                                    <option value='02'>랑데뷰(내추럴) 130g</option>
                                    <option value='03'>랑데뷰(울트라화이트) 105g</option>
                                    <option value='04'>랑데뷰(울트라화이트) 130g</option>
                                    <option value='05'>랑데뷰(울트라화이트) 160g</option>
                                </select>)
                            }
                        </td>
                    </tr>
                    {/* <FlyLeaf flyLeafOption={props.flyLeafOption}
                        flyLeafNumber={props.flyLeafNumber} setFlyLeafOption={props.setFlyLeafOption}
                        setFlyLeafNumber={props.setFlyLeafNumber} apiPageOption={props.apiPageOption} 
                        setFlyLeafPageOptionList={props.setFlyLeafPageOptionList}/> */}
      
                    {/* 페이지수에 관련된 테이블 */}
                    <tr>
                        <th>페이지수</th>
                        <td>
                            <input type="text" style={{width:45+'px'}} value={props.mainPaperNum} onChange={(e)=>{props.setmainPaperNum(Number(e.target.value))}}></input>
                            <span>page</span>
                            <span>(표지 페이지 제외)</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MainPaper;
