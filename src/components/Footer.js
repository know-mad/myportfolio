import React, { Component } from 'react'
import './Footer.css'

import facebook from '../images/facebook.png'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'




export default class Footer extends Component {



  render(){
    return(
      <div className='footer'>
            <p>Designed & Built by David Velez</p>
            <p>© V-Technologies 2020</p>
        <div className='footer-social-icons'>
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
    )
  }
}
