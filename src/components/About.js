import React from 'react'
import './About.css'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'



const About = () => (
  <div id='about-section' className='about-container'>
      <div className='about-content-card'>
        <div className='about-card'>
            <h1><span style={{color: '#0984e3'}}>About Me</span></h1>
            <hr/>
            <p>I'm a full stack software engineer based in the Baltimore-Washington DC metro area specializing in building exceptional applications, clean websites, and everything in between.
            I enjoy creating software and applications that drive technology and
            streamline tasks, as well as websites that are pixel-perfect, fast, and optimized.</p>
        </div>

        <div className='socials-card'>
          <div className='socials-icons'>
            <div className='socials-icons-top'>
              <h2>Get in <span style={{color: '#32ab9c'}}>touch</span> !</h2>
            </div>

            <div className='socials-icons-bottom'>
              <a target='_blank' rel="noopener noreferrer"
              href='https://www.facebook.com/UndercoverAlien/'><img src={facebook} alt='facebook_icon' width='55' height='55'/></a>
              <a target='_blank' rel="noopener noreferrer"
              href='https://www.instagram.com/_devdave/'><img src={instagram} alt='instagram_icon' width='55' height='55'/></a>
              <a target='_blank' rel="noopener noreferrer"
              href='https://www.linkedin.com/in/david-velez-a16b2492/'><img src={linkedin} alt='linkedin_icon' width='55' height='55'/></a>
              <a target='_blank' rel="noopener noreferrer"
              href='https://twitter.com/_devdave'><img src={twitter} alt='twitter_icon' width='55' height='55'/></a>
              <a target='_blank' rel="noopener noreferrer"
              href='https://github.com/know-mad'><img src={github} alt='github_icon' width='55' height='55'/></a>
            </div>
          </div>
          <div className='socials-icons-child'></div>
        </div>
      </div>

    </div>
)

export default About
