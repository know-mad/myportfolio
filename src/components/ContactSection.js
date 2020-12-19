import React, { Component } from 'react'
import './ContactSection.css'
import { Link } from 'gatsby'





const ContactSection = () => (
  <div id='contact-section'>
    <div className='contact-content'>

      <div className='contact-details'>
      <h1>For any questions, inquiries, or collaborations, feel free to contact me. I'd love to hear from you.</h1>
      </div>

      <div className='contact'>
        <div className='contact-parent'>
        <h1><span style={{color: '#deac70'}}>Contact Me</span></h1>
          <hr/>

          <Link to='/contact/' style={linkStyle}>Contact</Link>

        </div>
        <div className='contact-child'></div>
      </div>

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
  border: '1px solid #deac70',
  boxShadow: '0px 0px 20px 4px #deac70',
  backgroundColor: 'rgba(222, 172, 112, 0.2)',
  marginTop: '30px'
}

export default ContactSection
