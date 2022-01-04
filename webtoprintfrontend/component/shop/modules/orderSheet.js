import React, { useEffect, useState } from 'react';
import SheetFlyLeaf from './sheetModules/sheetFlyLeaf';
import SheetPostProccess from './sheetModules/sheetPostProccess';

const orderSheet = (props)=>
{
    const [checkedFlyLeaf, setCheckedFlyLeaf] = useState();
    const [checkedEfoxy , setCheckedEfoxy] =useState();
    const [checkedCoating, setCheckedCoating] =useState();
    const [checkedLeaf, setCheckedLeaf]= useState();

    useEffect(()=>
    {
        if(props.KindCoadting)
        {
            setCheckedCoating(true);
        }

        if(props.effocy)
        {
            setCheckedEfoxy(true);
        }

        if(props.KindLeaf)
        {
            setCheckedLeaf(true);
        }

        if(props.flyLeafOption)
        {
            setCheckedFlyLeaf(true);
        }

    },[])
    return(
        <div className="orderSheet">
            <h3>주문제작사양</h3>
            <table>
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>{props.productName}</td>
                    </tr>
                    <tr>
                        <th>사이즈</th>
                        <td>{props.size}</td>
                    </tr>
                    <tr>
                        <th>제본</th>
                        <td>{props.kindBinding}</td>
                    </tr>
                    <tr>
                        <th>제본방향</th>
                        <td>{props.bindDirection}</td>
                    </tr>
                    <tr>
                        <th>표지 양/단면</th>
                        <td>{props.coverPrex}</td>
                    </tr>
                    <tr>
                        <th>표지인쇄컬러</th>
                        <td>{props.coverColor}</td>
                    </tr>
                    <tr> 
                        <th>표지용지</th>
                        { 
                            props.paperKind ==="고급지" ? (
                                <td>{props.classyPaper}</td>
                            ):(
                                <td>{props.commonPaper}</td>
                            )
                        }
                    </tr>
                        <SheetPostProccess kindCoating={props.kindCoating}  kindLeaf={props.kindLeaf} efoxy={props.efoxy}
                        checkedEfoxy={checkedEfoxy} checkedCoating={checkedCoating} 
                        checkedLeaf={checkedLeaf}/>
                    <tr>
                        <th>본문 양/단면</th>
                        <td>{props.mainPrex}</td>
                    </tr>
                    <tr> 
                        <th>본문인쇄컬러</th>
                        <td>{props.mainColor}</td>
                    </tr>
                    <tr>
                        <th>본문종이</th>
                    { 
                            props.mainPaperKind ==="고급지" ? (
                                <td>{props.mainClassyPaper}</td>
                            ):(
                                <td>{props.mainCommonPaper}</td>
                            )
                        }
                    </tr>
                    {
                        checkedFlyLeaf===true &&(
                            <>
                            <th>본문면지</th>
                                <SheetFlyLeaf flyLeafOption={props.flyLeafOption} mainPaperKind={props.mainPaperKind} 
                                mainCommonPaper={props.mainCommonPaper} mainClassyPaper={props.mainClassyPaper} flyLeafNumber={props.flyLeafNumber}/>
                            </>

                        )
                    }
                    <tr>
                        <th>페이지수</th>
                        <td>{props.mainPaperNum}pages</td> 
                    </tr>
                    <tr>
                        <th>제작수량</th>
                        <td>{props.makeNum}부</td>
                    </tr>
                    {
                        props.quickPrint===true&&(
                            <>
                                <tr>
                                    <th>급한요청</th>
                                    <td>요청됨</td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default orderSheet;