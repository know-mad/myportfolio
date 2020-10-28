import React, { Component } from 'react'
import './Development.css'
import Button from './Button'
import programer from '../images/programming2.svg'





export default class Development extends Component {
  constructor(){
    super()

    this.state = {
      number: 10
    }
  }

  selectRandomInteger = () => {
    let number = 0
    setInterval(() => {
      this.setState({
        number: number
      })
    number = (Math.floor(Math.random() * 9))
  }, 700)
  }

  componentDidMount(){
    this.selectRandomInteger()
  }

  componentWillUnmount(){
    document.querySelectorAll('development-card')
  }


  render(){
    return(
      <div className='development-container'>
        <div className='development-details'>
          <div className='flashing-cards'>
            <div className='development-theater-items'>
              <div style={{opacity: this.state.number === 0  ? '1' : '0'}} className='development-card'><h1>REST</h1></div>
              <div style={{opacity: this.state.number === 1  ? '1' : '0'}} className='development-card'><h1>Front End</h1></div>
              <div style={{opacity: this.state.number === 2  ? '1' : '0'}} className='development-card'><h1>CRUD</h1></div>
              <div style={{opacity: this.state.number === 3  ? '1' : '0'}} className='development-card'><h1>API</h1></div>
              <div style={{opacity: this.state.number === 4  ? '1' : '0'}} className='development-card'><h1>Back End</h1></div>
              <div style={{opacity: this.state.number === 5  ? '1' : '0'}} className='development-card'><h1>OOP</h1></div>
              <div style={{opacity: this.state.number === 6  ? '1' : '0'}} className='development-card'><h1>Framework</h1></div>
              <div style={{opacity: this.state.number === 7  ? '1' : '0'}} className='development-card'><h1>Version Control</h1></div>
              <div style={{opacity: this.state.number === 8  ? '1' : '0'}} className='development-card'><h1>Dev OPS</h1></div>
            </div>
          </div>
        </div>
        <div className='development'>
          <img src={programer} alt='skills_icon' width='90' height='90'/>
          <h1>Software Development</h1>
          <hr/>
          <p>As a <span style={{color: '#deac70'}}>full stack software engineer</span>, I enjoy the challenges of <span style={{color: '#32ab9c'}}>solving problems </span>
          programatically in order to <span style={{color: '#b007a8'}}>achieve</span> the disired result. Whether you need a <span style={{color: '#0984e3'}}>sleek front-end</span>, a robust back-end, or a
          <span style={{color: '#32ab9c'}}> full stack application</span>, I've got you covered.</p>
          <p>Have an app <span style={{color: '#deac70'}}>idea</span> or need a <span style={{color: '#0984e3'}}>developer</span> ?</p>
          <Button
          link={'mailto:velezdavid6@gmail.com'}
          content={'Contact Me'}
          padding={'0.75rem 1.5rem'}
          fontColor={'#0984e3'}
          backgroundColor={'#0984e3'}
          borderColor={'#0984e3'}
          />
        </div>
      </div>
    )
  }
}
