import { useEffect, useState } from "react";
import Link from 'next/link';

const MenuSecond = (props) =>
{
    const [isTrue , setIsTrue] = useState();
    const [product, setProduct] = useState([]);
    const handleTrueMenuSecond = () =>
    {
        setIsTrue(true);
    }

    const handleFalseMenuSecond = () =>
    {
        setIsTrue(false);
    }

    useEffect(()=>
    {
        setProduct(props.product);

    },[props.product])

    return (
        props.midiumCategory.map((list, index)=>(
            <li key={index} className="active">
                <Link href="/shop/bookmake">
                    <a onMouseOver={handleTrueMenuSecond} onMouseLeave={handleFalseMenuSecond}>{list.name}</a>
                </Link>
                <div className="header-menu-list03 active">
                { 
                    product.map((productList,productIndex)=>(
                        <>
                            <ul className="menu-third" key={productIndex}>
                                <li className="">
                                    <Link href={`/shop/goods/${list.code}/${productList.code}`}>
                                        <a>
                                            {productList.name}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </>
                    ))
                }
                    <div className="menu-banner active">
                        <picture>
                            <img alt="" className="img" data-ll-status="loaded" src="https://d3qehkb69dy9zc.cloudfront.net/file/banner2020/594a331b-eb23-4050-8064-8dfcc948d5b7_1x.png"/>
                        </picture>
                    </div>
                </div>
            </li>
        ))
    );
}

export default MenuSecond;