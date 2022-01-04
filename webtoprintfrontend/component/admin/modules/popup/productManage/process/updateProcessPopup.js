import { useDispatch } from "react-redux";
import { updateAdminPostProcess } from "../../../../../../store/admin/product/action";
import dynamic from 'next/dynamic';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});
const UpdatePostProcessPopup = (props) =>
{
    const form ={
        id : "",
        kind : "",
        name : "",
        standardCirculation: "",
        marketPrice :"",
        discountRate : "",
        purchaseUnitPrice : "",
        marginRate : "",
        salesUnitPrice : "",
    }

    const dispatch = useDispatch();
    
    const updatePostProcess = (form) =>
    {
        dispatch(updateAdminPostProcess(form));
    }

    const updateButton = () =>
    {
        form.id = props.updateId;
        form.kind = props.updateKind; 
        form.name = props.updateName;
        form.standardCirculation = props.updateStandardCirculation;
        form.marketPrice = props.updateMarketPrice;
        form.discountRate = props.updateDiscountRate;
        form.purchaseUnitPrice = props.updatePurchaseUnitPrice;
        form.marginRate = props.updateMarginRate;
        form.salesUnitPrice= props.updateSalesUnitPrice;
        updatePostProcess(form);
    }

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }
    return (
        <>
            {
                props.isVisiable && (
                        <EuiModal onClose={(e)=>{props.closeModal(e)}} style={{ maxWidth : '1500px'}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>후가공수정</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>분류</th>
                                        <th>품명</th>
                                        <th>기준부수</th>
                                        <th>기준가격</th>
                                        <th>할인율</th>
                                        <th>매입단가</th>
                                        <th>마진율</th>
                                        <th>매출단가</th>
                                    </tr>
                                    <tr>
                                        <td><EuiFieldText placeholder="분류" value={props.updateKind} onChange={(e)=>{props.setUpdateKind(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="품명" value={props.updateName} onChange={(e)=>{props.setUpdateName(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="기준부수" value={props.updateStandardCirculation} onChange={(e)=>{props.setUpdateStandardCirculation(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="고시가" value={props.updateMarketPrice} onChange={(e)=>{props.setUpdateMarketPrice(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="할인율" value={props.updateDiscountRate} onChange={(e)=>{props.setUpdateDiscountRate(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="매입단가" value={props.updatePurchaseUnitPrice} readOnly={true} /></td>
                                        <td><EuiFieldText placeholder="마진율" value={props.updateMarginRate} onChange={(e)=>{props.setUpdateMarginRate(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="매출단가" value={props.updateSalesUnitPrice} readOnly={true} /></td>
                                        <td><EuiButton onClick={()=>{updateButton()}}>수정</EuiButton></td>
                                    </tr>
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={(e)=>{handleButton(e)}}>확인</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
        </>
    );
}
export default UpdatePostProcessPopup;