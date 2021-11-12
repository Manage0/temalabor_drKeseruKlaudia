import { useLang } from "../../Contexts/LangContext"
import "./ImpSec.css"

const ImpSec=()=>{

    const [lang]=useLang(useLang)

    return(
        lang==="hun"?
        <div id="ImpSec">
            Ezt a honlapot Dr. Keserű Klaudia a Győr-Moson-Sopron Megyei Ügyvédi Kamarában bejegyzett ügyvéd tartja fenn az ügyvédekre vonatkozó jogszabályok és belső szabályzatok szerint, melyek az ügyféljogokra vonatkozó tájékoztatással együtt a www.magyarugyvedikamara.hu honlapon találhatóak.
        </div>:
        <div id="ImpSec">
        Diese Website wird von einem bei der Anwaltskammer des Komitats Győr-Moson-Sopron registrierten Rechtsanwalts gemäß den für die Anwälte maßgebenden Rechtsvorschriften und den inneren Satzungen betrieben, die samt den Hinweisen auf die Rechte der Mandanten auf dieser Webseite zu finden sind.
        </div>
    )
}

export default ImpSec