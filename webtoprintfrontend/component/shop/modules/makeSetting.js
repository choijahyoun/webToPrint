import {React, useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

//제작 부수, 급한 인쇄 유무

const MakeSetting = (props) =>
{
    return (
        <div>
            <table>
                <tbody>
                      {/* 제작부수에 관련된 테이블 */}
                    <tr>
                        <th>제작부수</th>
                        <td>
                            <input type="text" style={{width:45+'px'}} value={props.makeNum} onChange={(e)=>{props.setmakeNum(Number(e.target.value))}}></input>
                            <span>부</span>
                        </td>
                    </tr>
                    {/* 급한 인쇄에 관련된 테이블 */}
                    <tr>
                        <th>급한인쇄</th>
                        {props.quickPrint}
                        <td>
                            <input type="checkbox" value={props.quickPrint} onChange={(e)=>{props.setQuickPrint(e.target.checked)}} checked={props.quickPrint}></input>
                            <span>급한인쇄 요청</span>
                            <span>(급한인쇄-주문일 또는 다음날 상품 출고)* 토,일은 제외</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MakeSetting;