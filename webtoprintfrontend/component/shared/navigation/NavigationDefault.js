import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';
import MegaMenu from '../../elements/menu/MegaMenu'
import RedNavigation from './modules/redNavigation';
const NavigationDefault =()=>
{

   const handleFeatureWillUpdate=(e) =>{
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    return (
        <nav className="navigation">
            <div className="ps-container">
               <RedNavigation/>
            </div>
        </nav>
    );
}


export default NavigationDefault;
