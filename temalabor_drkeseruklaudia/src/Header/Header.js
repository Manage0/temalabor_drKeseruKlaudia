import "./Header.css"
import React, { useEffect, useState } from 'react'
import { MenuItems } from './MenuItems'
import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import i18next from "i18next"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';
import { useLang } from "../Contexts/tContext"


const Header = () => {

    const [clicked, setClicked] = useState(false)

    const Click = () => {
        if (window.innerWidth < 1060)
            setClicked(!clicked)
    }


    const hu=()=>{
        sett(!t)
        i18next.changeLanguage("hu")
    }

    const de=()=>{
        sett(!t)
        i18next.changeLanguage("de")
    }

    
    const {t, sett}=useLang()

    const [trigger, settrigger] = useState(false);
    const [archt, setarcht] =useState(!trigger)
  
    useEffect(()=>{
        if(archt!==trigger){
          setarcht(trigger)
          settrigger(!trigger)
        }
  },[t, trigger])

    return (
        <Fade top cascade>
            <nav className="NavbarItems">
                <img src="Images/Logo.webp" alt="logo" id="logo" />
                <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                    {clicked ? <AiFillCloseCircle /> : <FaBars />}
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item) => {
                        return (
                            <li>
                                {
                                    item.cName === 'nav-links' ?
                                    <AnchorLink className={item.cName} href={item.url} onClick={() => Click()}>
                                        {
                                            i18next.language === "hu"?
                                                <span>{item.title}</span>:
                                                <span>{item.titledeu}</span>
                                        }
                                    </AnchorLink>:
                                    <div class="lang-div">
                                        {
                                            item.title === 'Hun'?
                                                <img class={item.cName} src="Images/Flags/hunFlag.png" alt="hunBtn" onClick={() => hu()} />:
                                                <img className={item.cName} src="Images/Flags/gerFlag.png" alt="gerBtn" onClick={() => de()} />
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