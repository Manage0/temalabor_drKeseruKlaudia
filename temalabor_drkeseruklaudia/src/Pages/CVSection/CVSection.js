import './CVSection.css'
import { useLang } from '../../Contexts/LangContext'

const CVSection = () => {

    //red dress pic
    //i18n a context helyett...
    //netlify functions heroku helyett...
    //ikonkönyvtár facebook (react icons)
    //szakterület kerüljön minden on-pagere
    //anchor scrollto
    //react reveal, betöltési animáció
    const [lang] = useLang(useLang);

    return (
        <div id='CV'>
                <div class='CVHeader'>
            {lang === "hun" ?
                    "Magamról" :"Vorstellung" }
                </div> :
                
            {lang === "hun" ?
                <div class='CVContent'>
                    <table id="table">
                        <tr>
                            <td id="left">
                                <img id="red_dress" src="Images/red_dress.webp" alt="red_dress_img" />
                            </td>
                            <td id="right">
                                2014 májusában végeztem a Szegedi Tudományegyetem Állam -és Jogtudományi Kar, nappali tagozatán jogászként cum laude (4,5) minősítéssel.
                                <br /><br />
                                Egyetemi éveim alatt lehetőségem nyílt arra, hogy a hagyományos jogász képzés mellett átfogó, mélyebb ismeretekre tehessek szert egyes szakágak vonatkozásában, így az általános jogász modul mellett sikeresen teljesítettem a büntető tudományok modult.
                                <br /><br />
                                A jogi pálya iránt érzett elhivatottságom jeléül a Bécsi Jogi Egyetemen megkezdtem a jogi diplomám honosítását is.
                                <br /><br />
                                Ügyvédi szakvizsgáim 2018-ban teljesítettem, s még ebben az évben ügyvédi esküt tettem.
                                <br /><br />
                                Munkáim során elengedhetetlennek tartom az Ügyfelekkel való helyes bánásmód, az empátia tanúsítását.
                                <br /><br />
                                Ügyvédi tevékenységem végzése során fontosnak tartom a gyors és hatékony munkavégzést, a rám bízott feladatok legnagyobb gondossággal történő ellátását és megoldását. Mindezt az ügyek lényegi feltérképezésével, jó kommunikációs, kapcsolatteremtési és problémamegoldó képességemmel biztosítom Ügyfeleim részére.
                            </td>
                        </tr>
                    </table>
                    <img id="red_dress_mobile" src="Images/red_dress.webp" alt="red_dress_img" />
                </div> :
                <div class='CVContent'>
                    <table id="table">
                        <tr>
                            <td id="left">
                                <img id="red_dress" src="Images/red_dress.webp" alt="red_dress_img" />
                            </td>
                            <td id="right">
                                Im Mai 2014 habe ich mein Vollzeit-Jurastudium an der Universität Szeged, Fakultät für Staats- und Rechtswissenschaft, mit cum laude (4,5) abgeschlossen.
                                <br /><br />
                                Während meines Studiums hatte ich die Möglichkeit, mir neben der traditionellen juristischen Ausbildung umfassende, tiefere Kenntnisse in den einzelnen Fachgebieten anzueignen, daher habe ich außer des allgemeinen Jura-Moduls auch das Modul der Strafwissenschaften erfolgreich absolviert.
                                <br /><br />
                                Engagiert für den Rechtsberuf habe ich mich für die Anerkennung meines juristischen Abschlusses an der Universität Wien, Fakultät für Rechtswissenschaften angemeldet.
                                <br /><br />
                                Ich habe die juristische Fachprüfung im Jahre 2018 bestanden, und im selben Jahr den Anwaltseid abgelegt.
                                <br /><br />
                                Während meiner Arbeit sind die richtige Behandlungsweise der Mandanten und die Empathie unerlässlich.
                                <br /><br />
                                Während der Ausübung meiner Anwaltstätigkeit halte ich die schnelle und effektive Arbeit, die Erfüllung und Lösung der mir anvertrauten Aufgaben mit größter Sorgfalt für wichtig. Dies kann ich meinen Mandanten durch die Erfassung der Sache, anhand meiner guten Kommunikations-, Kontakt- und Problemlösungsfähigkeiten gewährleisten.                        </td>
                        </tr>
                    </table>
                    <img id="red_dress_mobile" src="Images/red_dress.webp" alt="red_dress_img" />
                </div>}
        </div>
    )
}

export default CVSection