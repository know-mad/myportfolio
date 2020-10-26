import React, { Component } from 'react'
import './Development.css'

import programer from '../images/programming2.svg'

export default class Development extends Component {
  render(){
    return(
      <div className='development-container'>
        <div className='development-details'>

        </div>
        <div className='development'>
          <img src={programer} alt='skills_icon' width='90' height='90'/>
          <h1>Software Development</h1>
          <hr/>
        </div>
      </div>
    )
  }
}
