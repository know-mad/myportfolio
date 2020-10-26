import React, { Component } from 'react'
import './WebDesign.css'

import webdesign from '../images/website-design.svg'

export default class WebDesign extends Component {
  render(){
    return(
      <div className='web-design-container'>
        <div className='web-design'>
        <img src={webdesign} alt='skills_icon' width='90' height='90'/>
        <h1>Web Design</h1>
        <hr/>
        <p>As a <span style={{color: '#b007a8'}}>creative</span>, I'm always looking to deliver <span style={{color: '#32ab9c'}}>aesthetically pleasing</span> and
        clean web <span style={{color: '#0984e3'}}>content</span> for my clients. I always use the best <span style={{color: '#deac70'}}>design</span> tools and latest
        <span style={{color: '#b007a8'}}> technology</span> to deliver custom made, fast, and <span style={{color: '#32ab9c'}}>optimized</span> websites that <span style={{color: '#0984e3'}}>convert</span> visitors into
        <span style={{color: '#deac70'}}> customers</span></p>
        </div>

        <div className='web-design-details'>
          <h2>Interested in working together? Download this pdf bl;ah blah blah</ h2>
        </div>
      </div>
    )
  }
}
