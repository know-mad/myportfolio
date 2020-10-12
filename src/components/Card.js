import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {

  render(){
    return(
      <div
      className='card-container'
      style={{
        backgroundColor: this.props.defaultBackground,
        color: this.props.color,
        border: this.props.border,
        height: this.props.height,
        width: this.props.width,
        boxShadow: this.props.shadow,
        backgroundImage: this.props.image
        }}>
        <h4>{this.props.skill}</h4>
      </div>
    )
  }
}
