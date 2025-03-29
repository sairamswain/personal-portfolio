import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile.png" 
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Sairam Swain,</span> Data Analyst, Frontend Developer</h1> 
      <p>I am a Data Analyst from Odisha, India, seeking opportunities 
        to contribute my skills in data analysis and data visualization.
      </p>
      <div className="hero-action">
        <div className="hero-connect"> 
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">
        <a 
    href="/Sairam_Swain_MCA.pdf" 
    download="Sairam_Swain_MCA.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="resume-link"
  >
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
