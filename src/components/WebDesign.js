import React, { Component } from 'react'
import { Link } from 'gatsby'
import './WebDesign.css'
import Button from './Button'
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
      <div id='services-section'>

        <div className='services'>
        <h1>Skills</h1>
        <p>As a skilled web developer, I offer the following services</p>
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
            <p>I'm always looking to deliver aesthetically pleasing and
            clean web content for my clients and always use the best design tools and latest
            technology to deliver custom made, fast, and optimized websites that look great on
            any device !</p>
            <p>Find out how my websites are better !</p>
            <div className='button-container'>
              <Button
              link={'mailto:velezdavid6@gmail.com'}
              content={'Get Info'}
              padding={'0.75rem 1.5rem'}
              fontColor={'#32ab9c'}
              backgroundColor={'#32ab9c'}
              borderColor={'#32ab9c'}
              />
            </div>
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
              <p>I enjoy the challenges of solving problems
              programatically in order to achieve the disired result. Whether you need a sleek front-end, a robust back-end, or a
              full stack application, I've got you covered.</p>
              <p>Have an app idea ?</p>
              <div className='button-container'>
                <Link to='/contact/' style={linkStyle}>Get in touch</Link>
              </div>
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
  border: `1px solid #deac70`,
  height: '90%'
}

const altStyle2 = {
  backgroundImage: `url(${code})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: `1px solid #deac70`,
  height: '90%'
}

const linkStyle = {
  color: '#fff',
  height: '45px',
  width: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
  border: '1px solid #0984e3'
}
