import React from 'react'
import './Logo.css'
import { animateScroll as scroll } from 'react-scroll'



function Logo(){

  return(
  <div
  className='logo'
  onClick={() => scroll.scrollToTop()}></div>
  )
}

export default Logo
