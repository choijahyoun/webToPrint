import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { postProcessSelector, selectPostProcessListSelector } from "../../../../store/admin/product/selector";
import ProcessPopup from "../popup/productOption/process/processPopup";

const AdminProcessModule = () => {
    const selectPostProcessList = useSelector(selectPostProcessListSelector());
    const [isVisiable, setIsVisiable] = useState(false);
    const [postProcessName, setPostProcess] = useState([]);

    const closeModal = (e) => {
        e.preventDefault();
        setIsVisiable(false);
    }

    const showModal = (e) => {
        e.preventDefault();
        setIsVisiable(true);
    }

    useEffect(() => {

        console.log(selectPostProcessList);
        const setPostProcessName = [];
        for(let i = 0; i < selectPostProcessList.length; i++)
        {
            setPostProcessName.push(selectPostProcessList[i].kind);
            
        }
        const kindSet = Array.from(new Set(setPostProcessName));
        
        setPostProcess(kindSet);
    }, [selectPostProcessList])

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>후가공</th>
                        {
                            postProcessName.map((list,index)=>(
                                <td key={index}>
                                    <input type="checkbox"/>
                                    <span>{list}</span>
                                </td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
            <ProcessPopup closeModal={closeModal} showModal={showModal} isVisiable={isVisiable} setIsVisiable={setIsVisiable} />
        </>
    );
}
export default AdminProcessModule;