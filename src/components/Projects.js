import React, { Component } from 'react'
import './Projects.css'
import Card from './Card'
import ProjectCard from './ProjectCard'

import project from '../images/project.svg'
import simon from '../images/simon.jpg'
import barbershop from '../images/barbershop.svg'
import toronto from '../images/toronto.png'
import portfolio from '../images/portfolio.svg'
import ecommerce from '../images/ecommerce.png'

import data from '../content/projects.json'


export default class Projects extends Component {
  constructor(){
    super()

    this.state = {
      id: 1,
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      id: e.target.id
    })
  }

  render(){
    let card = <ProjectCard/>

    if (this.state.id == 1) {
      card = <ProjectCard
      title={'AZ Hair Studio Website'}
      image={barbershop}
      description={data[0].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'REACT'}
      technology4={'Gatsby.js'}
      technology5={'Netlify'}
      />
    } else if (this.state.id == 2) {
      card = <ProjectCard
      title={'Toronto Website'}
      image={toronto}
      description={data[1].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'REACT'}
      technology4={'Gatsby.js'}
      technology5={'Netlify'}
      />
    } else if (this.state.id == 3) {
      card = <ProjectCard
      title={'Simon'}
      image={simon}
      description={data[2].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'REACT'}
      technology4={'Netlify'}
      />
    } else if (this.state.id == 4) {
      card = <ProjectCard
      title={'MERN E-commerce'}
      image={ecommerce}
      description={data[3].description}
      technology1={'MongoDB'}
      technology2={'Express.js'}
      technology3={'REACT'}
      technology4={'Node.js'}
      />
    } else if (this.state.id == 5) {
      card = <ProjectCard
      title={'Portfolio Site'}
      image={portfolio}
      description={data[4].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'REACT'}
      technology4={'Gatsby.js'}
      technology5={'Netlify'}
      />
    }

    return (
        <div id='projects-section' className='projects-container'>

        <div className='projects-details'>
              <div className='project-theater'>
                <div className='laser-horizontal'>
                  <div className='laser-top'></div>
                </div>
                  <div className='project-theater-center'>
                    <div className='laser-vertical'>
                      <div className='laser-left'></div>
                    </div>

                    {card}

                    <div className='laser-vertical'>
                      <div className='laser-right'></div>
                    </div>
                  </div>
                <div className='laser-horizontal'>
                  <div className='laser-bottom'></div>
                </div>
              </div>
            </div>

          <div className='projects'>
            <img src={project} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
            <hr/>
            <p>Some of the recent projects I've worked on</p>
              <Card
                  number={1}
                  click={this.handleClick}
                  border={'1px solid #32ab9c'}
                  color={this.state.id == 1 ? '#2d3436' : '#fff'}
                  defaultBackground={this.state.id == 1 ? '#fff' : '#32ab9c'}
                  height={'40px'}
                  width={'80%'}
                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                  skill='AZ Hair Studio Website' />

                  <Card
                      number={2}
                      click={this.handleClick}
                      border={'1px solid #32ab9c'}
                      color={this.state.id == 2 ? '#2d3436' : '#fff'}
                      defaultBackground={this.state.id == 2 ? '#fff' : '#32ab9c'}
                      height={'40px'}
                      width={'80%'}
                      shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                      skill='Toronto Website' />

                      <Card
                          number={3}
                          click={this.handleClick}
                          border={'1px solid #32ab9c'}
                          color={this.state.id == 3 ? '#2d3436' : '#fff'}
                          defaultBackground={this.state.id == 3 ? '#fff' : '#32ab9c'}
                          height={'40px'}
                          width={'80%'}
                          shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                          skill='Simon' />

                          <Card
                              number={4}
                              click={this.handleClick}
                              border={'1px solid #32ab9c'}
                              color={this.state.id == 4 ? '#2d3436' : '#fff'}
                              defaultBackground={this.state.id == 4 ? '#fff' : '#32ab9c'}
                              height={'40px'}
                              width={'80%'}
                              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                              skill='MERN E-Commerce' />

                              <Card
                                  number={5}
                                  click={this.handleClick}
                                  border={'1px solid #32ab9c'}
                                  color={this.state.id == 5 ? '#2d3436' : '#fff'}
                                  defaultBackground={this.state.id == 5 ? '#fff' : '#32ab9c'}
                                  height={'40px'}
                                  width={'80%'}
                                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                                  skill='Portfolio Site' />
          </div>
        </div>
      )
  }
}
