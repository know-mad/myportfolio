import React, { Component } from 'react'
import './Contact.css'
import Button from './Button'
import contact from '../images/contact.svg'






export default class Contact extends Component {


  render(){
    return(
      <div id='contact-section' className='contact-container'>
        <div className='contact'>
          <div className='contact-parent'>
          <img src={contact} alt='skills_icon' width='90' height='90'/>
          <h1><span style={{color: '#deac70'}}>Contact Me</span></h1>
            <hr/>

            <Button
            link={'mailto:velezdavid6@gmail.com'}
            content={'get in touch'}
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
    )
  }
}
