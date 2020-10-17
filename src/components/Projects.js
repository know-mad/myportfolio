import React, { Component } from 'react'
import './Projects.css'
import Card from './Card'
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
    if (something goes here) {
      card =   <ProjectCard
        number={1} title={'Kush API'}
        technology1={'Python'}
        technology2={'Flask'}
        technology3={'PostgreSQL'}
        technology4={'PeeWee'}/>
    }

      return (
        <div id='projects-section' className='projects-container'>
          <div className='projects-details'>

            // <ProjectCard
            // number={1} title={'Kush API'}
            // technology1={'Python'}
            // technology2={'Flask'}
            // technology3={'PostgreSQL'}
            // technology4={'PeeWee'}/>
            {card}

          </div>

          <div className='projects'>
            <img src={project} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
            <hr/>
            <p>Some of the recent projects I've worked on</p>
            <Card border={'1px solid #32ab9c'}
                color={'#fff'}
                defaultBackground={'#32ab9c'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Aziatic Hair Studio' />

                <Card border={'1px solid #32ab9c'}
                    color={'#fff'}
                    defaultBackground={'#32ab9c'}
                    height={'50px'}
                    width={'80%'}
                    shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                    skill='Toronto' />

                    <Card border={'1px solid #32ab9c'}
                        color={'#fff'}
                        defaultBackground={'#32ab9c'}
                        height={'50px'}
                        width={'80%'}
                        shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                        skill='Kush API' />

                        <Card border={'1px solid #32ab9c'}
                            color={'#fff'}
                            defaultBackground={'#32ab9c'}
                            height={'50px'}
                            width={'80%'}
                            shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                            skill='MERN E-Commerce' />

                            <Card border={'1px solid #32ab9c'}
                                color={'#fff'}
                                defaultBackground={'#32ab9c'}
                                height={'50px'}
                                width={'80%'}
                                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                                skill='Portfolio' />
          </div>
        </div>
      )
  }
}
