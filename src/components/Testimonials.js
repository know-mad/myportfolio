import React, { useState, useEffect } from 'react'
import './Testimonials.css'

import guy from '../images/guy.jpg'
import man from '../images/man.jpg'
import girl from '../images/girl.jpg'


const testimonials = [
  {
    photo: guy,
    testimonial: '" I hired David to create my business website. He kept in touch and kept me updated throughout the entire process which made me feel at ease that the project was getting done right. I would definitley recommend David to other business owners for their web design needs "',
    person: 'Jake Johnson'
  },
  {
    photo: man,
    testimonial: '" My wife and I had a very positive experience getting our business website built with David. He was very helpful and thorough, and really went above and beyond to make sure we understood his process. His customer service is great! "',
    person: 'Sean Jameson'
  },
  {
    photo: girl,
    testimonial: '" I contacted David for a much needed e-commerce website. He was  always there to answer any questions I had and kept me informed on the progress. All work was done right on schedule and to my complete satisfaction. I would highly recommend David. "',
    person: 'Sabrina Carrera'
  }
]


const Testimonials = () => {
  const [state, setState] = useState(0)

  const cycleTestimonials = () => {
    let number = state
    setInterval(() => {
      number ++
      if (number === 3) {
        number = 0
      }
      setState(number)
    }, 10000)
  }

  useEffect(() => {
    cycleTestimonials()
  })

  return (
    <div className='testimonials-section'>
      <div className='testimonials-top'>
        <h1 style={{margin: '0', color: '#0984e3'}}>TESTIMONIALS</h1>
        <p style={{margin: '0'}}>find out what my clients are saying about me</p>
      </div>

      <div className='testimonials-bottom'>
        <div className='individual-testimonial'>
          <div className='testimonial-photo-container'>
            <div style={{backgroundImage: `url(${testimonials[state].photo})`}} className='testimonial-person'></div>
          </div>
          <div className='testimonial-comment-container'>
            <p>
            {testimonials[state].testimonial}
             <br/>
             <br/>
             -{testimonials[state].person}
            </p>
          </div>
        </div>
      </div>

      <div className='pagination-dots'>
        <div style={{ backgroundColor: state === 0 ? '#0984e3' : 'transparent'}} className='dot'></div>
        <div style={{ backgroundColor: state === 1 ? '#0984e3' : 'transparent'}} className='dot'></div>
        <div style={{ backgroundColor: state === 2 ? '#0984e3' : 'transparent'}} className='dot'></div>
      </div>
    </div>
  )
}

export default Testimonials
