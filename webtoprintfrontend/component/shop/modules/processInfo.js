import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProcess, getProcessInfoList } from "../../../store/product/action";
import PostProcess from "./postProcess"
import {processInfoListSelector, processListSelector} from "../../../store/product/selector";

const ProcessInfo = (props) =>
{
    const processList = useSelector(processListSelector());
    const processInfoList = useSelector(processInfoListSelector());
    const [companyId, setCompanyId] = useState(1);
    const [postProcessId , setPostProcessId] = useState();
    
    

    const dispatch = useDispatch();

    const getProcessInfo = (id) =>
    {
        dispatch(getProcessInfoList(id))
    }

    const getProcess = () =>
    {
        dispatch(getProcess());
    }

    useEffect(() =>
    {
        getProcessInfo(companyId);
    },[])

    useEffect(()=>
    {
        
    },[processInfoList])

    return (
        <>
             <PostProcess kindCoating={props.kindCoating} kindLeaf={props.kindLeaf} efoxy={props.efoxy}
            setKindCoating={props.setKindCoating} setKindLeaf={props.setKindLeaf} setEfoxy={props.setEfoxy} processInfoList={processInfoList}/>
        </>
    );
}
export default ProcessInfo;