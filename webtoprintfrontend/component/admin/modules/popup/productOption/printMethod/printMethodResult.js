import { useSelector } from "react-redux";
import { printMethodListSelector } from "../../../../../../store/admin/product/selector";


const PrintMethodResult = () =>
{
    const printMethodList = useSelector(printMethodListSelector());
    
    return (
        printMethodList.map((list,index) => (
            <tr key={index}>
                <td>{list.name}</td>
                <td>{list.plusColor}</td>
                
            </tr>
        ))
    );
}
export default PrintMethodResult;