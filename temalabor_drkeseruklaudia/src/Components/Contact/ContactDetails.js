import './Contact.css'
import { AiOutlineFacebook } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade';


const ContactDetails = () => {

    const { t } = useTranslation()

    return (
        <Fade left>
            <div id="ContactDetails">
                <div id="ContactTitle">
                    {
                        t("ContactTitle")
                    }
                </div>
                <div class="ContactText">
                    <span class="ContactSubTitle">
                        {
                            t("ContactName")
                        }
                    </span>
                </div>
                <div class="ContactText">
                    <span class='ContactSubTitle'>{t("AddressTitle")}</span>
                    {t("Address")}
                </div>
                <div class="ContactText">
                    <span class="ContactSubTitle">Telefon: </span><a href="tel:0699/338-250">0699/338-250</a>; <a href="tel:+3630/683-8822">+3630/683-8822</a>
                </div>
                <div class="ContactText">
                    <span class="ContactSubTitle">{t("EmailTitle")}</span><a href="mailto:dr.keseru.klaudia@gmail.com">dr.keseru.klaudia@gmail.com</a>
                </div>
                <div class="ContactText">
                    <a href="https://www.facebook.com/dr.keseru.klaudia" target="_blank">
                        <AiOutlineFacebook size={50} />
                    </a>
                </div>
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.9045569372133!2d16.586852715406625!3d47.68627349046434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c3da2a72523a5%3A0xea7543b39155bd4f!2zRHIuIEtlc2VyxbEgS2xhdWRpYSDDnGd5dsOpZA!5e0!3m2!1shu!2shu!4v1636821497091!5m2!1shu!2shu" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </Fade>
    )
}

export default ContactDetails