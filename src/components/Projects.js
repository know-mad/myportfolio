import React, { Component } from 'react'
import './Projects.css'
import Slide from './Slide'


import trees from '../images/trees.jpg'
import project from '../images/project.svg'






export default class Projects extends Component {

  handleLeftClick = () => {
    console.log('left-click')
  }

  handleRightClick = () => {
    console.log('right-click')
  }


  render(){


    return(
        <div id='projects-section' className='projects-container'>
          <img src={project} alt='skills_icon' width='90' height='90'/>
          <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>

          <div className='slides'>
            <div className='left-toggle'>
              <div onClick={this.handleLeftClick} className='left-arrow'></div>
            </div>
              <Slide />
            <div className='right-toggle'>
              <div onClick={this.handleRightClick} className='right-arrow'></div>
            </div>
          </div>
        </div>
    )
  }
}
