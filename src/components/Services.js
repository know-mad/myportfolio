import React, { Component } from 'react'
import './Services.css'
import skills from '../images/skills.svg'
import Card from './Card'


export default class Services extends Component {


  render(){
    return(
      <div id='services-section' className='services-container'>
        <div className='skills-details'>
        <p>Select a service to view more details</p>
        <Card border={'1px solid #0984e3'}
            color={'#fff'}
            defaultBackground={'#0984e3'}
            height={'50px'}
            width={'80%'}
            shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
            skill='Services' />

          <Card border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Responsive Web Design' />

          <Card
            border={'1px solid #0984e3'}
            color={'#fff'}
            defaultBackground={'#0984e3'}
            height={'50px'}
            width={'80%'}
            shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
            skill='Software Development' />

            <Card
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Web Scraping'/>

            <Card
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Technology Consulting' />

        </div>
        <div className='skills'>

            <img src={skills} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#0984e3'}}>Services</span></h1>

          <hr/>

            <p>
              With over <span style={{color: '#0984e3'}}>8 years</span> in the technology sector, I've gained and used
              various <span style={{color: '#32ab9c'}}>skillsets</span> that allow me to <span style={{color: '#deac70'}}>learn</span> technologies
              quickly, implement strategic solutions, and <span style={{color: '#b007a8'}}>adapt</span> to many different
              situations the <span style={{color: '#0984e3'}}>rapidly evolving</span> and ever changing <span style={{color: '#deac70'}}>technology field</span>
            </p>

        </div>
      </div>
    )
  }
}
