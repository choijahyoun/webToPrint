import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPaperListSelector } from "../../../../store/admin/product/selector";
import PaperPopup from "../popup/productOption/paper/paperPopup";

const AdminPaperModule = () => {
    const selectPaperList = useSelector(selectPaperListSelector());
    const [isVisiable, setIsVisiable] = useState(false);

    const closeModal = (e) =>
    {
        e.preventDefault();
        setIsVisiable(false);
    }

    const showModal = (e) =>
    {
        e.preventDefault();
        setIsVisiable(true);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>용지</th>
                        <td>

                            {
                                selectPaperList.length > 0 ? (
                                    <select>
                                        {
                                            selectPaperList.map((list,index)=>(
                                                <option key={index} value={list}>
                                                    {list.paperName} {list.paperColor} {list.paperWeight}g
                                                </option>
                                            ))
                                        }
                                    </select>
                                ) : (
                                    <select>
                                        <option>
                                            선택용지없음
                                        </option>
                                    </select>
                                )
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
            <PaperPopup isVisiable={isVisiable} setIsVisiable={setIsVisiable} closeModal={closeModal} showModal={showModal}/>
        </>
    );
}
export default AdminPaperModule;
