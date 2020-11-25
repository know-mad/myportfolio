import React, { Component } from 'react'
import './Contact.css'
import Button from './Button'
import { Link } from 'gatsby'






export default class Contact extends Component {


  render(){
    return(
      <div id='contact-section'>
        <div className='contact-content'>

          <div className='contact'>
            <div className='contact-parent'>
            <h1><span style={{color: '#deac70'}}>Contact Me</span></h1>
              <hr/>

              <Button
              content={<Link to='/contact/' style={{color: '#fff'}}>Contact</Link>}
              margin={'50px'}
              padding={'1rem 1.75rem'}
              fontColor={'#deac70'}
              backgroundColor={'#deac70'}
              borderColor={'#deac70'}
              />

            </div>
            <div className='contact-child'></div>
          </div>

          <div className='contact-details'>
          <h1>For any questions, inquiries, or collaborations, feel free to contact me. I'd love to hear from you.</h1>
          </div>
        </div>
      </div>
    )
  }
}
