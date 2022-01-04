import { useEffect, useState } from "react";
import SheetPostProccessPart from "./sheetPostProccessPart";

const SheetPostProccess =(props)=>
{
    const [forif,setForif] = useState();
    useEffect(()=>
    {
        if(props.checkedEfoxy===true || props.checkedCoating===true || props.checkedLeaf===true)
        {
            setForif('01');
        }
        else
        {
            setForif('02');
        }
    },[props.checkedEfoxy,props.checkedCoating,props.checkedLeaf])
    return(
        <>  
            {
                forif==='01'&&(
                    <>
                        <th>표지후가공</th>
                        <SheetPostProccessPart kindCoating={props.kindCoating}  kindLeaf={props.kindLeaf}
                        checkedEfoxy={props.checkedEfoxy} checkedCoating={props.checkedCoating}
                        checkedLeaf={props.checkedLeaf}/>
                    </>
                )
                
            }
            
        </>
    );
}

export default SheetPostProccess;