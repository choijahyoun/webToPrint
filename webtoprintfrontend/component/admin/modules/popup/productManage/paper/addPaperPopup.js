import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAdminPaper } from '../../../../../../store/admin/product/action';
const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const AddPaperPopup = (props) =>
{
    const form = 
    {
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
    const [paperName , setPaperName] = useState("");
    const [paperColor, setPaperColor] = useState("");
    const [paperWeight, setPaperWeight] = useState("");
    const [paperSize, setPaperSize] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [series, setSeries] = useState("");
    const [grain, setGrain] = useState("");
    const [marketPrice, setMarketPrice] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);
    const [purchaseUnitPrice,setPurchaseUnitPrice] = useState(0);
    const [marginRate, setMarginRate] = useState(0);
    const [salesUnitPrice, setSalesUnitPrice] = useState(0);
  
    const addPageOption = () =>
    {
        form.paperName = paperName;
        form.paperColor = paperColor;
        form.paperWeight = paperWeight;
        form.paperSize = paperSize;
        form.manufacturer = manufacturer;
        form.series = series;
        form.grain = grain;
        form.marketPrice = Number(marketPrice);
        form.discountRate = Number(discountRate);
        form.purchaseUnitPrice = purchaseUnitPrice;
        form.marginRate = Number(marginRate);
        form.salesUnitPrice = salesUnitPrice;
        dispatch(createAdminPaper(form));
        setPaperName("");
        setPaperColor("");
        setPaperWeight("");
        setPaperSize("");
        setManufacturer("");
        setSeries("");
        setGrain("");
        setMarketPrice(0);
        setDiscountRate(0);
        setPurchaseUnitPrice(0);
        setMarginRate(0);
        setSalesUnitPrice(0);
    }

    const addButton = () =>
    {
        addPageOption();
    }

    const handleButton = (e) =>
    {
        props.closeModal(e)
    }

    useEffect(()=>
    {
        setPurchaseUnitPrice(Math.floor(marketPrice-(marketPrice*(discountRate/100))))
    },[marketPrice,discountRate])

    useEffect(()=>
    {
        setSalesUnitPrice(Math.floor(purchaseUnitPrice+(purchaseUnitPrice*(marginRate/100))))
    },[purchaseUnitPrice,marginRate])
    return (
        <>
            <EuiButton fill onClick={()=>{props.showModal()}} style={{width : "20px"}}>??????</EuiButton>
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
                                        <td><EuiFieldText placeholder="????????????" value={paperName} onChange={(e)=>{setPaperName(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={paperColor} onChange={(e)=>{setPaperColor(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={paperWeight} onChange={(e)=>{setPaperWeight(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={paperSize} onChange={(e)=>{setPaperSize(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={manufacturer} onChange={(e)=>{setManufacturer(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={series} onChange={(e)=>{setSeries(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={grain} onChange={(e)=>{setGrain(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={marketPrice} onChange={(e)=>{setMarketPrice(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="?????????" value={discountRate} onChange={(e)=>{setDiscountRate(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={purchaseUnitPrice} readOnly={true} /></td>
                                        <td><EuiFieldText placeholder="?????????" value={marginRate} onChange={(e)=>{setMarginRate(e.target.value)}}/></td>
                                        <td><EuiFieldText placeholder="????????????" value={salesUnitPrice} readOnly={true} /></td>
                                        <td><EuiButton onClick={()=>{addButton()}}>??????</EuiButton></td>
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
export default AddPaperPopup;