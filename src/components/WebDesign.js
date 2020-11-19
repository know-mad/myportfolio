import React, { Component } from 'react'
import './WebDesign.css'
import Button from './Button'
import { Link } from 'react-scroll'
import code from '../images/code.gif'
import design from '../images/web-design.gif'





export default class WebDesign extends Component {
  constructor(){
    super()

    this.state = {
      showGif: false,
      showGif2: false
    }
  }

  handleClick = () => {
    this.setState({
      showGif: true
    })
  }

  handleClick2 = () => {
    this.setState({
      showGif: false
    })
  }

  handleClick3 = () => {
    this.setState({
      showGif2: true
    })
  }

  handleClick4 = () => {
    this.setState({
      showGif2: false
    })
  }





  render(){
    return(
      <div id='services-section' className='web-design-container'>
        <div id='glow-bar'></div>

        <div className='services'>
        <h1>Skills</h1>
        <p>As a skilled <span style={{color: '#deac70'}}>software engineer</span>, I offer the following services</p>
        </div>

        <div className='web-design-container-content'>

          {
            this.state.showGif2 ? <div style={altStyle2} className='web-design'></div> :
          <div
          onMouseOver={this.handleClick}
          onMouseOut={this.handleClick2}
          className='web-design'>
          <h1>Web Design</h1>
          <hr/>
          <p>I'm always looking to deliver <span style={{color: '#32ab9c'}}>aesthetically pleasing</span> and
          clean web <span style={{color: '#0984e3'}}>content</span> for my clients and always use the best <span style={{color: '#deac70'}}>design</span> tools and latest
          <span style={{color: '#b007a8'}}> technology</span> to deliver custom made, fast, and <span style={{color: '#32ab9c'}}>optimized</span> websites that <span style={{color: '#0984e3'}}>convert</span> visitors into
          <span style={{color: '#deac70'}}> customers</span></p>
          <p>Need a website?</p>

          <Button
          link={'mailto:velezdavid6@gmail.com'}
          content={'Contact Me'}
          padding={'0.75rem 1.5rem'}
          fontColor={'#32ab9c'}
          backgroundColor={'#32ab9c'}
          borderColor={'#32ab9c'}
          />
          </div>
        }


          {
            this.state.showGif ? <div style={altStyle} className='development'></div>

            :

            <div
            onMouseOver={this.handleClick3}
            onMouseOut={this.handleClick4}
            className='development'>
              <h1>Software Development</h1>
              <hr/>
              <p>I enjoy the challenges of <span style={{color: '#32ab9c'}}>solving problems </span>
              <span style={{color: '#deac70'}}>programatically</span> in order to <span style={{color: '#b007a8'}}>achieve</span> the disired result. Whether you need a <span style={{color: '#0984e3'}}>sleek front-end</span>, a robust back-end, or a
              <span style={{color: '#32ab9c'}}> full stack application</span>, I've got you covered.</p>
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
          }

        </div>
      </div>
    )
  }
}

const altStyle = {
  backgroundImage: `url(${design})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: `1px solid #0984e3`,
  boxShadow: '0 0 40px 5px rgba(9, 132, 227, 0.9)',
  height: '80%'
}

const altStyle2 = {
  backgroundImage: `url(${code})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: `1px solid #deac70`,
  boxShadow: '0 0 40px 5px rgba(222, 172, 112, 0.9)',
  height: '80%'
}
