import React, { Component } from 'react'
import './About.css'
import statue from '../images/statue-of-liberty.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import email from '../images/email.svg'




export default class About extends Component {



  render(){
    return(
      <div id='about-section' className='about-container'>
        <div className='about-card'>
          <h3>About Me:</h3>
          <h2>Home Base: <span style={{color: '#deac70'}}>New York City</span></h2>
            <img src={statue} alt='statue_of_liberty_icon' width='90' height='90'/>
            <hr/>
            <p>I'm a <span style={{color: '#b007a8'}}>full stack software engineer</span> based in NYC
            specializing in building clean <span style={{color: '#32ab9c'}}>websites</span>, exceptional <span style={{color: '#0984e3'}}>applications</span>, and everything in between.
            I enjoy creating <span style={{color: '#deac70'}}>software</span> and <span style={{color: '#0984e3'}}>applications</span> that drive technology and
            streamline tasks. With over 8 years of <span style={{color: '#b007a8'}}>experience</span> in the <span style={{color: '#32ab9c'}}>technology sector</span>,
            I've worked on enterprise scale client/server systems, <span style={{color: '#deac70'}}>optimized networks</span>, and develop <span style={{color: '#32ab9c'}}>software </span>
            that's clean and user <span style={{color: '#0984e3'}}>driven</span></p>
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
              href='https://github.com/know-mad'><img src={github} alt='github_icon' width='55' height='55'/></a>
              <a target='_blank' rel="noopener noreferrer"
              href='https://twitter.com/_devdave'><img src={twitter} alt='twitter_icon' width='55' height='55'/></a>
              <a target='_blank' rel="noopener noreferrer"
              href='mailto:velezdavid6@gmail.com'><img src={email} alt='email_icon' width='55' height='55'/></a>
            </div>
          </div>
          <div className='socials-icons-child'></div>
        </div>
      </div>
    )
  }
}
