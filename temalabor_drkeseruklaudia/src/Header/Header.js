import "./Header.css"
import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { useLang } from "../Contexts/LangContext"
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'


const Header = () => {

    const [lang, setLangHun, setLangDeu] = useLang(useLang);

    const [clicked, setClicked] = useState(false)

    const Click =()=>{
        console.log(window.innerWidth)
        if(window.innerWidth<1060) 
            setClicked(!clicked)
    }

    return (
        <nav className="NavbarItems">
                <img src="Images/Logo.webp" alt="logo" id="logo" />
            <div className="menu-icon" onClick={()=>setClicked(!clicked)}>
                {clicked ? <AiFillCloseCircle /> : <FaBars />}
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            {
                                item.cName === 'nav-links'
                                ?
                                <a className={item.cName} href={item.url} onClick={()=>Click()}>                                        
                                    {
                                        lang === "hun"
                                        ?
                                        <span>{item.title}</span>
                                        :
                                        <span>{item.titledeu}</span>
                                    }
                                </a>
                                :
                                <div class="lang-div">
                                    {
                                        item.title === 'Hun'
                                        ?
                                        <img class={item.cName} src="Images/Flags/hunFlag.png" alt="hun" onClick={()=>setLangHun()}/>
                                        :
                                        <img className={item.cName} src="Images/Flags/gerFlag.png" alt="ger" onClick={()=>setLangDeu()}/>
                                    }
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Header