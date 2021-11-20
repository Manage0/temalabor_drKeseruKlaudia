import './IntroSection.css'
import { useEffect, useState, useContext } from 'react'
import { useLang } from '../../Contexts/LangContext'
import Header from '../../Header/Header'
import { initReactI18next, useTranslation } from "react-i18next";

var rerender=true

const IntroSection =()=>{
    
    const {t}=useTranslation()

    const[rerenderTrigger, setRerender]=useState("true")

    const [lang] = useLang(useLang);

    useEffect(()=>{
        setRerender(!rerender)
    },[])

    return(
        <div class='IntroWrapper'>
            <div class='Intro'>
                {lang ==="hun"?<div>dr. Keserű Klaudia</div>:<div>dr. Klaudia Keserű</div>}
                {lang ==="hun"?<div><div id="citation">"Bona causa triumphat." <br/> - A jó ügy diadalmaskodik.</div></div>:<div id="citation">"Bona causa triumphat." <br/> - Gute Sache triumphiert</div>}
                
            </div>
        </div>
    )

    //blur on he bottom of pic
}

export default IntroSection