import React from 'react';
import Link from 'next/link';


const BannerItem = (props) => {
    return (
        <Link href={props.link}>
            <a>
                <img src={props.image}></img>
            </a>
        </Link>
    );
};

export default BannerItem;
