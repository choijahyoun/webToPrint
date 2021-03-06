import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dynamic from 'next/dynamic';
import { updateAdminPaper } from "../../../../../../store/admin/product/action";
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});
const UpdatePaperPopup = (props) =>
{
    const form = 
    {
        id : "",
        paperName : "",
        paperColor : "",
        paperWeight : "",
        paperSize : "",
        manufacturer : "",
        series : "",
        grain : "",
        marketPrice : "",
        discountRate : "",
        purchaseUnitPrice : "",
        marginRate : "",
        salesUnitPrice : "",
    }
    const dispatch = useDispatch();
    useEffect(()=>
    {
        props.setUpdatePurchaseUnitPrice(Math.floor(props.updateMarketPrice-(props.updateMarketPrice*(props.updateDiscountRate/100))))
    },[props.updateMarketPrice,props.updateDiscountRate])

    useEffect(()=>
    {
        props.setUpdateSalesUnitPrice(Math.floor(props.updatePurchaseUnitPrice+(props.updatePurchaseUnitPrice*(props.updateMarginRate/100))))
    },[props.updatePurchaseUnitPrice,props.updateMarginRate])

    const updatePaper = (form) =>
    {
        dispatch(updateAdminPaper(form));
    }
    const updateButton = () =>
    {
        form.id = props.updateId;
        form.paperName = props.updatePaperName;
        form.paperColor = props.updatePaperColor;
        form.paperWeight = props.updatePaperWeight;
        form.paperSize = props.updatePaperSize;
        form.manufacturer = props.updateManufacturer;
        form.series = props.updateSeries;
        form.grain = props.updateGrain;
        form.marketPrice = Number(props.updateMarketPrice);
        form.discountRate = Number(props.updateDiscountRate);
        form.purchaseUnitPrice = Number(props.updatePurchaseUnitPrice);
        form.marginRate = Number(props.updateMarginRate);
        form.salesUnitPrice = Number(props.updateSalesUnitPrice);
        updatePaper(form);
        alert("?????????????????????");
    }

    const handleButton = (e) =>
    {
        props.closeModal(e)
    }

    return (
        <>
             {
                props.isVisiable && (
                        <EuiModal onClose={()=>{props.closeModal()}} style={{ maxWidth : '1500px'}}>
                        <EuiModalHeader>
                            <EuiModalHeaderTitle>
                                <h5>????????????</h5>
                            </EuiModalHeaderTitle>
                        </EuiModalHeader>
                        <EuiModalBody>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>????????????</th>
                                        <th>????????????</th>
                                        <th>????????????</th>
                                        <th>?????????</th>
                                        <th>?????????</th>
                                        <th>????????????</th>
                                        <th>?????????</th>
                                        <th>?????????</th>
                                        <th>?????????</th>
                                        <th>????????????</th>
                                        <th>?????????</th>
                                        <th>????????????</th>
                                    </tr>
                                    <tr>
                                        <td><EuiFieldText placeholder="????????????" value={props.updatePaperName} onChange={(e)=>{props.setUpdatePaperName(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={props.updatePaperColor} onChange={(e)=>{props.setUpdatePaperColor(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={props.updatePaperWeight} onChange={(e)=>{props.setUpdatePaperWeight(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={props.updatePaperSize} onChange={(e)=>{props.setUpdatePaperSize(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={props.updateManufacturer} onChange={(e)=>{props.setUpdateManufacturer(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={props.updateSeries} onChange={(e)=>{props.setUpdateSeries(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={props.updateGrain} onChange={(e)=>{props.setUpdateGrain(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={props.updateMarketPrice} onChange={(e)=>{props.setUpdateMarketPrice(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={props.updateDiscountRate} onChange={(e)=>{props.setUpdateDiscountRate(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={props.updatePurchaseUnitPrice} readOnly={true} /></td>
                                        <td><EuiFieldText placeholder="?????????" value={props.updateMarginRate} onChange={(e)=>{props.setUpdateMarginRate(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={props.updateSalesUnitPrice} readOnly={true} /></td>
                                        <td><EuiButton onClick={()=>{updateButton()}}>??????</EuiButton></td>
                                    </tr>
                                </tbody>
                            </table>
                        </EuiModalBody>
                        <EuiModalFooter>
                            <EuiButton fill onClick={()=>{handleButton()}}>??????</EuiButton>
                        </EuiModalFooter>
                    </EuiModal>
                )
            }
        </>
    );
}
export default UpdatePaperPopup;