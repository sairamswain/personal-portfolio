import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern } alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a recent graduate and aspiring Data Analyst with hands-on experience in data analysis and visualization. 
                  I have applied Python, SQL, and Power BI to analyze complex datasets and deliver data-driven insights.
                  Additionally, I have frontend development skills, building interactive and user-friendly web applications using HTML, CSS, JavaScript, Reactjs.</p>
                <p>I am passionate about data analysis and visualization, driven by the ability to transform raw data into meaningful insights. 
                  I am fascinated by how data can be used to build interactive dashboards and perform detailed analyses, 
                  helping companies make informed decisions and optimize their products or services. 
                  Additionally, I am skilled in frontend technologies, creating user-friendly and visually appealing web applications.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Excel</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>PYTHON</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>POWER BI</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>REACTJS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>15+</h1>
          <p>PROJECTS COMPLEATED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>6+</h1>
          <p>INTERNSHIPS</p>
        </div>
      </div>
    </div>
  )
}

export default About
