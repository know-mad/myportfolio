import React, { Component } from 'react'
import './WebDesign.css'
import Button from './Button'

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
        <p>Want to <span style={{color: '#b007a8'}}>know</span> how?</p>

        <Button
        content={'More Info'}
        padding={'0.75rem 1.5rem'}
        fontColor={'#0984e3'}
        backgroundColor={'#0984e3'}
        borderColor={'#0984e3'}
        />
        </div>

        <div className='web-design-details'>
          <h1>All of the websites I build are...</h1>
            <div className='web-design-details-card-container'>
              <div className='web-design-details-card'>
                <h1>Fast</h1>
              </div>
              <p><span style={{color: '#b007a8'}}>Think rocket ship vs. cargo ship. I build websites on the Gatsby.js platform so no matter where a Gatsby site or web app
              runs, it’s fast by design. Pages load in milliseconds rather than seconds. </span></p>
              <div className='web-design-details-card'>
                <h1>Responsive</h1>
              </div>
              <p><span style={{color: '#0984e3'}}>With almost 54% of web traffic being done on mobile devices, I build responsive websites that look great on any device.</span></p>
              <div className='web-design-details-card'>
                <h1>Search Engine Optimized</h1>
              </div>
              <p><span style={{color: '#32ab9c'}}>There's no point in having a beautiful site if nobody is going to see it! I optimize each website so that it ranks on search
              engine queries, which means more traffic for your site and ultimately more clients!</span></p>
            </div>
        </div>
      </div>
    )
  }
}
