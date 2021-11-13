import "./Header.css"
import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { useLang } from "../Contexts/LangContext"
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'


const Header = () => {

    const [lang, setLangHun, setLangDeu] = useLang(useLang);

    const [clicked, setClicked] = useState(false)

    return (
        <nav className="NavbarItems">
                <Link to="/"><img src="Images/Logo.webp" alt="logo" id="logo" /></Link>
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
                                <a className={item.cName} href={item.url}>                                        
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