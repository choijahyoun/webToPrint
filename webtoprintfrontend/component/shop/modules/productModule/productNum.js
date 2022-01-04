import { useEffect, useState } from "react";
import { productPageOptionGet } from "../../../../store/product/request";


const ProductNumModule = (props) =>
{
    
    return (
        <table>
            <tbody>
                <tr>
                    <th>수량</th>
                    {
                        props.quantity && props.quantity === '장수' (
                            <td>
                                <input style={{width: "50px"}}/>장
                            </td>
                        )
                    }
                    {
                        props.quantity && props.quantity === '건수/부수'(
                            <td>
                                 <input style={{width: "50px"}}/>건 <input style={{width: "50px"}}/>부
                            </td>
                        )
                    }
                </tr>
            </tbody>
        </table>
    );
}
export default ProductNumModule;