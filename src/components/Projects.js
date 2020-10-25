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
      id: 0,
      showFirst: false,
      showSecond: false,
      showThird: false,
      showFourth: false,
      showFifth: false
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      id: e.target.id
    })
  }

  showItems = () => {
    let num = 0
    setInterval(() => {
      if (num === 1) {
        this.setState({
          showFirst: true
        })
      } else if (num === 2) {
        this.setState({
          showSecond: true
        })
      } else if (num === 3) {
        this.setState({
          showThird: true
        })
      } else if (num === 4) {
        this.setState({
          showFourth: true
        })
      } else if (num === 5) {
        this.setState({
          showFifth: true
        })
      } else if (num === 6) {
        this.setState({
          showFifth: false
        })
      } else if (num === 7) {
        this.setState({
          showFourth: false
        })
      } else if (num === 8) {
        this.setState({
          showThird: false
        })
      } else if (num === 9) {
        this.setState({
          showSecond: false
        })
      } else if (num === 10) {
        this.setState({
          showFirst: false
        })
        num = 0
      }
      num++
    }, 800)
  }

  // componentDidMount(){
  //   this.showItems()
  // }

  render(){
    let card = <div className='projects-details'>
          <div className='single-project'>
            <div className='laser-horizontal'></div>
            <div className='laser-horizontal'></div>
          </div>
        </div>

    return (
        <div id='projects-section' className='projects-container'>

          {card}

          <div className='projects'>
            <img src={project} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#32ab9c'}}>Projects</span></h1>
            <hr/>
            <p>Some of the recent projects I've worked on</p>
            <Card
                number={0}
                click={this.handleClick}
                border={'1px solid #32ab9c'}
                color={this.state.id == 0 ? '#2d3436' : '#fff'}
                defaultBackground={this.state.id == 0 ? '#fff' : '#32ab9c'}
                height={'40px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='** All Projects **' />
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
