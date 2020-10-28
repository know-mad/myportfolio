import React from 'react'
import './Logo.css'
import { animateScroll as scroll } from 'react-scroll'
import { Spring, config } from 'react-spring/renderprops'


function Logo(){

  return(
    <Spring
      from={{marginLeft: '-400px'}}
      to={{marginLeft: '60px'}}
      config={config.wobbly}
      delay={4000}
    >

    {props => <div style={props} className='logo' onClick={() => scroll.scrollToTop()}></div>}

    </Spring>
  )
}

export default Logo
