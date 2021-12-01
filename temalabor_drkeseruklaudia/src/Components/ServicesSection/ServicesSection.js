import './ServicesSection.css'
import { useLang } from '../../Contexts/LangContext'
import { useState } from "react"
import { css, keyframes } from "styled-components/macro"
import { AnimatePresence } from "framer-motion"
import Fade from 'react-reveal'
import { GoLaw, MdFamilyRestroom, GrMoney, BsFillPeopleFill, GiHandcuffs, GiPoliceOfficerHead, GiFamilyHouse, FaFileContract } from 'react-icons/all'

const ServicesSection = () => {

    const [lang] = useLang(useLang)
    const [hiddenP, setHiddenP] = useState(true)
    const [hiddenC, setHiddenC] = useState(true)
    const [hiddenG, setHiddenG] = useState(true)
    const [hiddenT, setHiddenT] = useState(true)
    const [hiddenB, setHiddenB] = useState(true)
    const [hiddenS, setHiddenS] = useState(true)
    const [hiddenI, setHiddenI] = useState(true)
    const [hiddenK, setHiddenK] = useState(true)

    const appear = keyframes`
    0%{
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  `
    return (
        <div id="areasOfExpertise">
            {lang === "hu" ?
                <div class="ServicesHeader">
                    Szakterületeim
                </div> :
                <div class="ServicesHeader">
                    Fachbereiche
                </div>}
            <Fade>
                {lang === "hu" ?
                    <div id="ServicesGrid">
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenP(!hiddenP)}>
                                <GoLaw style={{ marginRight: "10px" }} />{" Polgári jog"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenP && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Peres és peren kívül képviselet
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Tanácsadás a polgári jog teljes területén
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Okiratok szerkesztése és véleményezése magyar, illetve német nyelven
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
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
                                <MdFamilyRestroom style={{ marginRight: "10px" }} />{" Családi jog"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenC && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Peres és peren kívül képviselet
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Tanácsadás a polgári jog teljes területén
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Okiratok szerkesztése és véleményezése magyar, illetve német nyelven
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
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
                                <GrMoney style={{ marginRight: "10px" }} />{" Gazdasági jog"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenG && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Gazdasági társaságok alapítása, alapító okiratok, társasági szerződések módosítása
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Gazdasági társaságok egyesülésének, szétválásának, kiválásának, stb. jogi ügyintézése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Peres és peren kívüli képviselet
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Tanácsadás a gazdasági jog teljes területén
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
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
                                <BsFillPeopleFill style={{ marginRight: "10px" }} />{"Társadalmi szervezetek"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenT && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Társadalmi szervezetek alapítása, okiratok készítése, azok módosítása
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Peres és peren kívüli képviselet
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Közgyűlések levezetése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
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
                                <GiHandcuffs style={{ marginRight: "10px" }} />Büntető jog
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenB && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Képviselet büntető eljárásokban
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Beadványok és okiratok szerkesztése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Tanácsadás a büntető jog teljes területén
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenS(!hiddenS)}>
                                <GiPoliceOfficerHead style={{ marginRight: "10px" }} />Szabálysértési jog
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenS && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Képviselet szabálysértési eljárásokban
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Beadványok és okiratok szerkesztése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Tanácsadás a szabálysértési jog teljes területén
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenI(!hiddenI)}>
                                <GiFamilyHouse style={{ marginRight: "10px" }} />Ingatlan ügyek
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenI && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Peres és peren kívüli képviselet
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Okiratok szerkesztése és véleményezése magyar illetve német nyelven
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Társasház-alapító okiratok készítése, módosítása, társasházak képviselete, szervezeti és 	működési szabályzatok elkészítése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Ingatlanok belterületbe vonásának teljes ügyintézése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Telekalakítással, ráépítéssel kapcsolatos  teljes ügyintézés
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Teljes körű földhivatali ügyintézés
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenK(!hiddenK)}>
                                <FaFileContract style={{ marginRight: "10px" }} />Követelések érvényesítése
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenK && (
                                    <ul
                                        css={css`
                                            animation: ${appear} 0.2s linear;
                                            animation-direction: normal;
                                            animation-iteration-count: 1;
                                            overflow: hidden;
                                        `}
                                    >
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Felszólító levelek elkészítése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Fizetési meghagyásos eljárásban való képviselet, beadványok készítése
                                        </li>
                                        <li
                                            css={css`
                            animation: ${appear} 0.2s linear;
                            `}
                                        >
                                            Végrehajtási eljárásban való képviselet, beadványok készítése
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                    </div> :
                    <div id="ServicesGrid">
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenP(!hiddenP)}>
                                <GoLaw style={{ marginRight: "10px" }} />{" Bürgerliches Recht"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenP && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Beratung im ganzen Gebiet des bürgerlichen Rechts
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Verfassung und Begutachtung von Urkunden in ungarischer und deutscher Sprache
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Erstellung von Eingaben
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenC(!hiddenC)}>
                                <MdFamilyRestroom style={{ marginRight: "10px" }} />{" Familienrecht"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenC && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in gerichtlichen und außergerichtlichen familienrechtlichen Angelegenheiten
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Beratung im ganzen Gebiet des Familienrechts
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Verfassung und Begutachtung von Urkunden in ungarischer und deutscher Sprache
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Erstellung von Eingaben
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenG(!hiddenG)}>
                                <GrMoney style={{ marginRight: "10px" }} />{" Wirtschaftsrecht"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenG && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Gründung von Wirtschaftsgesellschaften, Änderung von Gründungsurkunden und Gesellschaftsverträgen
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Rechtliche Abwicklung von Verschmelzung, Spaltung, Ausgliederung usw. von Wirtschaftsgesellschaften
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Beratung im ganzen Gebiet des Wirtschaftsrechts
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Rechtliche Abwicklung von Liquidation und Schlussrechnung von Wirtschaftsgesellschaften
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenT(!hiddenT)}>
                                <BsFillPeopleFill style={{ marginRight: "10px" }} />{"Gesellschaftliche Organisationen"}
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenT && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Gründung von gesellschaftlichen Organisationen, Erstellung und Änderung von Urkunden
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Leitung von Generalversammlungen
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Mitwirkung beim Erwerb der gemeinnützigen und besonders gemeinnützigen Qualifizierung
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenB(!hiddenB)}>
                                <GiHandcuffs style={{ marginRight: "10px" }} />Strafrecht
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenB && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in Strafverfahren
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Erstellung von Eingaben und Verfassung von Urkunden
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Beratung im ganzen Gebiet des Strafrechts
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenS(!hiddenS)}>
                                <GiPoliceOfficerHead style={{ marginRight: "10px" }} />Ordnungswidrigkeitsrecht
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenS && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in Ordnungswidrigkeitsverfahren
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Erstellung von Eingaben und Verfassung von Urkunden
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Beratung im ganzen Gebiet des Ordnungswidrigkeitsrechts
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenI(!hiddenI)}>
                                <GiFamilyHouse style={{ marginRight: "10px" }} />Immobilienangelegenheiten
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenI && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in gerichtlichen und außergerichtlichen Angelegenheiten
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Verfassung und Begutachtung von Urkunden in ungarischer und deutscher Sprache
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Verfassung und Änderung der Gründungsurkunden von Gemeinschaftshäusern, Vertretung von Gemeinschaftshäusern, Verfassung von Organisations- und Betriebsordnungen
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vollständige Abwicklung von Einbeziehung eines Grundstücks in die Innerortslage
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vollständige Abwicklung von Grundstückausgestaltung und Aufbau
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vollständiges Vorgehen beim Grundbuchamt
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="card">
                            <div class="elementTitle" onClick={() => setHiddenK(!hiddenK)}>
                                <FaFileContract style={{ marginRight: "10px" }} />Geltendmachung von Forderungen
                            </div>
                            <AnimatePresence initial={false}>
                                {!hiddenK && (
                                    <ul
                                        css={css`
                                        animation: ${appear} 0.2s linear;
                                        animation-direction: normal;
                                        animation-iteration-count: 1;
                                        overflow: hidden;
                                    `}
                                    >
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Verfassung von Mahnschreiben
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in Mahnverfahren, Erstellung von Eingaben
                                        </li>
                                        <li
                                            css={css`
                        animation: ${appear} 0.2s linear;
                        `}
                                        >
                                            Vertretung in Vollstreckungsverfahren, Erstellung von Eingaben
                                        </li>
                                    </ul>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>}
            </Fade>
        </div>
    )
}

//https://drtoka.hu/ugyved-sopron/szakteruleteink/

export default ServicesSection