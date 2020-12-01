import React, { useEffect } from 'react'
import './SingleProject.css'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import Button from '../components/Button'
import { gsap } from 'gsap'


const SingleProject = ({ image, alt, title, description }) => {
  const info1 = React.createRef()
  const info2 = React.createRef()
  const info3 = React.createRef()

  useEffect(() => {
    gsap.fromTo('.bottom-block', {boxShadow: '0px 0px 30px 10px rgba(222, 172, 112, 0)'}, {boxShadow: '0px 0px 30px 10px rgba(222, 172, 112, 0.9)', duration: 4, repeat: -1, yoyo: true})
    gsap.to('.bottom-block', {height: '15%', duration: 1})
    gsap.to('.project-hero-left', {opacity: 1, duration: 3, delay: 1})
    gsap.to('.project-hero-right', {opacity: 1, duration: 3, delay: 2})
    gsap.to(info1.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info2.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info3.current, {opacity: 1, duration: 2, delay: 3})
  }, [info1, info2, info3])

  return (
    <div id='single-project-container'>
      <div className='project-hero'>
        <div className='project-hero-left'>
          <h2 style={{margin: '5px'}}>{title}</h2>
          <p style={{marginTop: '5px', marginBottom: '10px', fontSize: '1rem'}}>{description}</p>
          <Button
          content={<Link to='/portfolio/' style={{color: '#fff'}}>Visit Website</Link>}
          padding={'0.75rem 1.5rem'}
          fontColor={'#0984e3'}
          backgroundColor={'#0984e3'}
          borderColor={'#0984e3'}
          />
        </div>

        <div className='project-hero-right'>
          <div className='project-image'>
            <img style={{height: '100%', width: '100%'}} src={image} alt={alt} />
          </div>
        </div>

        <div className='bottom-block'></div>
      </div>
      <div className='project-content'>
        <div ref={info1}  style={{textAlign: 'center'}} className='project-info'>
          <p style={{marginLeft: '10px', fontSize: '1.25rem'}}>project</p>
          <h2 style={{marginLeft: '10px', fontSize: '2.5rem', color: '#0984e3', margin: '0'}}>Information</h2>
        </div>
        <div ref={info2} className='project-info'>
          <p style={{fontSize: '1.25rem', color: '#0984e3'}}>The Client</p>
          <p style={{fontSize: '1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        </div>
        <div ref={info3} className='project-info'>
          <p style={{fontSize: '1.25rem', color: '#0984e3'}}>The Goal</p>
          <p style={{fontSize: '1rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        </div>
      </div>

      <div className='tech-used'>

      </div>

    </div>
  )
}

SingleProject.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

SingleProject.defaultProps = {
  alt: '',
  title: '',
  description: ''
}

export default SingleProject
