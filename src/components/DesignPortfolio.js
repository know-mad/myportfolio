import React, { useEffect } from 'react'
import './DesignPortfolio.css'
import Button from './Button'
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
        <h2>Want to see the websites and apps that I’ve built ?</h2>
        <p>Check out my work</p>

        <Button
        content={<Link to='/portfolio/' style={{color: '#fff'}}>Portfolio</Link>}
        padding={'0.75rem 1.5rem'}
        fontColor={'#0984e3'}
        backgroundColor={'#0984e3'}
        borderColor={'#0984e3'}
        />
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

export default DesignPortfolio
