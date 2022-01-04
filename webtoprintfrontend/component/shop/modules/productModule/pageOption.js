import { useState } from "react";



const PageOptionModule = (props) =>
{
    const [pageType, setPageType] = useState();
    const [pageKind, setPageKind] = useState();
    const [pageNum, setPageNum] = useState();
    const [page, setPage] = useState();
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h5>표지</h5>
                        </td>
                    </tr>
                    <tr>
                        <h5>용지선택</h5>
                        <select value={pageKind} onChange={(e)=>{setPageKind(e.target.value)}}>
                            <option value='고급지'>
                                고급지
                            </option>
                            <option value="일반지">
                                일반지
                            </option>
                        </select>
                        <select value={page} onChange={(e)=>{setPage(e.target.value)}}>
                            <option value="">
                                
                            </option>
                        </select>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default PageOptionModule;