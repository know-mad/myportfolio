import React, { useEffect } from 'react'
import './SingleProject.css'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import Button from '../components/Button'
import { gsap } from 'gsap'
import html from '../images/html-5.svg'
import css from '../images/css3.svg'
import react from '../images/react-2.svg'


const SingleProject = ({
  image,
  alt,
  title,
  description,
   clientInfo,
   projectGoal,
   tech0,
   tech0Name,
   tech1,
   tech1Name,
   tech2,
   tech2Name,
   tech3,
   tech3Name,
   tech4,
   tech4Name,
   buttonContent,
   buttonLink }) => {

  const info1 = React.createRef()
  const info2 = React.createRef()
  const info3 = React.createRef()
  const info4 = React.createRef()
  const info5 = React.createRef()
  const info6 = React.createRef()

  useEffect(() => {
    gsap.fromTo('.bottom-block', {boxShadow: '0px 0px 30px 10px rgba(222, 172, 112, 0)'}, {boxShadow: '0px 0px 30px 10px rgba(222, 172, 112, 0.9)', duration: 4, repeat: -1, yoyo: true})
    gsap.to('.bottom-block', {height: '15%', duration: 1})
    gsap.to('.project-hero-left', {opacity: 1, duration: 3, delay: 1})
    gsap.to('.project-hero-right', {opacity: 1, duration: 3, delay: 2})
    gsap.to(info1.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info2.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info3.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info4.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info5.current, {opacity: 1, duration: 2, delay: 3})
    gsap.to(info6.current, {opacity: 1, duration: 2, delay: 3})
  }, [info1, info2, info3, info4, info5, info6])

  return (
    <div id='single-project-container'>
      <div className='project-hero'>
        <div className='project-hero-left'>
          <h2 style={{margin: '5px'}}>{title}</h2>
          <p style={{marginTop: '5px', marginBottom: '10px', fontSize: '1rem'}}>{description}</p>
          <Button
          link={buttonLink}
          content={buttonContent}
          padding={'0.75rem 1.5rem'}
          fontColor={'#0984e3'}
          backgroundColor={'#0984e3'}
          borderColor={'#0984e3'}
          />

          <Link to={'/portfolio/'} style={linkStyle}>
            Back
          </Link>
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
          <p style={{fontSize: '1rem'}}>{clientInfo}</p>
        </div>
        <div ref={info3} className='project-info'>
          <p style={{fontSize: '1.25rem', color: '#0984e3'}}>The Goal</p>
          <p style={{fontSize: '1rem'}}>{projectGoal}</p>
        </div>
      </div>

      <div className='project-content'>
        <div ref={info4} style={{textAlign: 'center'}} className='project-info'>
          <p style={{marginLeft: '10px', fontSize: '1.25rem'}}>technologies</p>
          <h2 style={{marginLeft: '10px', fontSize: '2.5rem', color: '#0984e3', margin: '0'}}>Used</h2>
        </div>
        <div ref={info5} className='project-info'>
          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${html})`}}></div>
            <div className='tech-info'><p>HTML 5</p></div>
          </div>

          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${css})`}}></div>
            <div className='tech-info'><p>CSS 3</p></div>
          </div>

          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${react})`}}></div>
            <div className='tech-info'><p>React.js</p></div>
          </div>

          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${tech0})`}}></div>
            <div className='tech-info'><p>{tech0Name}</p></div>
          </div>
        </div>

        <div ref={info6} className='project-info'>
          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${tech1})`}}></div>
            <div className='tech-info'><p>{tech1Name}</p></div>
          </div>

          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${tech2})`}}></div>
            <div className='tech-info'><p>{tech2Name}</p></div>
          </div>

          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${tech3})`}}></div>
            <div className='tech-info'><p>{tech3Name}</p></div>
          </div>

          <div className='tech-used'>
            <div className='tech-logo' style={{ backgroundImage: `url(${tech4})`}}></div>
            <div className='tech-info'><p>{tech4Name}</p></div>
          </div>

        </div>
      </div>

    </div>
  )
}

SingleProject.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  clientInfo: PropTypes.string,
  projectGoal: PropTypes.string,
  tech0: PropTypes.string,
  tech0Name: PropTypes.string,
  tech1: PropTypes.string,
  tech1Name: PropTypes.string,
  tech2: PropTypes.string,
  tech2Name: PropTypes.string,
  tech3: PropTypes.string,
  tech3Name: PropTypes.string,
  tech4: PropTypes.string,
  tech4Name: PropTypes.string,
  buttonContent: PropTypes.string,
  buttonLink: PropTypes.string
}

SingleProject.defaultProps = {
  alt: '',
  title: '',
  description: '',
}

const linkStyle = {
  color: '#fff',
  height: '30px',
  width: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
  border: '1px solid #deac70',
  marginTop: '10px'
}

export default SingleProject
