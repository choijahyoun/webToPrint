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
                        <th rowSpan="1">μΈμλμ</th>
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