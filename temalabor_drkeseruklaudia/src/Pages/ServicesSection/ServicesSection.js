import './ServicesSection.css'
import { useLang } from '../../Contexts/LangContext'
import { useState } from "react"
import { css, keyframes } from "styled-components/macro"
import { AnimatePresence } from "framer-motion"

const ServicesSection = () => {

    const [lang] = useLang(useLang)

    const [hiddenP, setHiddenP] = useState(true)
    const [hiddenC, setHiddenC] = useState(true)
    const [hiddenG, setHiddenG] = useState(true)
    const [hiddenT, setHiddenT] = useState(true)
    const [hiddenB, setHiddenB] = useState(true)

    const appear = keyframes`
    0%{
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  `
    return (
        <div id="Services">
            {lang === "hun" ?
                <div class="ServicesHeader">
                    Szakterületeim
                </div> :
                <div class="ServicesHeader">
                    Fachbereiche
                </div>}
            {lang === "hun" ?
                <div id="ServicesGrid">
                    <div className="card">
                        <div class="elementTitle" onClick={() => setHiddenP(!hiddenP)}>
                            Polgári jog
                        </div>
                        <AnimatePresence initial={false}>
                            {!hiddenP && (
                                <ul
                                    css={css`
                                            animation: ${appear} 1s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                >
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Peres és peren kívül képviselet
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Tanácsadás a polgári jog teljes területén
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Okiratok szerkesztése és véleményezése magyar, illetve német nyelven
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Beadványok készítése
                                    </li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="card">
                        <div class="elementTitle" onClick={() => setHiddenC(!hiddenC)}>
                            Családi jog
                        </div>
                        <AnimatePresence initial={false}>
                            {!hiddenC && (
                                <ul
                                    css={css`
                                            animation: ${appear} 1s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                >
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Peres és peren kívül képviselet
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Tanácsadás a polgári jog teljes területén
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Okiratok szerkesztése és véleményezése magyar, illetve német nyelven
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Beadványok készítése
                                    </li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="card">
                        <div class="elementTitle" onClick={() => setHiddenG(!hiddenG)}>
                            Gazdasági jog
                        </div>
                        <AnimatePresence initial={false}>
                            {!hiddenG && (
                                <ul
                                    css={css`
                                            animation: ${appear} 1s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                >
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Gazdasági társaságok alapítása, alapító okiratok, társasági szerződések módosítása
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Gazdasági társaságok egyesülésének, szétválásának, kiválásának, stb. jogi ügyintézése
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Peres és peren kívüli képviselet
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Tanácsadás a gazdasági jog teljes területén
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Gazdasági társaságok felszámolásának, végelszámolásának jogi ügyintézése
                                    </li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="card">
                        <div class="elementTitle" onClick={() => setHiddenT(!hiddenT)}>
                            Társadalmi szervezetek
                        </div>
                        <AnimatePresence initial={false}>
                            {!hiddenT && (
                                <ul
                                    css={css`
                                            animation: ${appear} 1s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                >
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                Társadalmi szervezetek alapítása, okiratok készítése, azok módosítása
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                        Peres és peren kívüli képviselet
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                Közgyűlések levezetése
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                Közreműködés közhasznú és kiemelten közhasznú minősítés megszerzésében
                                    </li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="card">
                        <div class="elementTitle" onClick={() => setHiddenB(!hiddenB)}>
                            Büntető jog
                        </div>
                        <AnimatePresence initial={false}>
                            {!hiddenB && (
                                <ul
                                    css={css`
                                            animation: ${appear} 1s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                >
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                Képviselet büntető eljárásokban
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                Beadványok és okiratok szerkesztése
                                    </li>
                                    <li
                                        css={css`
                            animation: ${appear} 1s linear;
                            `}
                                    >
                                Tanácsadás a büntető jog teljes területén
                                    </li>
                                </ul>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Szabálysértési jog
                        </div>
                        <ul>
                            <li>
                                Képviselet szabálysértési eljárásokban
                            </li>
                            <li>
                                Beadványok és okiratok szerkesztése
                            </li>
                            <li>
                                Tanácsadás a szabálysértési jog teljes területén
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Ingatlan ügyek
                        </div>
                        <ul>
                            <li>
                                Peres és peren kívüli képviselet
                            </li>
                            <li>
                                Okiratok szerkesztése és véleményezése magyar illetve német nyelven
                            </li>
                            <li>
                                Társasház-alapító okiratok készítése, módosítása, társasházak képviselete, szervezeti és 	működési szabályzatok elkészítése
                            </li>
                            <li>
                                Ingatlanok belterületbe vonásának teljes ügyintézése
                            </li>
                            <li>
                                Telekalakítással, ráépítéssel kapcsolatos  teljes ügyintézés
                            </li>
                            <li>
                                Teljes körű földhivatali ügyintézés
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Követelések érvényesítése
                        </div>
                        <ul>
                            <li>
                                Felszólító levelek elkészítése
                            </li>
                            <li>
                                Fizetési meghagyásos eljárásban való képviselet, beadványok készítése
                            </li>
                            <li>
                                Végrehajtási eljárásban való képviselet, beadványok készítése
                            </li>
                        </ul>
                    </div>
                </div> :
                <div id="ServicesGrid">
                    <div className="card">
                        <div class="elementTitle">
                            Bürgerliches Recht:
                        </div>
                        <ul>
                            <li>
                                Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                            </li>
                            <li>
                                Beratung im ganzen Gebiet des bürgerlichen Rechts
                            </li>
                            <li>
                                Verfassung und Begutachtung von Urkunden in ungarischer und deutscher Sprache
                            </li>
                            <li>
                                Erstellung von Eingaben
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Familienrecht
                        </div>
                        <ul>
                            <li>
                                Vertretung in gerichtlichen und außergerichtlichen familienrechtlichen Angelegenheiten
                            </li>
                            <li>
                                Beratung im ganzen Gebiet des Familienrechts
                            </li>
                            <li>
                                Verfassung und Begutachtung von Urkunden in ungarischer und deutscher Sprache
                            </li>
                            <li>
                                Erstellung von Eingaben
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Wirtschaftsrecht
                        </div>
                        <ul>
                            <li>
                                Gründung von Wirtschaftsgesellschaften, Änderung von Gründungsurkunden und Gesellschaftsverträgen
                            </li>
                            <li>
                                Rechtliche Abwicklung von Verschmelzung, Spaltung, Ausgliederung usw. von Wirtschaftsgesellschaften
                            </li>
                            <li>
                                Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                            </li>
                            <li>
                                Beratung im ganzen Gebiet des Wirtschaftsrechts
                            </li>
                            <li>
                                Rechtliche Abwicklung von Liquidation und Schlussrechnung von Wirtschaftsgesellschaften
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Gesellschaftliche Organisationen:
                        </div>
                        <ul>
                            <li>
                                Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                            </li>
                            <li>
                                Gründung von gesellschaftlichen Organisationen, Erstellung und Änderung von Urkunden
                            </li>
                            <li>
                                Leitung von Generalversammlungen
                            </li>
                            <li>
                                Mitwirkung beim Erwerb der gemeinnützigen und besonders gemeinnützigen Qualifizierung
                            </li>
                        </ul>
                    </div>
                    <div class="card">
                        <div class="elementTitle">
                            Strafrecht:
                        </div>
                        <ul>
                            <li>
                                Vertretung in Strafverfahren
                            </li>
                            <li>
                                Erstellung von Eingaben und Verfassung von Urkunden
                            </li>
                            <li>
                                Beratung im ganzen Gebiet des Strafrechts
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Ordnungswidrigkeitsrecht
                        </div>
                        <ul>
                            <li>
                                Vertretung in Ordnungswidrigkeitsverfahren
                            </li>
                            <li>
                                Erstellung von Eingaben und Verfassung von Urkunden
                            </li>
                            <li>
                                Beratung im ganzen Gebiet des Ordnungswidrigkeitsrechts
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Immobilienangelegenheiten
                        </div>
                        <ul>
                            <li>
                                Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                            </li>
                            <li>
                                Verfassung und Begutachtung von Urkunden in ungarischer und deutscher Sprache
                            </li>
                            <li>
                                Verfassung und Änderung der Gründungsurkunden von Gemeinschaftshäusern, Vertretung von Gemeinschaftshäusern, Verfassung von Organisations- und Betriebsordnungen
                            </li>
                            <li>
                                Vollständige Abwicklung von Einbeziehung eines Grundstücks in die Innerortslage
                            </li>
                            <li>
                                Vollständige Abwicklung von Grundstückausgestaltung und Aufbau
                            </li>
                            <li>
                                Vollständiges Vorgehen beim Grundbuchamt
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Geltendmachung von Forderungen
                        </div>
                        <ul>
                            <li>
                                Verfassung von Mahnschreiben
                            </li>
                            <li>
                                Vertretung in Mahnverfahren, Erstellung von Eingaben
                            </li>
                            <li>
                                Vertretung in Vollstreckungsverfahren, Erstellung von Eingaben
                            </li>
                        </ul>
                    </div>
                </div>}
        </div>
    )
}

//https://drtoka.hu/ugyved-sopron/szakteruleteink/

export default ServicesSection