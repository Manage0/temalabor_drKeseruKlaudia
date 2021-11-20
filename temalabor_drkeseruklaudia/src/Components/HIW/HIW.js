import './HIW.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { WorkingSteps } from './WorkingSteps';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

const HIW = () => {

    const { t } = useTranslation()

    return (
        <div id="HIW">
            <div id="HIWTitle">
                {t("HowIWork")}
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
                            <h3 className="vertical-timeline-element-title">{i18next.language==="hu"?item.title:item.titleGer}</h3>
                            <p>
                                {i18next.language==="hu"?item.description:item.descriptionGer}
                            </p>
                        </VerticalTimelineElement>)
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default HIW