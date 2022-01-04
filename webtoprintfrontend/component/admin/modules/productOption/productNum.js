import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from "react-redux";
import ProductNumPopup from "../popup/productOption/productnum/productnumpopup";
import { selectProductNumSelector } from "../../../../store/admin/product/selector";

const AdminProductNum = () => {
   
    const selectProductNum = useSelector(selectProductNumSelector());
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

    useEffect(()=>
    {
        console.log(selectProductNum);
    },[selectProductNum])

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>수량</th>
                        {
                            selectProductNum === '장수' && (
                                <td>
                                    <input style={{width: "50px"}}/>장
                                </td>
                                
                            )
                        }
                        {
                            selectProductNum === '건수/부수' && (
                                <td>
                                    <input style={{width: "50px"}}/>건 <input style={{width: "50px"}}/>부
                                </td>
                            )
                        }
                        {
                            selectProductNum === " " && (
                                <td>
                                    선택없음
                                </td>
                            )
                        }
                    </tr>
                </tbody>
            </table>
            <ProductNumPopup isVisiable={isVisiable} setIsVisiable={setIsVisiable} closeModal={closeModal} showModal={showModal}/>
        </>
    );
}
export default AdminProductNum;