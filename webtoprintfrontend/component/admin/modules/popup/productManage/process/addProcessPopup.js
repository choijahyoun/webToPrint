
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAdminPostProcess } from '../../../../../../store/admin/product/action';

const EuiModal = dynamic(() => import('@elastic/eui/').then(module => module.EuiModal),{ssr:false});
const EuiModalBody = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalBody),{ssr:false});
const EuiModalFooter = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalFooter),{ssr:false});
const EuiModalHeader = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeader),{ssr:false});
const EuiModalHeaderTitle = dynamic(() => import('@elastic/eui/').then(module => module.EuiModalHeaderTitle),{ssr:false});
const EuiButton  = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiFieldText  = dynamic(() => import('@elastic/eui/').then(module => module.EuiFieldText),{ssr:false});

const AddPostProcessPopup = (props) => {

    const form ={
        kind : "",
        name : "",
        standardCirculation : "",
        marketPrice: "",
        discountRate: "",
        purchaseUnitPrice: "",
        marginRate: "",
        salesUnitPrice: "",
    }

    const dispatch = useDispatch();

    const [kind, setKind] = useState("");
    const [name, setName] = useState("");
    const [standardCirculation, setStandardCirculation] = useState("");
    const [marketPrice, setMarketPrice] = useState(0);
    const [discountRate, setDiscountRate] = useState(0);
    const [purchaseUnitPrice,setPurchaseUnitPrice] = useState(0);
    const [marginRate, setMarginRate] = useState(0);
    const [salesUnitPrice, setSalesUnitPrice] = useState(0);

    const createPostProcess = (form) =>
    {
        dispatch(createAdminPostProcess(form));
    }

    const addButton = () =>
    {
        form.kind = kind;
        form.name = name;
        form.standardCirculation = standardCirculation;
        form.marketPrice = Number(marketPrice);
        form.discountRate = Number(discountRate);
        form.purchaseUnitPrice = Number(purchaseUnitPrice);
        form.marginRate = Number(marginRate);
        form.salesUnitPrice = Number(salesUnitPrice);
        console.log(form);
        createPostProcess(form);
        setKind("");
        setName("");
        setStandardCirculation("");
        setMarketPrice(0);
        setDiscountRate(0);
        setPurchaseUnitPrice(0);
        setMarginRate(0);
        setSalesUnitPrice(0);
    }

    useEffect(()=>
    {
        setPurchaseUnitPrice(Math.floor(marketPrice-(marketPrice*(discountRate/100))))
    },[marketPrice,discountRate])

    useEffect(()=>
    {
        setSalesUnitPrice(Math.floor(purchaseUnitPrice+(purchaseUnitPrice*(marginRate/100))))
    },[purchaseUnitPrice,marginRate])

    const handleButton = (e) =>
    {
        props.closeModal(e);
    }

    return (
        <>
        <EuiButton fill onClick={()=>{props.showModal()}} style={{width : "20px"}}>??????</EuiButton>
        {
            props.isVisiable && (
                    <EuiModal onClose={()=>{props.closeModal()}} style={{ maxWidth : '1500px'}}>
                    <EuiModalHeader>
                        <EuiModalHeaderTitle>
                            <h5>???????????????</h5>
                        </EuiModalHeaderTitle>
                    </EuiModalHeader>
                    <EuiModalBody>
                        <table>
                            <tbody>
                                <tr>
                                    <th>??????</th>
                                    <th>??????</th>
                                    <th>????????????</th>
                                    <th>????????????</th>
                                    <th>?????????</th>
                                    <th>????????????</th>
                                    <th>?????????</th>
                                    <th>????????????</th>
                                </tr>
                                <tr>
                                    <td><EuiFieldText placeholder="??????" value={kind} onChange={(e)=>{setKind(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="??????" value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="????????????" value={standardCirculation} onChange={(e)=>{setStandardCirculation(e.target.value)}}/></td>
                                    <td><EuiFieldText placeholder="????????????" value={marketPrice} onChange={(e)=>{setMarketPrice(e.target.value)}}/></td>
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
                        <EuiButton fill onClick={(e)=>{handleButton(e)}}>??????</EuiButton>
                    </EuiModalFooter>
                </EuiModal>
            )
        }
    </>
    );
}
export default AddPostProcessPopup;