import {React, useEffect, useState} from 'react'

const Cover = (props)=>
{
    //select에 관련된 변수
    const [plexPrint, setPlexPrint] = useState("단면인쇄");
    const [colorPrint, setColorPrint] = useState("흑백인쇄");

    useEffect(()=>
    {
        props.setCoverPrex(plexPrint);
    },[plexPrint])

    useEffect(()=>
    {
        props.setCoverColor(colorPrint);
    },[colorPrint])

    useEffect(()=>{
        const coverPageOption = props.apiPageOption.filter(function(item){
            return item.pageType === "표지"
        })
        if(coverPageOption[0])
        {
            props.setPageOptionId(coverPageOption[0].id);
        }
    },[props.apiPageOption])

    return(
        <div>
            <table>
                <tbody>
                    {/* 표지에 관련된 테이블 */}
                    <tr>
                        <th>표지</th>
                        <td>
                            <select value={plexPrint} className="form-select" onChange={(e)=>{setPlexPrint(e.target.value)}}>
                                <option value="단면인쇄">단면인쇄</option>
                                <option value="양면인쇄">양면인쇄</option>
                            </select>
                            <select value={colorPrint} className="form-select" onChange={(e)=>{setColorPrint(e.target.value)}}>
                                <option value='흑백인쇄'>흑백인쇄(1도)</option>
                                <option value='컬러인쇄'>컬러인쇄(4도)</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cover;