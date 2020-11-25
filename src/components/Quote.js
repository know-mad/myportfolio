import React from 'react'
import './Quote.css'


const Quote = ({ content }) =>  {

    return(
      <div className='quote-container'>
        <div id='glow-bar'></div>
          <div className='color-bar'>
            <div className='color-bar-scroll-top'></div>
          </div>
          <h3>{content}</h3>
          <div className='color-bar'>
            <div className='color-bar-scroll-bottom'></div>
          </div>
        <div id='glow-bar'></div>
      </div>
    )
}

export default Quote
