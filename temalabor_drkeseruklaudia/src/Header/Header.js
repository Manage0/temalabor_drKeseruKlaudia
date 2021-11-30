import "./Header.css"
import React, { useEffect, useState } from 'react'
import { MenuItems } from './MenuItems'
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import i18next from "i18next"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';
import { useLang } from "../Contexts/LangContext"


const Header = () => {

    /*js.map törlés */

    const [lang, setLangHun, setLangDeu] = useLang()

    const [clicked, setClicked] = useState(false)
    const [trigger,setTrigger]=useState(false)

    const Click = () => {
        if (window.innerWidth < 1060)
            setClicked(!clicked)
    }

    useEffect(()=>{
        setTimeout(()=>{
     if(i18next.language==="hu"){
         setLangHun()
     }   
     if(i18next.language==="de"){
        setLangDeu()
     }},5)
    })

    return (
        <Fade top cascade>
            <nav className="NavbarItems">
                <img src="Images/Logo.webp" alt="logo" id="logo" />
                <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                    {clicked ? <AiFillCloseCircle /> : <FaBars />}
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item) => {
                        console.log(lang)
                        return (
                            <li>
                                {
                                    item.cName === 'nav-links'
                                        ?
                                        <AnchorLink className={item.cName} href={item.url} onClick={() => Click()}>
                                            {
                                                lang === "hu"
                                                    ?
                                                    <span>{item.title}</span>
                                                    :
                                                    <span>{item.titledeu}</span>
                                            }
                                        </AnchorLink>
                                        :
                                        <div class="lang-div" onClick={()=>setTrigger(!trigger)}>
                                            {
                                                item.title === 'Hun'
                                                    ?
                                                    <img class={item.cName} src="Images/Flags/hunFlag.png" alt="hunBtn" onClick={() => i18next.changeLanguage("hu")} />
                                                    :
                                                    <img className={item.cName} src="Images/Flags/gerFlag.png" alt="gerBtn" onClick={() => i18next.changeLanguage("de")} />
                                            }
                                        </div>
                                }
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </Fade>
    )
}

export default Header