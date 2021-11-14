/*ready */

import './HIW.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLang } from '../../Contexts/LangContext'
import { WorkingSteps } from './WorkingSteps';

const HIW = () => {

    const [lang] = useLang(useLang);

    return (
        <div id="HIW">
            <div id="HIWTitle">
                {
                    lang === "hun"
                        ?
                        "Hogyan dolgozom?"
                        :
                        "Wie arbeite ich?"
                }
            </div>
            <VerticalTimeline>
                {WorkingSteps.map((item, index) => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(230, 184, 157)', color: '#000' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(230, 184, 157)' }}
                            iconStyle={{ background: 'rgb(196, 153, 88)', color: '#fff' }}
                            icon={<div class="number">{index+1}</div>}
                        >
                            <h3 className="vertical-timeline-element-title">{lang==="hun"?item.title:item.titleGer}</h3>
                            <p>
                                {lang==="hun"?item.description:item.descriptionGer}
                            </p>
                        </VerticalTimelineElement>)
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default HIW