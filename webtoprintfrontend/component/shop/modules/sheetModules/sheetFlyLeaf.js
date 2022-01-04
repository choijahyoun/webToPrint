import { useEffect, useState } from "react";

const SheetFlyLeaf =(props)=>
{

    const [forif, setForif] =useState("01");

    useEffect(()=>{
        if(props.flyLeafOption==="본문종이와 동일"&&props.mainPaperKind==="일반지")
        {
            setForif("01");
        }
        else if(props.flyLeafOption==="본문종이와 동일"&&props.mainPaperKind==="고급지")
        {
            setForif("02");
        }
        else
        {
            setForif("03");
        }
    },[props.flyLeafOption,props.flyLeafNumber])
    return(
        <>
            {
                forif==='01'&&(
                    <td>{props.mainCommonPaper}</td>
                )
            }
            {
                forif==='02'&&(
                    <td>{props.mainClassyPaper}</td>
                )
            }
            {
                forif==='03'&&(
                    <td>{props.flyLeafOption}</td>
                )
            }
            <td>{props.flyLeafNumber}</td>
        </>
    );

}

export default SheetFlyLeaf;