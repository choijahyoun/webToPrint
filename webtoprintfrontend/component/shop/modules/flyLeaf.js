
import { FormItemPrefixContext } from 'antd/lib/form/context';
import React, { useEffect, useState } from 'react';

const FlyLeaf = (props) =>
{
    const [flyLeafOptionSelect, setFlyLeafOptionSelect] = useState("01");
    const [flyLeafNumberSelect, setFlyLeafNumberSelect]= useState("01");

    const [checkedFlyLeaf, setCheckedFlyLeaf] = useState();

    useEffect(()=>
    {
        switch(flyLeafOptionSelect){
            case '01':
                props.setFlyLeafOption("본문종이와 동일");
                break;
            case '02':
                props.setFlyLeafOption("매직매칭A 회색 120g");
                break;
            case '03':
                props.setFlyLeafOption("매직매칭B 참외색 120g");
                break;
            case '04':
                props.setFlyLeafOption("매직코튼(고백색) 120g");
                break;
            case '05':
                props.setFlyLeafOption("매직코튼(백옥색) 120g");
                break;
            case '06':
                props.setFlyLeafOption("매직코튼(연미색) 120g");
                break;
            case '07':
                props.setFlyLeafOption("매직콤마A(백색) 120g");
                break;
            case '08':
                props.setFlyLeafOption("매직콤마A(베이지색) 120g");
                break;
            case '09':
                props.setFlyLeafOption("매직콤마A(아이보리) 120g");
                break;
            case '10':
                props.setFlyLeafOption("매직패브릭(백색) 110g");
                break;
            case '11':
                props.setFlyLeafOption("색지(분홍) 90g");
                break;
            case '12':
                props.setFlyLeafOption("색지(연두) 90g");
                break;
            case '13':
                props.setFlyLeafOption("색지(옥색) 90g");
                break;
            case '14':
                props.setFlyLeafOption("색지(황색) 90g");
                break;
        }
    },[flyLeafOptionSelect])

    useEffect(()=>
    {
        switch(flyLeafNumberSelect){
            case '01':
                props.setFlyLeafNumber("앞뒤1장씩");
                break;
            case '02':
                props.setFlyLeafNumber("앞뒤2장씩");
                break;
        }
    },[flyLeafNumberSelect])

    useEffect(()=>{
        const flyPageOption = props.apiPageOption.filter(function(item){
            return item.pageType === "면지"
        })

        if(flyPageOption[0])
        {
            props.setFlyLeafPageOptionListId(flyPageOption[0].id)
        }
       
    },[props.apiPageOption])

    return(
       
        <tr>
            <td>
                <label>
                    <input type="checkbox" value={checkedFlyLeaf} onChange={(e)=>{setCheckedFlyLeaf(e.target.checked)}} checked={checkedFlyLeaf}></input>
                    <span>면지</span>
                </label>
                {
                    checkedFlyLeaf===true &&
                    (   <>
                            <select className="form-select" value={flyLeafOptionSelect} onChange={(e)=>{setFlyLeafOptionSelect(e.target.value)}}>
                                <option value="01">본문종이와 동일</option>
                                <option value="02">매직매칭A 회색 120g</option>
                                <option value="03">매직매칭B 참외색 120g</option>
                                <option value="04">매직코튼(고백색) 120g</option>
                                <option value="05">매직코튼(백옥색) 120g</option>
                                <option value="06">매직코튼(연미색) 120g</option>
                                <option value="07">매직콤마A(백색) 120g</option>
                                <option value="08">매직콤마A(베이지색) 120g</option>
                                <option value="09">매직콤마A(아이보리) 120g</option>
                                <option value="10">매직패브릭(백색) 110g</option>
                                <option value="11">색지(분홍) 90g</option>
                                <option value="12">색지(연두) 90g</option>
                                <option value="13">색지(옥색) 90g</option>
                                <option value="14">색지(황색) 90g</option>
                            </select>
                            <select className="form-select" value={flyLeafNumberSelect} onChange={(e)=>{setFlyLeafNumberSelect(e.target.value)}}>
                                <option value="01">앞뒤1장씩</option>
                                <option value="02">앞뒤2장씩</option>
                            </select>
                        </>
                    )
                }
            </td>
        </tr>
    );
}

export default FlyLeaf;