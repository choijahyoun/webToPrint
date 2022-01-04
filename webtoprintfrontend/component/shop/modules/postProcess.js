import {React, useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

// 박과 코팅 유무

const PostProcess = (props) =>
{
    const [kindCoatingSelect , setKindCoatingSelect] =useState();
    const [kindLeafSelect, setKindLeafSelect] = useState();
    const [checkedEfoxy , setCheckedEfoxy] =useState();
    const [checkedCoating, setCheckedCoating] =useState();
    const [checkedLeaf, setCheckedLeaf]= useState();

    const [postProcessInfo , setPostProcessInfo] = useState(); 

    const [efoxyId , setEfoxyId] = useState();

    const [coatingId , setCoatingId] = useState();

    useEffect(()=>
    {    

        props.setKindCoating(kindCoatingSelect);

    },[kindCoatingSelect])

    useEffect(()=>{

        props.setKindLeaf(kindLeafSelect);

    },[kindLeafSelect])

    useEffect(()=>
    {
        if(checkedEfoxy)
        {
            props.setEfoxy(true);
        }

    },[checkedEfoxy])

    useEffect(()=>
    {
        console.log(props.kindCoating, props.kindLeaf)
        if(props.kindCoating)
        {
            setCheckedCoating(true);
            props.setKindCoatingSelect(props.kindCoadting);
        }
        if(props.efoxy)
        {
            setCheckedEfoxy(true);
        }
        if(props.kindLeaf)
        {
            setCheckedLeaf(true);
            props.setKindLeafSelect(props.kindLeaf);
        }
    },[])

    useEffect(()=>
    {
        const postProcessInfo = props.processInfoList.filter(function(item){
            return item.process.name === "후가공\r"
        })
        console.log(postProcessInfo);
        setPostProcessInfo(postProcessInfo);

    },[props.processInfoList])

    return (
        <div>
            <table>
                <tbody>
                      {/* 후가공에 괸련된 테이블 */}
                      <tr>
                        <th>후가공</th>
                        <td>
                            <label>
                                <input type="checkbox" value={checkedEfoxy} onChange={(e)=>{setCheckedEfoxy(e.target.checked)}} checked={checkedEfoxy}></input>
                                <span>에폭시(소코딕스)</span>
                            </label>
                            <label>
                                <input type="checkbox" value={checkedCoating} onChange={(e)=>{setCheckedCoating(e.target.checked)}} checked={checkedCoating}></input>
                                <span>코팅</span>
                            </label>
                            {
                                checkedCoating ===true &&(
                                    <select className='form-select' value={kindCoatingSelect} onChange={(e)=>{setKindCoatingSelect(e.target.value)}}>
                                        <option value="무광">무광코팅</option>
                                        <option value="유광">유광코팅</option>
                                        <option value="엠보싱">엠보코팅</option>
                                    </select>
                                )
                            }
                            <label>
                                <input type="checkbox" value={checkedLeaf} onChange={(e)=>{setCheckedLeaf(e.target.checked)}} checked={checkedLeaf}></input>
                                <span>박</span>
                            </label>
                            {
                                checkedLeaf===true &&(
                                    <select className="form-select" value={kindLeafSelect} onChange={(e)=>{setKindLeafSelect(e.target.value)}}>
                                        <option value="은박">은박</option>
                                        <option value="금박">금박</option>
                                        <option value="청박">청박</option>
                                        <option value="적박">적박</option>
                                        <option value="먹박">먹박</option>
                                        <option value="홀로그램">홀로그램</option>
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
export default PostProcess;
