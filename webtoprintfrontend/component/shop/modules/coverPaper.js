import {React, useEffect, useState} from 'react'

const CoverPaper =  (props) =>
{
    // select 태그에 관한 변수들
    const [paperKindSelect,setPaperKindSelect] = useState('01');
    const [commonPaperSelect, setCommonPaperSelect] = useState('01');
    const [classyPaperSelect, setClassyPaperSelect] = useState('01');
    

    useEffect(()=>
    {
        switch(paperKindSelect){
            case '01':
                props.setPaperKind("일반지");
                break;
            case '02':
                props.setPaperKind("고급지");
                break;
        }
    },[paperKindSelect]);

    useEffect(()=>
    {
        switch(commonPaperSelect){
            case '01':
                props.setCommonPaper("스노우지 180g");
                break;
            case '02':
                props.setCommonPaper("스노우지 200g");
                break;
            case '03':
                props.setCommonPaper("스노우지 250g");
                break;
            case '04':
                props.setCommonPaper("스노우지 300g");
                break;
            case '05':
                props.setCommonPaper("아트지 180g");
                break;
            case '06':
                props.setCommonPaper("아트지 200g");
            case '07':
                props.setCommonPaper("아트지 250g");
                break;
            case '08':
                props.setCommonPaper("아트지 300g");
                break;
            case '09':
                props.setCommonPaper("모조지 180g");
                break;
            case '10':
                props.setCommonPaper("모조지 220g");
                break;
            case '11':
                props.setCommonPaper("모조지 260g");
                break;
        }
    },[commonPaperSelect]);

    useEffect(()=>
    {   
        switch(classyPaperSelect){
            case '01':
                props.setClassyPaper("랑데뷰(내추럴) 190g");
                break;
            case '02':
                props.setClassyPaper("랑데뷰(내추럴) 210g");
                break;
            case '03':
                props.setClassyPaper("랑데뷰(내추럴) 240g");
                break;
            case '04':
                props.setClassyPaper("랑데뷰(울트라화이트) 190g");
                break;
            case '05':
                props.setClassyPaper("랑데뷰(울트라화이트) 210g");
                break;
            case '06':
                props.setClassyPaper("랑데뷰(울트라화이트) 240g");
                break;
        }
    },[classyPaperSelect])

    return (
        <div>
            <table>
                <tbody>
                    {/* 표지 용지에 관련된 테이블 */}
                    <tr>
                        <th >표지용지</th>
                        <td>
                            <select value={paperKindSelect} className="form-select" onChange={(e)=>{setPaperKindSelect(e.target.value)}} >
                                <option value='01'>일반지</option>
                                <option value='02'>고급지</option>
                            </select>
                            {
                                paperKindSelect==="01" ?(
                                    <select value={commonPaperSelect} onChange={(e)=>{setCommonPaperSelect(e.target.value)}} className='form-select'>
                                        <option value='01'>스노우지 180g</option>
                                        <option value='02'>스노우지 200g</option>
                                        <option value='03'>스노우지 250g</option>
                                        <option value='04'>스노우지 300g</option>
                                        <option value='05'>아트지 180g</option>
                                        <option value='06'>아트지 200g</option>
                                        <option value='07'>아트지 250g</option>
                                        <option value='08'>아트지 300g</option>
                                        <option value='09'>모조지 180g</option>
                                        <option value='10'>모조지 220g</option>
                                        <option value='11'>모조지 260g</option>
                                    </select>
                                ):
                                (
                                    <select value={classyPaperSelect} onChange={(e)=>{setClassyPaperSelect(e.target.value)}} className='form-select'>
                                        <option value='01'>랑데뷰(내추럴) 190g</option>
                                        <option value='02'>랑데뷰(내추럴) 210g</option>
                                        <option value='03'>랑데뷰(내추럴) 240g</option>
                                        <option value='04'>랑데뷰(울트라화이트) 190g</option>
                                        <option value='05'>랑데뷰(울트라화이트) 210g</option>
                                        <option value='06'>랑데뷰(울트라화이트) 240g</option>
                                    </select>
                                )
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CoverPaper;