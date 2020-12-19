import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import { gsap } from 'gsap'
import "./layout.css"


import facebook from '../images/facebook.png'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'

const Layout = ({ children }) => {


  useEffect(() => {
    gsap.to('#glow-bar', {opacity: 1, duration: 2, repeat: -1, yoyo: true})
    gsap.to('hr', {width: '50%', duration: 4, repeat: -1, yoyo: true})
  })

  return (
    <>
      <Header />

      <div className='container'>

        <main>{children}</main>


        <footer>
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
            href='https://twitter.com/_devdave'><img src={twitter} alt='twitter_icon' width='55' height='55'/></a>
            <a target='_blank' rel="noopener noreferrer"
            href='https://github.com/know-mad'><img src={github} alt='github_icon' width='55' height='55'/></a>
          </div>
        </footer>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
