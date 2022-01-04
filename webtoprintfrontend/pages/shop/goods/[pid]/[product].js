import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterDefault from "../../../../component/shared/footers/FooterDefault";
import HeaderDefault from "../../../../component/shared/headers/HeaderDefault";
import ProductPage from "../../../../component/shop/productPage";
import { getAdminOneProduct } from "../../../../store/admin/product/action";
import { oneProductSelector } from "../../../../store/admin/product/selector";

const Product = () =>
{
    const form ={
        code : "",
    }
    const router = useRouter();
    const {pid, product} = router.query;
    const apiOneProduct = useSelector(oneProductSelector());
    console.log(router.query);

    const dispatch = useDispatch();

    const getCodeProduct = (code) =>
    {
        dispatch(getAdminOneProduct(code));
    }

    useEffect(()=>
    {
        form.code = product;
        getCodeProduct(form);
    }, [])

    useEffect(()=>
    {
        form.code = product;
        getCodeProduct(form);
    },[product])
    
    return (
        <>
            <HeaderDefault/>
                <ProductPage product={apiOneProduct}/>
            <FooterDefault/>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    };
  }

export default Product;