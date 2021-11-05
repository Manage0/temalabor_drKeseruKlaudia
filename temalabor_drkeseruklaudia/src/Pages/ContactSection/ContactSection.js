import './ContactSection.css'
import { useState } from 'react'
import axios from 'axios'
import { useLang } from '../../Contexts/LangContext'
import { AiOutlineFacebook } from 'react-icons/ai'

const ContactSection = () => {

    //Google Maps API --> Dynamic Search version
    const [lang] = useLang(useLang)

    const [sendTitle, setSendTitle] = useState("Küldés")

    const [name, setName] = useState()
    const [isMailCorrect, setMailCorrect] = useState(false)

    const NameSet = (enteredName) => {
        setName(enteredName)
    }

    const [email, setEmail] = useState()

    const EmailSet = (enteredEmail) => {
        setEmail(enteredEmail)
    }

    const [Case, setCase] = useState()

    const CaseSet = (enteredCase) => {
        setCase(enteredCase)
    }

    const [phone, setPhone] = useState()

    const PhoneSet = (enteredPhone) => {
        setPhone(enteredPhone)
    }

    const CheckMail = () => {
        if (email && email.includes("@") && email.includes(".") && email.indexOf("@") < email.indexOf("."))
            setMailCorrect(true)
    }

    //https://fast-beyond-73098.herokuapp.com/

    const Send = async () => {
        //CheckMail()
        //if(isMailCorrect){

        if (phone && name && Case) {
            try {
                let dataString = name + " " + phone + " " + Case + " " + email
                setSendTitle("Küldés...")
                await axios.post('https://fast-beyond-73098.herokuapp.com/https://gentle-dusk-91583.herokuapp.com/sendmail', {
                    name: name,
                    phone: phone,
                    Case: Case,
                    email: email
                })
                    .then(response => {
                        setSendTitle(response.data.answer)
                    })
            } catch (Error) {
                setSendTitle("Hiba! Kérem jelezze a jkbbenedek@gmail.com címen!")
            }
        }
        else {
            setSendTitle("Kérem minden mezőt töltsön ki!")
        }
        //} else{
        //  setSendTitle("Érvényes email címet adjon meg!")
        //}

    }

    //clickable phone


    return (
        <div id="Contact">
            <table id="ContactTable">
                <tr>
                    <td id="ContactTD">
                        {lang === "hun" ? <div id="ContactTitle">
                            Kapcsolat
                        </div> :
                            <div id="ContactTitle">Kontakt</div>}
                        <div class="ContactText">
                            {lang === "hun" ? <span class="ContactSubTitle">Dr. Keserű Klaudia egyéni ügyvéd</span> : <span class="ContactSubTitle">Dr. Keserű Klaudia Rechtsanwaltin</span>}
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
                            <span class="ContactSubTitle">Telefon: </span>0699/338-250; +3630/683-8822
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
                            <div id="SocialMedia">
                                <a href="https://www.facebook.com/dr.keseru.klaudia" target="_blank">
                                    <AiOutlineFacebook size={70} />
                                </a>
                            </div>
                        </div>
                    </td>
                    <td id="formTD">
                        <form name="contact" method="post" data-netlify="true" onSubmit="submit">
                            <input type="hidden" name="form-name" value="contact" />
                            <div id="FormTitle">
                                {lang === "hun" ? "Ügyvédre van szüksége?" : "Brauchen Sie einen Anwalt?"}
                            </div>
                            <div>
                                <label>Name</label>
                                <input type="text" class="input" placeholder={lang === "hun" ? "Adja meg a teljes nevét!" : "Bitte geben Sie Ihren vollen Namen ein!"} onChange={(e) => NameSet(e.target.value)} />
                            </div>
                            <div>
                                <label>Phone number</label>
                                <input type="text" class="input" placeholder={lang === "hun" ? "Adja meg a telefonszámát!" : "Bitte geben Sie Ihre Telefonnummer ein!"} onChange={(e) => PhoneSet(e.target.value)} />
                            </div>
                            <div>
                                <label>E-mail</label>
                                <input type="text" class="input" placeholder={lang === "hun" ? "Adja meg az e-mail címét!" : "Bitte geben Sie Ihre E-mail Adresse ein!"} onChange={(e) => EmailSet(e.target.value)} />
                            </div>
                            <textarea class="input" id="description" placeholder={lang === "hun" ? "Írja le röviden kérdését! (max. 200 karakter)" : "Bitte beschreiben Sie Ihre Frage  kurz! (max. 200 Charakter)"} maxLength="200" rows="8" onChange={(e) => CaseSet(e.target.value)} />
                            <div id="btn-pos">
                                <button id="button" type="submit" onClick={Send}>{sendTitle}</button>
                            </div>
                        </form>
                    </td>

                </tr>
            </table>
            <div id="formDivMobile">
                <div id="FormTitle">
                    Ügyvédre van szüksége?
                </div>
                <input type="text" class="input" placeholder="Adja meg a teljes nevét!" onChange={(e) => NameSet(e.target.value)} />
                <br />
                <input type="text" class="input" placeholder="Adja meg a telefonszámát!" onChange={(e) => PhoneSet(e.target.value)} />
                <br />
                <input type="text" class="input" placeholder="Adja meg az e-mail címét!" onChange={(e) => EmailSet(e.target.value)} />
                <br />
                <textarea class="input" id="description" placeholder="Írja le röviden az esetét! (max. 200 karakter)" maxLength="200" rows="8" onChange={(e) => CaseSet(e.target.value)} />
                <div id="btn-pos">
                    <button id="button" onClick={Send}>Küldés</button>
                </div>
            </div>
        </div>
    )
}

export default ContactSection