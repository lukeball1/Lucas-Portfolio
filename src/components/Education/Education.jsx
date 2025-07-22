import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
import hsLogo from '../../assets/hwhsLogo.png'
import mstLogo from '../../assets/mstLogo.png'
import theme_img from '../../assets/theme_pattern.svg'


const Education = () => {
    return (
        <div className='education'>
            <div className="education-title">   
                <p>WHAT I'VE STUDIED SO FAR</p>
                <h1>Education</h1>
                <img src={theme_img} alt='Theme Image'/>
            </div>
            
            <VerticalTimeline>
                <VerticalTimelineElement
                    contentStyle={{backgroundColor: "#181D36"}}
                    date={"2023 - Present"}
                    icon={
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            <img src={mstLogo} alt="High school logo" style={{width: '80%', height: '80%', objectFit: 'contain'}}/>
                        </div>
                    }
                    iconStyle={{background: '#fff', color: '#fff'}}
                    >
                    <div className="education-section">
                        <h1>Computer Science (BS)</h1>
                        <p>Missouri University of Science and Technology, Rolla, MO</p>
                        <ul>
                            <li>GPA: 3.9/4.0</li>
                            <li>Kummer Vanuard Scholar</li>
                            <li>Honors Academy Member</li>
                            <li>ACM Web Chair</li>
                        </ul>
                    </div>
                    
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{backgroundColor: "#181D36"}}
                    date={"2019 - 2023"}
                    icon={
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                            <img src={hsLogo} alt="High school logo" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                        </div>
                    }
                    iconStyle={{background: '#fff', color: '#fff'}}
                    >
                    <div className="education-section">
                        <h1>High school</h1>
                        <p>Hazelwood West High School, Hazelwood, MO</p>
                        <ul>
                            <li>GPA: 4.3/4.0</li>
                            <li>Summa Cum Laude</li>
                            <li>150+ Tutoring Hours</li>
                        </ul>
                    </div>
                    
                </VerticalTimelineElement>
                
            </VerticalTimeline>

            <div className="education-Section">
                
            </div>
        </div>
    )
}

export default Education 