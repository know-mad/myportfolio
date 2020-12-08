import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from '../components/Logo'
import './header.css'
import hamburger from '../images/hamburger.svg'
import closedBurger from '../images/closed-burger.svg'

const Header = ({ link1, link2, link3, link4 }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    let toggle = openNav
    setOpenNav(!toggle)
  }




   return (
     <header>
       <div id='nav' style={{minHeight: openNav ? '280px' : '80px'}}>
         <div className='content-container' style={{minHeight: openNav ? '30%' : '100%'}}>
           <div className='logo-side'>
             <Logo />
           </div>
           <div id='links' className='links-side'>
             <Link to="/" activeStyle={{color: '#fff'}}>
               {link1}
             </Link>

             <Link to="/info/" activeStyle={{color: '#fff'}}>
               {link2}
             </Link>

             <Link to="/portfolio/" activeStyle={{color: '#fff'}}>
               {link3}
             </Link>

             <Link to="/contact/" activeStyle={{color: '#fff'}}>
               {link4}
             </Link>

           <div onClick={toggleNav} className='mobile-menu' style={{backgroundImage: openNav ? `url(${closedBurger})` : `url(${hamburger})`}}>
             <div className='bar'></div>
             <div className='bar'></div>
             <div className='bar'></div>
           </div>
         </div>

         </div>
         <div className='mobile-links' style={{display: openNav ? 'flex' : 'none'}}>
           <Link to="/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
             {link1}
           </Link>

           <Link to="/info/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
             {link2}
           </Link>

           <Link to="/portfolio/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
             {link3}
           </Link>

           <Link to="/contact/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
             {link4}
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
}

Header.defaultProps = {
  link1: `home`,
  link2: `info`,
  link3: `portfolio`,
  link4: `contact`,
}

export default Header
