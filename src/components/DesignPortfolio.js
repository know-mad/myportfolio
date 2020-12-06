import React, { useEffect } from 'react'
import './DesignPortfolio.css'
import { gsap } from 'gsap'
import { Link } from 'gatsby'

const DesignPortfolio = (props) => {
  const hover1 = React.createRef()
  const hover2 = React.createRef()

  useEffect(() => {
    gsap.to(hover1.current, {marginTop: '20px', duration: 1, repeat: -1, yoyo: true})
    gsap.to(hover2.current, {marginTop: '0px', duration: 1, repeat: -1, yoyo: true})
  }, [hover1, hover2])

  return (
    <div id='design-portfolio-container'>
      <div className='container-top'>
        <p>Want to see the websites and apps that I’ve built ?</p>
        <p>Check out my work</p>

        <Link to='/portfolio/' style={linkStyle}>Portfolio</Link>
      </div>

      <div className='container-bottom'>
        <div id='glow-bar'></div>
          <div className='container-bottom-content'>
            <div ref={hover1} className='container-bottom-image1'></div>
            <div ref={hover2} className='container-bottom-image2'></div>
          </div>
        <div id='glow-bar'></div>
      </div>
    </div>
  )
}

const linkStyle = {
  color: '#fff',
  height: '40px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
  border: '1px solid #0984e3'
}

export default DesignPortfolio
