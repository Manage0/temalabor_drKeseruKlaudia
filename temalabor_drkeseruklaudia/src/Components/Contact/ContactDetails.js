/*ready??? */

import './Contact.css'
import { useLang } from '../../Contexts/LangContext'
import { AiOutlineFacebook } from 'react-icons/ai'


const ContactDetails=()=>{

    const [lang] = useLang(useLang)

    return(
        <div id="ContactDetails">
            <div id="ContactTitle">
                {
                    lang === "hun"
                    ? 
                    "Kapcsolat"
                    :
                    "Kontakt"
                }
            </div>
            <div class="ContactText">
                <span class="ContactSubTitle">
                    {
                        lang === "hun"
                        ?
                        "Dr. Keserű Klaudia egyéni ügyvéd"
                        :
                        "Dr. Keserű Klaudia Rechtsanwältin"
                    }
                </span>
            </div>
                {lang === "hun" ? <div class="ContactText">
                    <span class="ContactSubTitle">Cím: </span>
                    9400 Sopron, Színház utca 21. 1. em.
                </div> :
                    <div class="ContactText">
                        <span class="ContactSubTitle">Adresse: </span>
                        9400 Sopron, Színház Str. 21. Stock 1.
                    </div>}
                <div class="ContactText">
                    <span class="ContactSubTitle">Telefon: </span><tel>0699/338-250; +3630/683-8822</tel>
                </div>
                {lang === "hun" ?
                    <div class="ContactText">
                        <span class="ContactSubTitle">E-mail: </span>dr.keseru.klaudia@gmail.com
                    </div>
                    :
                    <div class="ContactText">
                        <span class="ContactSubTitle">E-mail Adresse: </span>dr.keseru.klaudia@gmail.com
                    </div>}
                <div class="ContactText">
                        <a href="https://www.facebook.com/dr.keseru.klaudia" target="_blank">
                            <AiOutlineFacebook size={50} />
                        </a>
                </div>
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.9045569372133!2d16.586852715406625!3d47.68627349046434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c3da2a72523a5%3A0xea7543b39155bd4f!2zRHIuIEtlc2VyxbEgS2xhdWRpYSDDnGd5dsOpZA!5e0!3m2!1shu!2shu!4v1636821497091!5m2!1shu!2shu" allowfullscreen="" loading="lazy"></iframe>
            </div>
    )
}

export default ContactDetails