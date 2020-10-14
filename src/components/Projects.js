import React, { Component } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

import project from '../images/project.svg'
import trees from '../images/trees.jpg'
import cotrip from '../images/cotrip.png'



export default class Projects extends Component {



  render(){

    return(
        <div id='projects-section' className='projects-container'>
          <img src={project} alt='skills_icon' width='90' height='90'/>
          <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
          <p>Select a project below to find out its information</p>

          <div className='projects'>
            <ProjectCard item={1} image={trees} number={1} info={'Kush API'}/>
            <ProjectCard item={2} image={cotrip} number={2} info={'CoTrip Application'}/>
            <ProjectCard item={3} number={3}/>
            <ProjectCard item={4} number={4}/>
            <ProjectCard item={5} number={5}/>
          </div>
        </div>
    )
  }
}
