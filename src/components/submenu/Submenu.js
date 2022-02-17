import React,{useState,useRef,useEffect} from 'react'
import "./submenu.css";
import "../../index.css";
import { useGlobalContext } from "../../context";
function Submenu() {
    const {isOpenSubmenu,location,openSubmenu} = useGlobalContext();
    const refListSub = useRef(null)
    useEffect(()=>{
        const submenu = refListSub.current;
        submenu.style.left=`${location}px`;
    },[location])
    return (
        <ul className={`${isOpenSubmenu ? 'list-submenu show':'list-submenu'}`} onMouseOver={openSubmenu} ref={refListSub}>
            <li>
                <a href="/" className='list-submenu-item'>HamBurger</a>
            </li>
            <li>
                <a href="/" className='list-submenu-item'>Gà rán</a>
            </li>
            <li>
                <a href="/" className='list-submenu-item'>Pizza</a>
            </li>
            <li>
                <a href="/" className='list-submenu-item'>Bánh Crepe</a>
            </li>
        </ul>
            
    )
}

export default Submenu
