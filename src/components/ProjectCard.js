import React, {useState, useEffect} from 'react'
import './ProjectCard.css'
import trees from '../images/trees.jpg'

const ProjectCard = ({number, title, technology1, technology2, technology3, technology4}) => {


    return (
    <div className='single-project'>
      <div className='single-project-top'>
        
        <div className='project-description-container'>
          <div className='project-title'>
            <h1>{title}</h1>
          </div>
          <div className='technologies-used'>
            <div className='technologies-used-top'>
              <p>Built With</p>
            </div>
            <div className='technologies-used-bottom'>
              <div className='technologies-used-container '>
            <h3>{technology1}</h3>
            <h3>{technology2}</h3>
            <h3>{technology3}</h3>
            <h3>{technology4}</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='single-project-bottom'></div>
    </div>
  )

}


export default ProjectCard
