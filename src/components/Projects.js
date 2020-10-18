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
      id: 0,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      id: e.target.id
    })
    // console.log(this.state.id)
  }



  render(){
      let card = <div style={{flexDirection: 'row', flexWrap: 'wrap'}} className='projects-details'>
        <h1>Work on This!</h1>
      </div>
      if (this.state.id == 1) {
        card = <div className='projects-details'>
        <ProjectCard
        number={2}
        title={'AZ Hair Studio Website'}
        technology1={'Python'}
        technology2={'Flask'}
        technology3={'PostgreSQL'}
        technology4={'PeeWee'}
        />
        </div>
      }
      else if (this.state.id == 2) {
      card = <div className='projects-details'>
      <ProjectCard
      number={2}
      title={'Toronto Website'}
      technology1={'Python'}
      technology2={'Flask'}
      technology3={'PostgreSQL'}
      technology4={'PeeWee'}
      />
      </div>
    } else if (this.state.id == 3) {
        card = <div className='projects-details'>
        <ProjectCard
        number={3}
        title={'Kush API'}
        technology1={'Python'}
        technology2={'Flask'}
        technology3={'PostgreSQL'}
        technology4={'PeeWee'}
        />
        </div>
    } else if (this.state.id == 4) {
      card = <div className='projects-details'>
      <ProjectCard
      number={3}
      title={'MERN E-Commerce Site'}
      technology1={'Python'}
      technology2={'Flask'}
      technology3={'PostgreSQL'}
      technology4={'PeeWee'}
      />
      </div>
    } else if (this.state.id == 5) {
      card = <div className='projects-details'>
      <ProjectCard
      number={3}
      title={'Portfolio Site'}
      technology1={'Python'}
      technology2={'Flask'}
      technology3={'PostgreSQL'}
      technology4={'PeeWee'}
      />
      </div>
    }

      return (
        <div id='projects-section' className='projects-container'>
          {card}

          <div className='projects'>
            <img src={project} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
            <hr/>
            <p>Some of the recent projects I've worked on</p>
            <Card
            number={1}
                click={this.handleClick}
                border={'1px solid #32ab9c'}
                color={'#fff'}
                defaultBackground={'#32ab9c'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='AZ Hair Studio Website' />

                <Card
                number={2}
                    click={this.handleClick}
                    border={'1px solid #32ab9c'}
                    color={'#fff'}
                    defaultBackground={'#32ab9c'}
                    height={'50px'}
                    width={'80%'}
                    shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                    skill='Toronto Website' />

                    <Card
                    number={3}
                        click={this.handleClick}
                        border={'1px solid #32ab9c'}
                        color={'#fff'}
                        defaultBackground={'#32ab9c'}
                        height={'50px'}
                        width={'80%'}
                        shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                        skill='Kush API' />

                        <Card
                        number={4}
                            click={this.handleClick}
                            border={'1px solid #32ab9c'}
                            color={'#fff'}
                            defaultBackground={'#32ab9c'}
                            height={'50px'}
                            width={'80%'}
                            shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                            skill='MERN E-Commerce' />

                            <Card
                            number={5}
                                click={this.handleClick}
                                border={'1px solid #32ab9c'}
                                color={'#fff'}
                                defaultBackground={'#32ab9c'}
                                height={'50px'}
                                width={'80%'}
                                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                                skill='Portfolio Site' />
          </div>
        </div>
      )
  }
}
