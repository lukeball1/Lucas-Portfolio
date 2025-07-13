import React from 'react'
import './Hero.css'
import profile_img from '../../assets/croppedMeAndJustin.png'

const Hero = () => {
    return(
        <div className='hero'>
            <img src={profile_img} alt=""/>
            <h1><span>I'm Lucas Gehner,</span> a Computer Science student based in Rolla, MO.</h1>
            <p>add details about me here</p>
            <div className='hero-action'>
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero