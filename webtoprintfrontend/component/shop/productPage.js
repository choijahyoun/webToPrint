import { Button } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOneProduct } from "../../store/admin/product/action";
import { oneProductSelector, productListSelector } from "../../store/admin/product/selector";
import { addItem } from "../../store/cart/action";
import { orderRequest } from "../../store/shop/action";
import { selectBindingSelector, selectDocuSpecSelector, selectPaperSelector } from "../../store/shop/selector";
import BindingModule from "./modules/productModule/binding";
import DocuSpecModule from "./modules/productModule/docuspec";
import OrderNameModule from "./modules/productModule/orderName";
import PageOptionModule from "./modules/productModule/pageOption";
import PaperModule from "./modules/productModule/paper";
import PostProcessModule from "./modules/productModule/postProcess";
import PrintMethodModule from "./modules/productModule/printMethod";
import ProductNumModule from "./modules/productModule/productNum";

const ProductPage = (props) =>
{
    const form = {
        productName : '',
        orderName : '',
        orderNum : '',
        price : '',
        useSize : '',
        requirement : '',
        isOffset : '',
        docuSpec : {},
        binding : {},
        paper : {},
        postProcess : [],
        pageOptionPaperOrder : [],
        files : [],
    }

    const dispatch = useDispatch();

    const [componentList, setComponenetList] = useState([]);

    const [orderName, setOrderName] = useState();
    const [orderNum, setOrderNum] = useState();
    const [requirement, setRequirement] = useState("");
    const [orderFiles , setOrderFiles] = useState();

    const [supplyPrice, setSupplyPrice] = useState(0);
    const [VAT, setVAT] = useState(0)
    const [price, setPrice] = useState(0);

    const orderBinding = useSelector(selectBindingSelector());
    const orderDocuSpec = useSelector(selectDocuSpecSelector());
    const orderPaper = useSelector(selectPaperSelector());

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop : files => setOrderFiles(files)});

    const files = acceptedFiles.map(file=>(
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ))

    useEffect(()=>
    {
        console.log(orderBinding,orderDocuSpec,orderPaper);
    },[orderBinding,orderDocuSpec,orderPaper])

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
      };

    const handleClickCart = () =>
    {
        form.productName = props.product.name;
        form.orderName = orderName;
        form.isOffset = props.product.isOffset;
        form.price = price;
        form.files = orderFiles;
        form.orderNum = orderNum;
        form.binding = orderBinding;
        form.paper = orderPaper;
        form.docuSpec = orderDocuSpec;
        dispatch(addItem(form));
    }

    const handleClickOrder = () =>
    {
        form.productName = props.product.name;
        form.orderName = orderName;
        form.isOffset = props.product.isOffset;
        form.price = price;
        form.files = orderFiles;
        form.orderNum = orderNum;
        form.binding = orderBinding;
        form.paper = orderPaper;
        form.docuSpec = orderDocuSpec;
        dispatch(orderRequest(form));
    }
    
    useEffect(()=>{
         console.log(props.product.productSort);
        if(props.product.productSort && props.product.productSort.length>0)
        {
            props.product.productSort.sort(function(a,b) {
                return a.sort - b.sort;
            });
            let setProductComponentList = [];
            for(let i = 0; i < props.product.productSort.length; i++)
            {
                const component =""
                switch(props.product.productSort[i].positionName) {
                    case '?????????':
                        component = <OrderNameModule/>;
                        break;
                    case '??????':
                        component = <PaperModule paper={props.product.paper} />;
                        break;
                    case '????????????':
                        component = <PrintMethodModule/>;
                        break;
                    case '??????':
                        component =  <DocuSpecModule docuSpec={props.product.docuspec} />;
                        break;
                    case '??????':
                        component = <BindingModule binding={props.product.binding} />;
                        break;
                    case '?????????':
                        component =  <PostProcessModule process={props.product.process} />;
                        break;
                    case '??????':
                        component =  <ProductNumModule quantity={props.product.quantity} />;
                        break;
                }
                setProductComponentList.push(component)
            }
            setComponenetList(setProductComponentList);
        }
    },[props.product])
   
    const style = useMemo(() => ({
        ...baseStyle,
      }), []);

    return (
        <div className="container">
            <div className="productName">
                <h3>{props.product.name}</h3>
            </div>
            <div className="productPage">
                <div className="productImgTable">
                    <div className="productImgDiv">
                        <img className="productImg" src={props.product.imgLocation} alt="image"/>
                    </div>
                        <table>
                            <tbody>
                                {
                                   componentList.map((list,index) => (
                                       <>
                                            {list}
                                       </>
                                   ))
                                }
                               <table>
                                   <tbody>
                                       <tr>
                                            <th>????????????</th>
                                            <td>
                                                <textarea className='productRequire' placeholder="????????? ??????????????????." value={requirement} onChange={(e)=>setRequirement(e.target.value)}></textarea>
                                            </td>
                                       </tr>
                                   </tbody>
                               </table>
                               <table>
                                   <tbody>
                                      <tr>
                                            <td>
                                                <b>????????????</b>
                                                " : "
                                                <span>{price}</span>
                                                ??? (?????????) : 
                                                <span>{supplyPrice}</span>
                                                ??? (?????????) :
                                                <span>{VAT}</span>
                                                ???
                                            </td>
                                       </tr>
                                   </tbody>
                               </table>
                            </tbody>
                        </table>
                    </div>
                <div>
                    <h4>???????????????</h4>
                    <section >
                        <div {...getRootProps({style})}>
                            <input {...getInputProps()}/>
                            <p>????????? drag & drop??? ????????????</p>
                        </div>
                        <div className="">
                            <aside>
                                <h4>Files</h4>
                                <ul>{files}</ul>
                            </aside>
                        </div>
                    </section>
                </div>
                <div className="productButton">
                    <Button type="ghost" onClick={handleClickCart}>????????????</Button>
                    <Button type="primary" onClick={handleClickOrder}>????????????</Button>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;