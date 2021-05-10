import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import './header.css'
import hamburger from '../images/hamburger.svg'
import closedBurger from '../images/closed-burger.svg'


const Header = ({ link1, link2, link3, link4, link5  }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    let toggle = openNav
    setOpenNav(!toggle)
  }




   return (
     <header>
       <div id='nav' style={{minHeight: openNav ? '25em' : '4.5em'}}>
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

           <Link to="/blog/"  style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
             {link4}
           </Link>

           <Link to="/contact/" style={{color: '#000000'}} activeStyle={{color: '#fff'}}>
             {link5}
           </Link>

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
