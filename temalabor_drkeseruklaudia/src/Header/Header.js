import"./Header.css"
import React, { useEffect, useState, useContext } from 'react'
import {MenuItems} from './MenuItems'
import { LangContext, useLang } from "../Contexts/LangContext"
import { HashLink as Link } from "react-router-hash-link"


const Header = (fun)=>{

    //bővítés a többi elemmel

    const [lang, setLangHun, setLangDeu] = useLang(useLang);

    const [clicked, setClicked]= useState(false)

    const ClickSet=()=>{
        setClicked(!clicked)
    }

    const Deu =()=>{
        setLangDeu()
    }
    
    const Hun =()=>{
        setLangHun()
    }

    const [url, setURL]=useState()

    useEffect(()=>{
        if(window.location.href!=url){
            setClicked(false)
            setURL(window.location.href)
        }
    })

    /*

                    <i class="fas fa-gavel" id="gavel"></i>
                {lang==="hun"
                ?
                <span>dr. Keserű Klaudia</span>
                :
                <span>dr. Klaudia Keserű</span>}
    */

    return(
        <nav className="NavbarItems">
            <h1 className="Navbar-logo">
                <Link to="/"><img src="Images/LogoBg2.png" alt="logo" id="logo"/></Link>
            </h1>
            <div className="menu-icon" onClick={ClickSet}>
                <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
            </div>
            <ul className={clicked?'nav-menu active':'nav-menu'}>
                {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            {
                                item.cName==='nav-links'
                                ?
                                <Link className={item.cName} to={item.url}>
                                    {lang==="hun"
                                    ?
                                    <span>{item.title}</span>
                                    :
                                    <span>{item.titledeu}</span>}                
                                </Link>
                                :
                                item.title==='Hun'
                                ?
                                <img class={item.cName} src="Images/Flags/hunFlag.png" alt="hun" onClick={Hun} />
                                :
                                <img className={item.cName} id="ger" src="Images/Flags/gerFlag.png" alt="ger" onClick={Deu}/>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Header