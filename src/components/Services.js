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


  render(){
    return(
      <div id='skills-section' className='skills-container'>
        <div className='services-details'>
          <div className='services-theater'>
            <div className='laser-horizontal'>
              <div className='laser-top'></div>
            </div>
            <div className='services-theater-center'>
              <div className='laser-vertical'>
                <div className='laser-left'></div>
              </div>

              <div className='services-theater-content'>
                <h1>Web Designer</h1>
                <h1>&</h1>
                <h1>Software Developer</h1>
              </div>


              <div className='laser-vertical'>
                <div className='laser-right'></div>
              </div>
            </div>
            <div className='laser-horizontal'>
              <div className='laser-bottom'></div>
            </div>
          </div>

        </div>

        <div className='services'>
          <img src={skills} alt='skills_icon' width='90' height='90'/>
          <h1>Skills</h1>

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
