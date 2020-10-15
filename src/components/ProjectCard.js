import React, {useState} from 'react'
import './ProjectCard.css'
import trees from '../images/trees.jpg'

const ProjectCard = () => {




  return (
    <div className='single-project'>
      <div className='single-project-top'>
        <div className='project-number'>
          <h1>1</h1>
        </div>
        <div className='project-description-container'>
          <div className='project-title'>
            <h1>This is the title</h1>
          </div>
          <div className='technologies-used'>
            <div className='technologies-used-top'>
              <p>Built With</p>
            </div>
            <div className='technologies-used-bottom'>
              <p>reac</p>
              <p>react</p>
              <p>react</p>
              <p>react</p>
            </div>
          </div>
        </div>
      </div>
      <div className='single-project-bottom'></div>
    </div>
  )
}


export default ProjectCard
