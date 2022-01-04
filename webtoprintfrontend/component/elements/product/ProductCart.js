import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__content">
                {console.log(product)}
                <span>이름:</span>
                <span>{product.title}</span>
            </div>
        </div>
    );
};

export default ProductCart;
