import React, { Component } from 'react'
import './Intro.css'
import data from '../content/file.json'
import { Spring } from 'react-spring/renderprops'








export default class Intro extends Component {
  constructor(){
    super()

    this.state = {
      helloMessage: "Hello",
      cursor: true
    }
  }

  cycleMessage = () => {
    let num = 1
    setInterval(() => {
      this.setState({
        helloMessage: data[num].translation
      })
      num ++
      if(num === data.length) {
        num = 0
      }
    }, 2000)
  }

  cycleCursor = () => {
    let cursor = this.state.cursor
    setInterval(() => {
      if (cursor) {
        document.getElementById('cursor').style.opacity = 0
        cursor = false
      } else {
        document.getElementById('cursor').style.opacity = 1
        cursor = true
      }
    }, 400)
  }

  componentDidMount(){
    this.cycleMessage()
    this.cycleCursor()
  }

  componentWillUnmount(){
    document.getElementById('cursor')
  }



  render(){

    return(
      <div className='intro-container'>
        <div className='intro'></div>

        <div className='intro-detail'>
          <Spring
          from={{opacity: 0}}
          to={{opacity: 1}}
          delay={500}
          >
            {props => <div style={props} className='intro-message'>
              <div className='top-message'>
                <h2>{this.state.helloMessage}</h2>
              </div>
              <div className='middle-message'>
                <h2>My <span style={{color: '#0984e3'}}>name</span> is...</h2>
              </div>
              <div className='middle-message-2'>
                <h2>David Velez</h2>
              </div>
              <div className='bottom-message'>
              <h2>I <span style={{color: '#deac70'}}>build</span> things <span style={{color: '#32ab9c'}}>for</span> the <span style={{color: '#b007a8'}}>web</span>
                <span id='cursor' style={{opacity: 0}}> |</span></h2>
              </div>
            </div>}
          </Spring>
        </div>
      </div>
    )
  }
}
