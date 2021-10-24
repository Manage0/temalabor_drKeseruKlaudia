import './HIW.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLang } from '../../Contexts/LangContext'

const HIW = () => {

    const [lang] = useLang(useLang);

    return (
        <div id="HIW">
            {lang === "hun" ?
                <div id="title">
                    Hogyan dolgozom?
                </div> : <div id="title">
                    Wie arbeite ich?
                </div>}
            {lang === "hun" ?
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">1</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Időpont egyeztetés:</h3>
                        <p>
                            Amennyiben úgy érzi jogi segítségre van szüksége, Gyors, hatékony és megbízható képviseletet keres, úgy Sopron belvárosában található irodámban állok rendelkezésére.
                            Kérdéseivel keressen bizalommal telefonon a +3630/6838822-es telefonszámon vagy egyeztetés céljából foglaljon időpontot akár e-mailen is: (dr.keseru.klaudia@gmail.com).
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">2</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Az ügy áttekintése:</h3>
                        <p>
                            Az esetek sokszínűsége indukálja az ügyvédi tevékenység sokrétűségét. A jogszabályok folyamatosan módosulnak, ezért az adott ügytípus sajátosságaira, jellegére is figyelemmel - az Ön által előadott, rendelkezésre bocsátott információkat alapul véve - kiemelkedő hangsúlyt fektetek a naprakészségre a tényállás tisztázása során.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">3</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Stratégia:</h3>
                        <p>
                            Az ügy lényegi feltérképezését, a tényállási elemek rögzítését követően felvázolom a jogi megoldási lehetőségeket, azok kivitelezési módját, majd kiválasztjuk az Ön által is elfogadott, legmegfelelőbb javaslatot.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">4</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Kivitelezés: </h3>
                        <p>
                            Amennyiben Önnek is megfelel az általam felvázolt megoldás a jogi problémájára, úgy megkezdjük közös munkánkat.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline> :
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">1</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Terminvereinbarung:</h3>
                        <p>
                            Wenn Sie rechtliche Hilfe brauchen und eine schnelle, effektive und zuverlässige Vertretung suchen, steht Ihnen meine Kanzlei in der Innenstadt von Sopron gerne zur Verfügung.
                            Kontaktieren Sie mich telefonisch, wenn Sie Fragen haben oder buchen Sie einen Termin zur persönlichen Beratung sogar elektronisch:
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">2</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Überblick der Sache:</h3>
                        <p>
                            Die Vielfältigkeit der Fälle induziert die Komplexität der Anwaltstätigkeit. Die Rechtsvorschriften ändern sich ständig, daher lege ich einen besonderen Wert auf den neuesten Stand bei der Klärung des Sachverhalts auch unter Berücksichtigung der Eigenart und des Typs der gegebenen Sache – auf Grund der von Ihnen dargelegten, zur Verfügung gestellten Informationen.   </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">3</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Strategie:</h3>
                        <p>
                            Nach Erfassung der Sache und Festhaltung der Sachverhaltselemente kann ich Ihnen aus rechtlicher Hinsicht die Lösungsmöglichkeiten und deren Ausführungsarten schildern, dann wählen wir den besten, auch von Ihnen angenommenen Vorschlag aus. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<div class="number">4</div>}
                    >
                        <h3 className="vertical-timeline-element-title">Ausführung:  </h3>
                        <p>
                            Wenn Sie die von mir geschilderte Lösung für das rechtliche Problem entsprechend finden, beginnen wir mit der gemeinsamen Arbeit. </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>}

        </div>
    )
}

export default HIW

/*

should be at contacts
{
    title:'F',
    url:'#',
    cName:'nav-links'
},
{
    title:'E',
    url:'#',
    cName:'nav-links'
},
{
    title:'S',
    url:'#',
    cName:'nav-links'
}*/