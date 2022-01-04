
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BindingManage from './modules/productMeterial/bindingManage';
import DocuSpecManage from './modules/productMeterial/docuspecManage';
import PageOptionManage from './modules/productMeterial/pageOptionManage';
import PaperManage from './modules/productMeterial/paperManage';
import PostProcessManage from './modules/productMeterial/postProcessManage';
import PriceManage from './modules/productMeterial/priceManage';
import PrintMethodManage from './modules/productMeterial/printMethodManage';
const EuiButton = dynamic(() => import('@elastic/eui/').then(module => module.EuiButton),{ssr:false});
const EuiBasicTable = dynamic(() => import('@elastic/eui/').then(module => module.EuiBasicTable),{ssr:false});
const EuiLink = dynamic(() => import('@elastic/eui/').then(module => module.EuiLink),{ssr:false});
const EuiHealth = dynamic(() => import('@elastic/eui/').then(module => module.EuiHealth),{ssr:false});

const ProductMeterial = () =>
{
    const menubar = ['규격','제본','페이지옵션','후가공','용지','인쇄도수','가격설정'];
    const [menu, setMenu] = useState('규격');

    const selectMenubar = (name) =>
    {
        setMenu(name);
    }

    useEffect(()=>
    {

        console.log(menu);

    },[menu])

    return (
            <div>
                <h4>자재관리</h4>
                <ul>
                    {
                        menubar.map((list,index)=>(
                            <li key={index} value={list} onClick={()=>{selectMenubar(list)}}>
                                    {list}
                            </li>
                        ))
                    }
                </ul>
                <div>
                    {
                        menu==='제본' && (
                            <>
                                <BindingManage/>
                            </>
                        )
                    }
                    {
                        menu==='규격' && (
                            <>
                                <DocuSpecManage/>
                            </>
                        )
                    }
                    {
                        menu==='페이지옵션' && (
                            <>
                                <PageOptionManage/>
                            </>
                        )
                    }
                    {
                        menu==='후가공' && (
                            <>
                                <PostProcessManage/>
                            </>
                        )
                    }
                    {
                        menu==='용지' && (
                            <>
                                <PaperManage/>
                            </>
                        )
                    }
                    {
                        menu==="인쇄도수" && (
                            <>
                                <PrintMethodManage/>
                            </>
                        )
                    }
                    {
                        menu==="가격설정" && (
                            <>
                                <PriceManage/>
                            </>
                        )
                    }
                </div>
            </div>
    );
}
export default ProductMeterial;