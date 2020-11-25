import React, { useState } from 'react'
import './Projects.css'
import PropTypes from "prop-types"
import { Link } from "gatsby"



const Projects = ({ image1, image2, content1, content2, info1, info2 }) => {
  const [style1, setStyle1] = useState(false)
  const [style2, setStyle2] = useState(false)

  const toggleStyle1 = () => {
    let newStyle1 = style1
    setStyle1(!newStyle1)
  }

  const toggleStyle2 = () => {
    let newStyle2 = style2
    setStyle2(!newStyle2)
  }


  return (
    <div id='projects-section'>
      <div className='projects-left'>
        <div className='project-title'>
          <p>{info1}</p>
        </div>
        <div
        onMouseOver={toggleStyle1}
        onMouseOut={toggleStyle1}
        style={{backgroundImage: `url(${image1})`, boxShadow: style1 ? '0px 0px 30px 10px rgba(222, 172, 112, 0.9)' : 'none'}}
        className='projects-left-inner'>
          <div style={{display: style1 ? 'flex' : 'none'}} className='project-left-info'>
            {content1}
            <Link to="/" style={{color: '#deac70', fontSize: '1.5rem', marginTop: '10px'}}>
              More Info
            </Link>
          </div>
        </div>

      </div>
      <div className='projects-right'>
      <div className='project-title'>
        <p>{info2}</p>
      </div>
        <div
        onMouseOver={toggleStyle2}
        onMouseOut={toggleStyle2}
        style={{backgroundImage: `url(${image2})`, boxShadow: style2 ? '0px 0px 30px 10px rgba(222, 172, 112, 0.9)' : 'none'}}
        className='projects-right-inner'>
          <div style={{display: style2 ? 'flex' : 'none'}} className='project-right-info'>
            {content2}
            <Link to="/" style={{color: '#deac70', fontSize: '1.5rem', marginTop: '10px'}}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Projects.propTypes ={
  image1: PropTypes.string,
  image2: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  info1: PropTypes.string,
  info2: PropTypes.string
}

export default Projects
