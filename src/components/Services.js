import React, { Component } from 'react'
import './Services.css'
import Card from './Card'

import skills from '../images/skills.svg'


export default class Services extends Component {
  constructor(){
    super()

    this.state = {
      defaultMode: 1
    }
  }

  handleClick1 = () => {
    this.setState({
      defaultMode: 1
    })
  }

  handleClick2 = () => {
    this.setState({
      defaultMode: 2
    })
  }

  handleClick3 = () => {
    this.setState({
      defaultMode: 3
    })
  }

  handleClick4 = () => {
    this.setState({
      defaultMode: 4
    })
  }

  handleClick5 = () => {
    this.setState({
      defaultMode: 5
    })
  }



  render(){

    if (this.state.defaultMode === 1) {
      return(
        <div id='services-section' className='services-container'>
          <div className='skills-details'>
          <p>Select a service to view more details</p>
          <Card
              border={'1px solid #0984e3'}
              color={this.state.defaultMode === 1 ? '#2d3436' : '#fff'}
              defaultBackground={this.state.defaultMode === 1 ? '#fff' : '#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Services' />

            <Card
              click={this.handleClick2}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Responsive Web Design' />

            <Card
              click={this.handleClick3}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Software Development' />

              <Card
              click={this.handleClick4}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Web Scraping'/>

              <Card
                click={this.handleClick5}
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
    } else if (this.state.defaultMode === 2) {
        return (
          <div id='services-section' className='services-container'>
            <div className='skills-details'>
            <p>Select a service to view more details</p>
            <Card
            click={this.handleClick1}
            border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Services' />

              <Card
                  border={'1px solid #0984e3'}
                  color={this.state.defaultMode === 2 ? '#2d3436' : '#fff'}
                  defaultBackground={this.state.defaultMode === 2 ? '#fff' : '#0984e3'}
                  height={'50px'}
                  width={'80%'}
                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                  skill='Responsive Web Design' />

              <Card
              click={this.handleClick3}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Software Development' />

                <Card
                click={this.handleClick4}
                  border={'1px solid #0984e3'}
                  color={'#fff'}
                  defaultBackground={'#0984e3'}
                  height={'50px'}
                  width={'80%'}
                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                  skill='Web Scraping'/>

                <Card
                click={this.handleClick5}
                  border={'1px solid #0984e3'}
                  color={'#fff'}
                  defaultBackground={'#0984e3'}
                  height={'50px'}
                  width={'80%'}
                  shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                  skill='Technology Consulting' />

            </div>
            <div className='skills'>
              <h1><span style={{color: '#0984e3'}}>Responsive Web Design</span></h1>
              <hr/>
                <p>
                I build <span style={{color: '#0984e3'}}>websites</span> and use the latest <span style={{color: '#b007a8'}}>technology</span> in order to deliver
                websites that are <span style={{color: '#deac70'}}>fast</span>, look great on any device <span style={{color: '#32ab9c'}}>(Responsive)</span> and are <span style={{color: '#32ab9c'}}>search
                engine optimized (SEO)</span> in order to ensure that you are reaching
                the most customers possible through your web asset.
                </p>
            </div>
          </div>
        )
    } else if (this.state.defaultMode === 3) {
      return (
        <div id='services-section' className='services-container'>
          <div className='skills-details'>
          <p>Select a service to view more details</p>
          <Card
              click={this.handleClick1}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Services' />

            <Card
                click={this.handleClick2}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Responsive Web Design' />

            <Card
              border={'1px solid #0984e3'}
              color={this.state.defaultMode === 3 ? '#2d3436' : '#fff'}
              defaultBackground={this.state.defaultMode === 3 ? '#fff' : '#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Software Development' />

              <Card
                click={this.handleClick4}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Web Scraping'/>

              <Card
                click={this.handleClick5}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Technology Consulting' />

          </div>
          <div className='skills'>
            <h1><span style={{color: '#0984e3'}}>Software Development</span></h1>
            <hr/>
              <p>
              As a <span style={{color: '#0984e3'}}>full-stack developer</span>, I have experience building REST API's and <span style={{color: '#b007a8'}}>web applications</span>
              in several different <span style={{color: '#32ab9c'}}>programming languages</span> and frameworks.
              So whether you need a sleek front-end or a robust back-end, <span style={{color: '#deac70'}}>I've got you
              covered</span>.
              </p>
          </div>
        </div>
      )
    } else if (this.state.defaultMode === 4) {
      return (
        <div id='services-section' className='services-container'>
          <div className='skills-details'>
          <p>Select a service to view more details</p>
          <Card
              click={this.handleClick1}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Services' />

            <Card
                click={this.handleClick2}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Responsive Web Design' />

            <Card
              click={this.handleClick3}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Software Development' />

              <Card
                border={'1px solid #0984e3'}
                color={this.state.defaultMode === 4 ? '#2d3436' : '#fff'}
                defaultBackground={this.state.defaultMode === 4 ? '#fff' : '#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Web Scraping'/>

              <Card
                click={this.handleClick5}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Technology Consulting' />

          </div>
          <div className='skills'>
            <h1><span style={{color: '#0984e3'}}>Web Scraping</span></h1>
            <hr/>
              <p>
              <span style={{color: '#0984e3'}}>Need large data-sets</span> ? I leverage the power of <span style={{color: '#32ab9c'}}>python</span> to build web
              crawlers that allow for the <span style={{color: '#deac70'}}>automation</span> of building large data sets.
              </p>
          </div>
        </div>
      )
    } else if (this.state.defaultMode === 5){
      return (
        <div id='services-section' className='services-container'>
          <div className='skills-details'>
          <p>Select a service to view more details</p>
          <Card
              click={this.handleClick1}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Services' />

            <Card
                click={this.handleClick2}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Responsive Web Design' />

            <Card
              click={this.handleClick3}
              border={'1px solid #0984e3'}
              color={'#fff'}
              defaultBackground={'#0984e3'}
              height={'50px'}
              width={'80%'}
              shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
              skill='Software Development' />

              <Card
                click={this.handleClick4}
                border={'1px solid #0984e3'}
                color={'#fff'}
                defaultBackground={'#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Web Scraping'/>

              <Card
                border={'1px solid #0984e3'}
                color={this.state.defaultMode === 5 ? '#2d3436' : '#fff'}
                defaultBackground={this.state.defaultMode === 5 ? '#fff' : '#0984e3'}
                height={'50px'}
                width={'80%'}
                shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
                skill='Technology Consulting' />

          </div>
          <div className='skills'>
            <h1><span style={{color: '#0984e3'}}>Technology Consulting</span></h1>
            <hr/>
              <p>
              <span style={{color: '#0984e3'}}>Have a tech idea</span> you want to develop or not sure how to <span style={{color: '#b007a8'}}>scale</span> your current
              technology ? Feel free to <span style={{color: '#deac70'}}>contact me</span> for a consultation
              </p>
          </div>
        </div>
      )
    }
  }
}
