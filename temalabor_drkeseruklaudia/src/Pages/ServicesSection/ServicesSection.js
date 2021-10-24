import './ServicesSection.css'
import { useLang } from '../../Contexts/LangContext'
import { useEffect } from 'react'
import './Services.scss'


const panels = document.querySelectorAll('.info-panel.wrapper');
  
const togglePanel = function(dropdown, panel) {
    dropdown.classList.toggle('open');
    panel.classList.toggle('open');
  };
  

  
    const rotateIcon = function(icon) {
      icon.classList.toggle('rotate');
    };



    function getPanel(){
        console.log("getPanel")
      panels.forEach(function(panel) {
        let panelObj = createPanel(panel);
        panelObj.panel.addEventListener('click', function() {
          panelObj.handle_click_event();
        })
      })
    };

    function createPanel(_panel) {
        console.log("createPanel")
      function Panel() {
        
        this.panel = _panel;
        this.icon = _panel.querySelector('.info-panel.icon');
        this.dropdown = _panel.querySelector('.info-panel.dropdown');
        this.handle_click_event = function() {
          rotateIcon(this.icon)
          togglePanel(this.dropdown, this.panel)
        }
        
        return this;
      };
      return new Panel(_panel)
    };



const ServicesSection = () => {

    const [lang] = useLang(useLang)

    useEffect(() => {
        console.log("useEffect")
        getPanel()
    });

    return (
        <div id="Services">

  
  <ol class="info-panel">

    <li class="info-panel wrapper" data-number="01">
      <h2 class="info-panel heading"><span class="info-panel icon" onClick={()=>getPanel()}></span>Focus on maintaining an effective base into contact.</h2>
      <div class="info-panel dropdown">
        <p>You've got to keep your toes pointed and your heals together.</p>
        <p>If you want to look good while taking an opponent downtown.</p>
      </div>
    </li>

    <li class="info-panel wrapper" data-number="02">
      <h2 class="info-panel heading"><span class="info-panel icon"></span>Emphasis on making primary contact with a Near Shoulder Strike and Punch.</h2>
      <div class="info-panel dropdown">
        <p>You've got to keep your toes pointed and your heals together.</p>
        <p>If you want to look good while taking an opponent downtown.</p>
      </div>
    </li>

    <li class="info-panel wrapper" data-number="03">
      <h2 class="info-panel heading"><span class="info-panel icon"></span>Executing an effective Wrap through contact.</h2>
      <div class="info-panel dropdown">
        <p>You've got to keep your toes pointed and your heals together.</p>
        <p>If you want to look good while taking an opponent downtown.</p>
      </div>
    </li>

  </ol>






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