import React, { Component } from 'react'
import './Slide.css'





export default class Slide extends Component {


  render(){
    return(
      <div className='slide'>
        <div className='slide-top'>
          <div className='slide-top-left'>
            <h1>This is where stuff will go</h1>
            <p>This is where description of stuff will go</p>
          </div>
          <div className='slide-top-right'>
            <h1>There will be a button here for more info/react router</h1>
          </div>
        </div>

        <div className='slide-bottom'>
          <div className='pagination'>
            <div className='pagination-indicator'></div>
          </div>
        </div>
      </div>
    )
  }
}
