import React, { Component } from 'react'
import './Projects.css'
import Card from './Card'
import ProjectCard from './ProjectCard'
import { gsap } from 'gsap'

import simon from '../images/simon.jpg'
import barbershop from '../images/barbershop.svg'
import cotrip from '../images/cotrip_pic.png'
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
      title={'Client Website'}
      image={barbershop}
      description={data[0].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'React'}
      technology4={'Gatsby.js'}
      technology5={'Netlify'}
      demoLink={'https://priceless-kilby-97b7f4.netlify.app'}
      githubLink={'https://github.com/know-mad/aziatic_hair_studio'}
      />
    } else if (this.state.id == 2) {
      card = <ProjectCard
      title={'CoTrip App'}
      image={cotrip}
      description={data[1].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'React'}
      technology4={'Python'}
      technology5={'Django'}
      demoLink={'https://www.cotripper.co/'}
      githubLink={'https://github.com/CotripperPlatform/CoTrip'}
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
      demoLink={'https://hungry-feynman-7e3a89.netlify.app/'}
      githubLink={'https://github.com/know-mad/simon-game-REACT'}
      />
    } else if (this.state.id == 4) {
      card = <ProjectCard
      title={'MERN E-commerce'}
      image={ecommerce}
      description={data[3].description}
      technology1={'MongoDB'}
      technology2={'Express.js'}
      technology3={'React'}
      technology4={'Node.js'}
      githubLink={'https://github.com/know-mad/ecommerce'}
      />
    } else if (this.state.id == 5) {
      card = <ProjectCard
      title={'Portfolio Site'}
      image={portfolio}
      description={data[4].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'React'}
      technology4={'Gatsby.js'}
      technology5={'Netlify'}
      githubLink={'https://github.com/know-mad/myportfolio'}
      />
    }

    return (
        <div id='projects-section'>

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
            <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
            <hr/>
            <p>Some of the recent projects I've worked on</p>
              <Card
                  number={1}
                  click={this.handleClick}
                  border={'1px solid #32ab9c'}
                  color={this.state.id == 1 ? '#32ab9c' : '#2d3436'}
                  defaultBackground={this.state.id == 1 ? '#2d3436' : '#32ab9c'}
                  height={'40px'}
                  width={'80%'}
                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                  skill='AZ Hair Studio Website' />

                  <Card
                      number={2}
                      click={this.handleClick}
                      border={'1px solid #32ab9c'}
                      color={this.state.id == 2 ? '#32ab9c' : '#2d3436'}
                      defaultBackground={this.state.id == 2 ? '#2d3436' : '#32ab9c'}
                      height={'40px'}
                      width={'80%'}
                      shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                      skill='CoTrip App' />

                      <Card
                          number={3}
                          click={this.handleClick}
                          border={'1px solid #32ab9c'}
                          color={this.state.id == 3 ? '#32ab9c' : '#2d3436'}
                          defaultBackground={this.state.id == 3 ? '#2d3436' : '#32ab9c'}
                          height={'40px'}
                          width={'80%'}
                          shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                          skill='Simon' />

                          <Card
                              number={4}
                              click={this.handleClick}
                              border={'1px solid #32ab9c'}
                              color={this.state.id == 4 ? '#32ab9c' : '#2d3436'}
                              defaultBackground={this.state.id == 4 ? '#2d3436' : '#32ab9c'}
                              height={'40px'}
                              width={'80%'}
                              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                              skill='MERN E-Commerce' />

                              <Card
                                  number={5}
                                  click={this.handleClick}
                                  border={'1px solid #32ab9c'}
                                  color={this.state.id == 5 ? '#32ab9c' : '#2d3436'}
                                  defaultBackground={this.state.id == 5 ? '#2d3436' : '#32ab9c'}
                                  height={'40px'}
                                  width={'80%'}
                                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                                  skill='Portfolio Site' />
          </div>
        </div>
      )
  }
}
