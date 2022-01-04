import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminPostProcess, selectAdminPostProcess } from "../../../../../../store/admin/product/action";
import { postProcessSelector } from "../../../../../../store/admin/product/selector";

const ProcessResult = () => {
    const postProcessList = useSelector(postProcessSelector());
    const dispatch = useDispatch();

    const getPostProcess = () => {
        dispatch(getAdminPostProcess());
    }

    useEffect(() => {
        getPostProcess();
    }, [])

    const [checkItem, setCheckItem] = useState([]);

    const handleSingleCheck = (e, id, kind, name) => {
        if (e.target.checked) {
            const form = {
                id: id,
                kind: kind,
                name: name,
            }
            setCheckItem([...checkItem, form]);

        } else {
            setCheckItem(checkItem.filter((el) => el.id !== id));
        }
    };

    const handleAllCheck = (e) => {
        if (e.target.checked) {
            console.log("전체선택");
            const idArray = [];
            paperList.forEach((el) => {
                const form = {
                    id: el.id,
                    paperName: el.paperName,
                    paperColor: el.paperColor,
                    paperWeight: el.paperWeight,
                }
                idArray.push(form);
            });
            setCheckItem(idArray);
        }
        else {
            setCheckItem([])
        }
    }

    useEffect(() => {
        console.log(checkItem)
        dispatch(selectAdminPostProcess(checkItem));
    }, [checkItem])

    useEffect(() => {
        console.log(postProcessList);
    }, [postProcessList])

    return (
        <>
            <tr>
                <th style={{ width: "100px" }}><input type="checkbox" id="checkAll" onChange={(e) => handleAllCheck(e)} checked={checkItem.length === postProcessList.length ? true : false}></input></th>
                <th style={{ width: "100px" }}>순서</th>
                <th style={{ width: "100px" }}>분류</th>
                <th style={{ width: "100px" }}>이름</th>
            </tr>
            {
                postProcessList.map((list, index) => (
                    <tr key={index}>
                        <td>
                            <input type="checkbox" onChange={(e) => handleSingleCheck(e, list.id, list.kind, list.name)} checked={checkItem.some(code => code.id === list.id)} />
                        </td>
                        <td>{index + 1}</td>
                        <td>{list.kind}</td>
                        <td>{list.name}</td>
                    </tr>
                ))
            }
        </>
    );
}
export default ProcessResult;