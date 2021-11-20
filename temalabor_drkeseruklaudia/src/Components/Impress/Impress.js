import "./Impress.css"
import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade';

const Impress = () => {

    const { t } = useTranslation()

    return (
        <div id="Impress">
            <Fade bottom>
                {t("Impress")}
            </Fade>
        </div>
    )
}

export default Impress