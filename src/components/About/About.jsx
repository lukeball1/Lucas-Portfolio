import React from 'react'
import './About.css'
import profile_img from '../../assets/senior pic.jpeg'
import theme_img from '../../assets/theme_pattern.svg'

const About = () => {
    return(
        <div id='about' className='about'>
            <div className="about-title">
                <p>INTRODUCTION</p>
                <h1>About Me</h1>
                <img src={theme_img} alt='Theme Image'/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
            
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a Junior at Missouri S&T with a strong foundation in software development. As chair of ACM Web, I lead and collaborate on web-based projects aimed at educating and engaging other students.</p>
                        <p>Outside of ACM, I have worked on a variety of team-oriented projects and educational papers that strengthened my leadership and problem-solving skills. I am passionate about builidng practical software solutions and continuously expanding my technical expertise through both academic and personal projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Next.js</p><hr style={{width:"50%"}}/></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    {/* change here */}
                    <h1>1</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    {/* change here */}
                    <h1>9000+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    {/* change here */}
                    <h1>15+</h1>
                    <p>HAPPY DAYS</p>
                </div>
            </div>
        </div>
    )
}

export default About