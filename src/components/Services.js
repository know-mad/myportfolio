import React, { Component } from 'react'
import './Services.css'
import Card from './Card'

import skills from '../images/skills.svg'


export default class Services extends Component {
  constructor(){
    super()

    this.state = {
      defaultMode: 1
    }
  }

  handleClick1 = () => {
    this.setState({
      defaultMode: 1
    })
  }

  handleClick2 = () => {
    this.setState({
      defaultMode: 2
    })
  }

  handleClick3 = () => {
    this.setState({
      defaultMode: 3
    })
  }

  handleClick4 = () => {
    this.setState({
      defaultMode: 4
    })
  }

  handleClick5 = () => {
    this.setState({
      defaultMode: 5
    })
  }



  render(){
    return(
      <div id='services-section' className='services-container'>
        <div className='services-details'>
        <Card
            click={this.handleClick2}
            border={'1px solid #0984e3'}
            color={'#fff'}
            defaultBackground={'#0984e3'}
            height={'50px'}
            width={'80%'}
            shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
            skill='Web Design' />

          <Card
            click={this.handleClick3}
            border={'1px solid #0984e3'}
            color={'#fff'}
            defaultBackground={'#0984e3'}
            height={'50px'}
            width={'80%'}
            shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
            skill='Software Development' />
        </div>

        <div className='services'>
          <img src={skills} alt='skills_icon' width='90' height='90'/>
          <h1><span style={{color: '#0984e3'}}>Services</span></h1>

          <hr/>

            <p>
              With over <span style={{color: '#0984e3'}}>8 years</span> in the technology sector, I've gained and used
              various <span style={{color: '#32ab9c'}}>skillsets</span> that allow me to <span style={{color: '#deac70'}}>learn</span> technologies
              quickly, implement strategic solutions, and <span style={{color: '#b007a8'}}>adapt</span> to many different
              situations the <span style={{color: '#0984e3'}}>rapidly evolving</span> and ever changing <span style={{color: '#deac70'}}>technology field</span>
            </p>

        </div>
      </div>
    )
    }
  }
