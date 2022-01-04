import { useEffect, useState } from "react";

const PostProcessModule = (props) =>
{
    const [checkProcess, setCheckProcess] = useState(false);
    const [postProcessCheckItem, setPostProcessCheckItem] = useState([]);
    const [postProcessList, setPostProcessList] = useState([]);

    const chkPostPress = (e,name) =>{
        setCheckProcess(e.target.checked);
        if (e.target.checked) {
            const form = {
                name : name,
            }
            setPostProcessCheckItem([...postProcessCheckItem, form ]);
        } else {
            setPostProcessCheckItem(postProcessCheckItem.filter((el) => el.name !== name));
        }
      };

    useEffect(()=>
    {
        console.log(postProcessCheckItem);
    },[postProcessCheckItem])

    useEffect(()=>
    {
        const processName = [];

        for(let i=0; i < props.process.length; i++)
        {
            processName.push(props.process[i].name);
        }
        const nameSet = Array.from(new Set(processName));
        setPostProcessList(nameSet);
    },[props.process])

    useEffect(()=>
    {
        console.log(checkProcess);
    },[checkProcess])

    return (
        <table>
            <tbody>
                <tr>
                    <th>후가공</th>    
                    {
                        postProcessList.map((list,index)=>(
                            <td key={index}>
                                <input type="checkbox" checked={checkProcess} value={checkProcess} onChange={(e)=>chkPostPress(e,list)}/>
                                <span>{list}</span>
                            </td>
                        ))
                    }
                </tr>
            </tbody>
        </table>
    );
}
export default PostProcessModule;