import React from 'react'
import './Hero.css'
import profile_img from '../../assets/croppedMeAndJustin.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return(
        <div id='home' className='hero'>
            <img src={profile_img} alt=""/>
            <h1><span>I'm Lucas Gehner,</span> a Computer Science student based in Rolla, MO.</h1>
            <p>add details about me here</p>
            <div className='hero-action'>
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero