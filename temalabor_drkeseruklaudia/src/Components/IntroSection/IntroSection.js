import './IntroSection.css'
import { useEffect, useState, useContext } from 'react'
import Header from '../../Header/Header'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

const IntroSection =()=>{
    
    const {t}=useTranslation()

    return(
        <div class='IntroWrapper'>
            <div class='Intro'>
                {i18next.language ==="hu"?<div>dr. Keserű Klaudia</div>:<div>dr. Klaudia Keserű</div>}
                {i18next.language ==="hu"?<div><div id="citation">"Bona causa triumphat." <br/> - A jó ügy diadalmaskodik.</div></div>:<div id="citation">"Bona causa triumphat." <br/> - Gute Sache triumphiert</div>}
                
            </div>
        </div>
    )

    //blur on he bottom of pic
}

export default IntroSection