import React, { useState } from 'react'
import './Projects.css'
import { Link } from 'gatsby'






const Projects = ({backgroundImage, backgroundImage2, content1, content2, toPage1, toPage2}) => {
  const [state, setState] = useState(false)
  const [state2, setState2] = useState(false)

  let handleMouseEnter = () => {
    setState(!state)
  }

  let handleMouseEnter2 = () => {
    setState2(!state2)
  }



  return (
    <div className='projects-container'>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}
        className='project-left'
        style={{backgroundImage: `url(${backgroundImage})`}}
        >
        <div style={{display: state ? 'flex' : 'none'}} className='project-left-content'>
          <div className='project-left-content-top'>
            <p>
              {content1}
            </p>
          </div>
          <div className='project-left-content-bottom'>
            <Link id='page-link' to={toPage1}>More Info</Link>
          </div>
        </div>
      </div>

      <div
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseEnter2}
        className='project-right'
        style={{backgroundImage: `url(${backgroundImage2})`}}
        >
        <div style={{display: state2 ? 'flex' : 'none'}} className='project-right-content'>
        <div className='project-right-content-top'>
          <p>
            {content2}
          </p>
        </div>
        <div className='project-right-content-bottom'>
          <Link id='page-link' to={toPage2}>More Info</Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
