import './ServicesSection.css'
import { useLang } from '../../Contexts/LangContext'

const ServicesSection = () => {

    const [lang] = useLang(useLang)

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
                        <div class="elementTitle">
                            Polgári jog
                        </div>
                        <ul >
                            <li>
                                Peres és peren kívül képviselet
                            </li>
                            <li>
                                Tanácsadás a polgári jog teljes területén
                            </li>
                            <li>
                                Okiratok szerkesztése és véleményezése magyar illetve német nyelven
                            </li>
                            <li>
                                Beadványok készítése
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Családi jog
                        </div>
                        <ul>
                            <li>
                                Családjogi ügyekben peres és peren kívüli képviselet
                            </li>
                            <li>
                                Tanácsadás a családi jog teljes területén
                            </li>
                            <li>
                                Okiratok szerkesztése és véleményezése magyar illetve német nyelven
                            </li>
                            <li>
                                Beadványok készítése
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Gazdasági jog
                        </div>
                        <ul>
                            <li>
                                Gazdasági társaságok alapítása, alapító okiratok, társasági szerződések módosítása
                            </li>
                            <li>
                                Gazdasági társaságok egyesülésének, szétválásának, kiválásának, stb. jogi ügyintézése
                            </li>
                            <li>
                                Peres és peren kívüli képviselet
                            </li>
                            <li>
                                Tanácsadás a gazdasági jog teljes területén
                            </li>
                            <li>
                                Gazdasági társaságok felszámolásának, végelszámolásának jogi ügyintézése
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Társadalmi szervezetek
                        </div>
                        <ul>
                            <li>
                                Peres és peren kívüli képviselet
                            </li>
                            <li>
                                Társadalmi szervezetek alapítása, okiratok készítése, azok módosítása
                            </li>
                            <li>
                                Közgyűlések levezetése
                            </li>
                            <li>
                                Közreműködés közhasznú és kiemelten közhasznú minősítés megszerzésében
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div class="elementTitle">
                            Büntető jog
                        </div>
                        <ul>
                            <li>
                                Képviselet büntető eljárásokban
                            </li>
                            <li>
                                Beadványok és okiratok szerkesztése
                            </li>
                            <li>
                                Tanácsadás a büntető jog teljes területén
                            </li>
                        </ul>
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