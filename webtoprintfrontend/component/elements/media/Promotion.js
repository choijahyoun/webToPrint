import React from 'react';
import Link from 'next/link';


const Promotion = (props) => {
    return (
        <Link href={props.link}>
            <a className="ps-collection">
                <img src={props.image}/>
            </a>
        </Link>
    );
};

export default Promotion;
