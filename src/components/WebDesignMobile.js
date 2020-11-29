import React from 'react'
import './WebDesignMobile.css'
import Button from './Button'

const WebDesignMobile = () => (
  <div id='design-section'>
    <div className='services'>
    <h1>Skills</h1>
    <hr />
    <p>As a skilled web developer, I offer the following services</p>
    </div>

    <div
    className='web-design'>
    <h1>Web Design</h1>
    <hr/>
    <p>I'm always looking to deliver aesthetically pleasing and
    clean web content for my clients and always use the best design tools and latest
    technology to deliver custom made, fast, and optimized websites that look great on
    any device !</p>
    <p>Find out how my websites are better !</p>

    <Button
    link={'mailto:velezdavid6@gmail.com'}
    content={'Get Info'}
    padding={'0.75rem 1.5rem'}
    fontColor={'#32ab9c'}
    backgroundColor={'#32ab9c'}
    borderColor={'#32ab9c'}
    />
    </div>

    <div
    className='development'>
      <h1>Software Development</h1>
      <hr/>
      <p>I enjoy the challenges of solving problems
      programatically in order to achieve the disired result. Whether you need a sleek front-end, a robust back-end, or a
      full stack application, I've got you covered.</p>
      <p>Have an app idea ?</p>

      <Button
      link={'mailto:velezdavid6@gmail.com'}
      content={'Get in Touch'}
      padding={'0.75rem 1.5rem'}
      fontColor={'#0984e3'}
      backgroundColor={'#0984e3'}
      borderColor={'#0984e3'}
      />
    </div>

  </div>
)

export default WebDesignMobile
