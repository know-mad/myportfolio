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

  componentDidMount(){
    this.showItems()
  }

  render(){
console.log(data)

      let card = <div className='projects-details'>
      <div style={{opacity: '0'}} className='projects-image-parent'></div>
        <div style={{backgroundImage: `url(${barbershop})`, opacity: this.state.showFirst ? '1' : '0'}} className='projects-image-first-child'>
          <div style={{backgroundImage: `url(${toronto})`, opacity: this.state.showSecond ? '1' : '0'}} className='projects-image-second-child'>
            <div style={{backgroundImage: `url(${simon})`, opacity: this.state.showThird ? '1' : '0'}} className='projects-image-third-child'>
              <div style={{backgroundImage: `url(${ecommerce})`, opacity: this.state.showFourth ? '1' : '0'}} className='projects-image-fourth-child'>
                <div style={{backgroundImage: `url(${portfolio})`, opacity: this.state.showFifth ? '1' : '0'}} className='projects-image-fifth-child'></div>
              </div>
            </div>
          </div>
      </div>

      </div>
      if (this.state.id == 1) {
        card = <div style ={divStyle2}>
        <ProjectCard
        image={barbershop}
        number={2}
        title={'AZ Hair Studio Website'}
        description={data[0].description}
        technology1={'HTML5'}
        technology2={'CSS'}
        technology3={'GraphQL'}
        technology4={'REACT'}
        technology5={'Gatsby'}
        technology6={'Netlify'}
        />
        </div>
      }
      else if (this.state.id == 2) {
      card = <div style ={divStyle2}>
      <ProjectCard
      image={toronto}
      number={2}
      title={'Toronto Website'}
      description={data[1].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'Javascript'}
      />
      </div>
    } else if (this.state.id == 3) {
        card = <div style ={divStyle2}>
        <ProjectCard
        image={simon}
        number={3}
        title={'Simon'}
        description={data[2].description}
        technology1={'HTML5'}
        technology2={'CSS'}
        technology3={'Javascript'}
        technology4={'REACT'}
        />
        </div>
    } else if (this.state.id == 4) {
      card = <div style ={divStyle2}>
      <ProjectCard
      image={ecommerce}
      number={3}
      title={'MERN E-Commerce Site'}
      description={data[3].description}
      technology1={'MongoDB'}
      technology2={'Express.js'}
      technology3={'REACT'}
      technology4={'Node.js'}
      />
      </div>
    } else if (this.state.id == 5) {
      card = <div style ={divStyle2}>
      <ProjectCard
      image={portfolio}
      number={3}
      title={'Portfolio Site'}
      description={data[4].description}
      technology1={'HTML5'}
      technology2={'CSS'}
      technology3={'GraphQL'}
      technology4={'REACT'}
      technology5={'Gatsby'}
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

const divStyle2 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  height: '85%'
}
