import React, { Component } from 'react'
import './BlankService.css'

import webdesign from '../images/website-design.svg'





export default class BlankService extends Component {


  render(){
    return(
      <div className='blank-service-container'>
        <div className='blank-service'>
        <img src={webdesign} alt='skills_icon' width='90' height='90'/>
        <h1><span style={{color: '#0984e3'}}>Responsive Web Design</span></h1>
        <hr/>

          <h3>Need a website ?</h3>
          <h3>
            I build websites using the latest technology. Ensuring your
            website is lightning fast, SEO optimized, and looks great on any device
          </h3>
        </div>

        <div className='blank-service-detail'>

        </div>

      </div>
    )
  }
}