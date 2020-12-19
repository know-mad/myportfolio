import React from 'react'
import './WebDesignMobile.css'
import { Link } from 'gatsby'

const WebDesignMobile = () => (
  <div id='design-section'>
    <div className='services'>
    <h1>Skills</h1>
    <hr />
    <p>As a skilled web developer, I offer the following services</p>
    </div>

    <div className='web-design'>
      <h1>Web Design</h1>
      <hr/>
      <p>I'm always looking to deliver aesthetically pleasing and
      clean web content for my clients and always use the best design tools and latest
      technology to deliver custom made, fast, and optimized websites that look great on
      any device !</p>
      <p>Find out how my websites are better !</p>

      <Link to='/info/' style={linkStyle}>Get Info</Link>

    </div>

    <div className='development'>
      <h1>Software Development</h1>
      <hr/>
      <p>I enjoy the challenges of solving problems
      programatically in order to achieve the disired result. Whether you need a sleek front-end, a robust back-end, or a
      full stack application, I've got you covered.</p>
      <p>Have an app idea ?</p>

      <Link to='/contact/' style={linkStyle}>Get in Touch</Link>

    </div>

  </div>
)

const linkStyle = {
  color: '#fff',
  height: '40px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
  border: '1px solid #0984e3',
  boxShadow: '0px 0px 20px 4px #0984e3',
  backgroundColor: 'rgba(9, 132, 227, 0.2)'
}

export default WebDesignMobile
