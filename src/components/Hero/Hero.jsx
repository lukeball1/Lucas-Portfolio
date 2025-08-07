import React from 'react'
import './Hero.css'
import profile_img from '../../assets/croppedMeAndJustin.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return(
        <div id='home' className='hero'>
            <img src={profile_img} alt=""/>
            <h1><span>I'm Lucas Gehner,</span> a Computer Science student based in St. Louis, MO.</h1>
            <p>I am a current Junior at the Missouri University of Science and Technology in Rolla, MO, and I'm the current Chair of ACM Web</p>
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