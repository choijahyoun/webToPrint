import { useState } from "react";
import { useSelector } from "react-redux";

const AdminPrintMethodModule = () =>
{

    const [printMethod, setPrintMethod] = useState();
    
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th rowSpan="1">인쇄도수</th>
                        <td>
                            <select>
                                {
                                    
                                }
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default AdminPrintMethodModule;