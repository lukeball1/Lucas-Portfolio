import React from 'react'
import './About.css'
import profile_img from '../../assets/senior pic.jpeg'

const About = () => {
    return(
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src="" alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
            
                <div className="about-right">
                    <div className="about-para">
                        <p>yap here 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni explicabo debit jlk;asdjkl;fdsaljk;  MAX WORD LIMIT HERE?</p>
                        <p>yap here 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quidem facilis accusamus!</p>
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