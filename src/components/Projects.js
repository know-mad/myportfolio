import React, { Component } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

import project from '../images/project.svg'
import trees from '../images/trees.jpg'
import cotrip from '../images/cotrip.png'
import barbershop from '../images/barbershop.svg'
import toronto from '../images/toronto.png'



export default class Projects extends Component {
  constructor(){
    super()

    this.state = {
      item1: true,
      item2: false,
      item3: false,
      item4: false,
      item5: false,
    }
  }

  handleClickOne = () => {
    this.setState({
      item1: true
    })
    console.log('One')
  }

  handleClickTwo = () => {
    console.log('Two')
  }

  handleClickThree = () => {
    console.log('Three')
  }

  handleClickFour = () => {
    console.log('Four')
  }

  handleClickFive = () => {
    console.log('Five')
  }



  render(){

    if (this.state.item1) {
      return (
        <div id='projects-section' className='projects-container'>
          <img src={project} alt='skills_icon' width='90' height='90'/>
          <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
          <p>Select a project below to find out its information</p>

          <div className='single-project'>
            <h1>This fucking works!</h1>
          </div>
        </div>
      )

    } else if (this.state.item2) {

    } else if (this.state.item3) {

    } else if (this.state.item4) {

    } else if (this.state.item5) {

    } else {
      return(
          <div id='projects-section' className='projects-container'>
            <img src={project} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
            <p>Select a project below to find out its information</p>

            <div className='projects'>
              <ProjectCard click={this.handleClickOne} item={1} image={barbershop} number={1} info={'Kush API'}/>
              <ProjectCard click={this.handleClickTwo} item={2} image={cotrip} number={2} info={'CoTrip Application'}/>
              <ProjectCard click={this.handleClickThree} item={3} image={trees} number={3} info={'Kush API'}/>
              <ProjectCard click={this.handleClickFour} item={4} image={toronto} number={4}/>
              <ProjectCard click={this.handleClickFive} item={5} number={5}/>
            </div>
          </div>
      )
    }
  }
}
