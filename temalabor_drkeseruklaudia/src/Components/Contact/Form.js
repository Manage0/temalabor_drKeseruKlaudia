import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'

const Form = () => {

    const { t } = useTranslation()

    return (
        <Fade right>
            <form name="contact" method="POST" data-netlify="true" enctype="application/x-www-form-urlencoded">
                <input type="hidden" name="form-name" value="contact" />
                <div id="FormTitle">
                    {t("NeedLawyer")}
                </div>
                <input type="text" name="Teljes nev" placeholder={t("GiveYourName")} />
                <input type="text" name="Telefonszam" placeholder={t("GiveYourPhone")} />
                <input type="email" name="Email" placeholder={t("GiveYourEmail")} />
                <textarea name="Kerdes" placeholder={t("Question")} maxLength="200" rows="8" />
                <button id="button" type="submit" >{t("Send")}</button>
            </form>
        </Fade>
    )
}

export default Form