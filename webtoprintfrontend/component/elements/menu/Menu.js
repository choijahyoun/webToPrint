import React from 'react';
import Link from 'next/link';

import MegaMenu from './MegaMenu';
import MenuDropdown from './MenuDropdown';

const Menu = ({className }) => {
    return(
        <ul className={className}>
            <MegaMenu/>
        </ul>
    );
}



export default Menu;
