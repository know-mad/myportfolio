import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from '../components/Logo'
import './header.css'

const Header = ({ link1, link2, link3, link4 }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    let toggle = openNav
    setOpenNav(!toggle)
  }




   return (
     <header>
       <div id='nav' style={{height: openNav ? '280px' : '80px'}}>
         <div className='content-container' style={{height: openNav ? '30%' : '100%'}}>
           <div className='logo-side'>
             <Logo />
           </div>
           <div id='links' className='links-side'>
             <Link to="/" activeStyle={{color: '#fff'}}>
               {link1}
             </Link>

             <Link to="/portfolio/" activeStyle={{color: '#fff'}}>
               {link2}
             </Link>

             <Link to="/contact/" activeStyle={{color: '#fff'}}>
               {link3}
             </Link>

             <Link to="/blog/" activeStyle={{color: '#fff'}}>
               {link4}
             </Link>

           <div onClick={toggleNav} className='mobile-menu'>
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

           <Link to="/portfolio/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
             {link2}
           </Link>

           <Link to="/contact/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
             {link3}
           </Link>

           <Link to="/blog/" style={{fontSize: '1.5rem'}} activeStyle={{color: '#fff'}}>
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
  link2: `portfolio`,
  link3: `contact`,
  link4: `blog`,
}

export default Header
