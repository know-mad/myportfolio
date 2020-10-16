import React, { Component } from 'react'
import './Quote.css'


export default class Quote extends Component {


  render(){
    return(
      <div className='quote-container'>
        <h3>Through <span style={{color: '#deac70'}}>technology</span> we are actively inventing <span style={{color: '#32ab9c'}}>tomorrow</span></h3>
      </div>
    )
  }
}
