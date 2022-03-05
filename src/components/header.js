import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.css'
import hamburger from '../images/hamburger.svg'
import closedBurger from '../images/closed-burger.svg'


const Header = ({ link1, link2, link3, link4, link5  }) => {
  const [openNav, setOpenNav] = useState(false)
  const [offset, setOffset] = useState(0)

  const logic = () => {
    setOffset((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 168)
  }

  const toggleNav = () => {
    let toggle = openNav
    setOpenNav(!toggle)
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', logic)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logic)
    }
  })

   return (
     <header>
       <div id='nav' style={{minHeight: openNav ? '25em' : '4em'}}>
         <div className='content-container' style={{minHeight: openNav ? '30%' : '100%'}}>
           <div className='logo-side'>
            <div className='logo-side-image'></div>
           </div>
           <div className='links-side'>
             <Link to="/" activeStyle={{color: '#fff'}}>
               {link1}
             </Link>

             <Link to="/services/" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
               {link2}
             </Link>

             <Link to="/projects/" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
               {link3}
             </Link>

             <a href='https://blog.davidvelez.io' rel="noopener noreferrer" target="_blank" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
               {link4}
             </a>

             <Link to="/contact/" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
               {link5}
             </Link>

           <div role='button' tabIndex={0} onClick={toggleNav} className='mobile-menu' style={{backgroundImage: openNav ? `url(${closedBurger})` : `url(${hamburger})`}}></div>
         </div>

         </div>
         <div className='mobile-links' style={{display: openNav ? 'flex' : 'none'}}>
           <Link to="/"  style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
             {link1}
           </Link>

           <Link to="/services/" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
             {link2}
           </Link>

           <Link to="/projects/" style={{color: '#000000'}}  activeStyle={{color: '#fff'}}>
             {link3}
           </Link>

           <a href='https://blog.davidvelez.io' rel="noopener noreferrer" target="_blank" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
             {link4}
           </a>

           <Link to="/contact/" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
             {link5}
           </Link>

         </div>
       </div>
       <div className='scroll-bar'>
         <div className='circle'>
           <div className='outer'>
           <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60px" height="60px">
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#0984e3" />
                <stop offset="100%" stopColor="#F446EC" />
              </linearGradient>
            </defs>
            <circle style={{strokeDashoffset: offset }} cx="30" cy="30" r="27" strokeLinecap="round" />
           </svg>
           <div className='inner'>
            <p style={{fontSize: `0.75rem`, color: `#fff`}}>{Math.floor(offset / 168 * 100)}%</p>
           </div>
           </div>
         </div>
       </div>
     </header>
   )
}

Header.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
}

Header.defaultProps = {
  link1: `home`,
  link2: `services`,
  link3: `projects`,
  link4: `blog`,
  link5: `contact`,
}

export default Header
