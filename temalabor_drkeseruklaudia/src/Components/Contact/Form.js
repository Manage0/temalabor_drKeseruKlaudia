/*ready??? */

import { useLang } from '../../Contexts/LangContext'

const Form = () => {

    const [lang] = useLang(useLang)

    return (
        <form name="contact" method="POST" data-netlify="true" enctype="application/x-www-form-urlencoded">
            <input type="hidden" name="form-name" value="contact" />
            <div id="FormTitle">
                {lang === "hun" ? "Ügyvédre van szüksége?" : "Brauchen Sie einen Anwalt?"}
            </div>
                <input type="text" name="Teljes nev" placeholder={lang === "hun" ? "Adja meg a teljes nevét!" : "Bitte geben Sie Ihren vollen Namen ein!"} />
                <input type="text" name="Telefonszam" placeholder={lang === "hun" ? "Adja meg a telefonszámát!" : "Bitte geben Sie Ihre Telefonnummer ein!"} />
                <input type="email" name="Email" placeholder={lang === "hun" ? "Adja meg az e-mail címét!" : "Bitte geben Sie Ihre E-mail Adresse ein!"} />
                <textarea name="Kerdes" placeholder={lang === "hun" ? "Írja le röviden kérdését! (max. 200 karakter)" : "Bitte beschreiben Sie Ihre Frage  kurz! (max. 200 Charakter)"} maxLength="200" rows="8" />
                <button id="button" type="submit" >{lang === "hun" ? "Küldés" : "Senden"}</button>
        </form>
    )
}

export default Form