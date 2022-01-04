import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuSecond from "./menuSecond";
import Link from 'next/link';

const RedNavigationLitag = (props) =>
{
    const [menuList , setMenuList] = useState();
    
    const handleMenuList03 = () =>
    {
        setMenuList(true);
    }

    const handleMunuListfalse03 = () =>
    {
        setMenuList(false);
    }

    useEffect(()=>
    {
        console.log(props.largeCategory);
        
    },[props.largeCategory])

    useEffect(()=>
    {
        console.log(props.product);

    },[props.product])

    return (
        props.largeCategory.map((list, index)=>(
            <li key={index} onMouseOver={props.handleMouseHover} onMouseLeave={props.handleMouseLeave} className={props.mouseHover ? "active" : ""}>
                    <a>
                        {list.name}
                    </a>
                <div onMouseOver={props.handleMouseHover} onMouseLeave={props.handleMouseLeave} className={props.mouseHover ? "header-menu-list02 active" : "header-menu-list02" }>
                    <ul className="menu-second active">
                        <MenuSecond midiumCategory={props.midiumCategory} handleMouseLeave={handleMenuList03} handleMouseHover={handleMunuListfalse03} mouseHover={menuList}
                         product={props.product}/>
                    </ul>
                </div>
            </li>
        ))
    );
}
export default RedNavigationLitag;