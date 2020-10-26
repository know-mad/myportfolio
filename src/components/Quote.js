import React, { Component } from 'react'
import './Quote.css'


const Quote = ({ content, background }) =>  {

    return(
      <div style={{backgroundImage: `url(${background})`}} className='quote-container'>
        <div className='color-bar'>
          <div className='color-bar-scroll-top'></div>
        </div>
        <p>{content}</p>
        <div className='color-bar'>
          <div className='color-bar-scroll-bottom'></div>
        </div>
      </div>
    )
}

export default Quote
