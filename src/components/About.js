import React, { Component } from 'react'
import './About.css'
import { gsap } from 'gsap'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'




export default class About extends Component {
  constructor(){
    super()

  }

  componentDidMount(){
    gsap.to('#glow-bar', {opacity: 1, duration: 2, repeat: -1, yoyo: true})
  }

  // componentWillUnmount(){
  //   gsap.to('#glow-bar')
  // }



  render(){
    return(
      <div id='about-section' className='about-container'>
          <div className='about-content-card'>
            <div className='about-card'>
                <h1><span style={{color: '#0984e3'}}>About Me</span></h1>
                <hr/>
                <p>Hello! My name is David Velez and I'm a <span style={{color: '#b007a8'}}>full stack software engineer</span> based in the Baltimore-Washington DC metro area specializing in building exceptional applications, <span style={{color: '#32ab9c'}}>clean websites</span>, and everything in between.
                I enjoy creating <span style={{color: '#deac70'}}>software</span> and <span style={{color: '#0984e3'}}>applications</span> that drive <span style={{color: '#deac70'}}>technology</span> and
                streamline tasks, and websites that are pixel-perfect, fast, and <span style={{color: '#b007a8'}}>convert</span> visitors into clients</p>
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
                </div>
              </div>
              <div className='socials-icons-child'></div>
            </div>
          </div>

        </div>
    )
  }
}
