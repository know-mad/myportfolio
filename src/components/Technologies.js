import React, { Component } from 'react'
import './Technologies.css'
import { gsap } from 'gsap'

import html from '../images/html-5.svg'
import css from '../images/css3.svg'
import js from '../images/javascript.svg'
import python from '../images/python-5.svg'
import node from '../images/nodejs-1.svg'
import ex from '../images/express-109.svg'
import django from '../images/django-community.svg'
import heroku from '../images/heroku-1.svg'
import netlify from '../images/netlify.svg'
import react from '../images/react-2.svg'
import mongo from '../images/mongodb.svg'
import git from '../images/github-2.svg'
import gatsby from '../images/gatsby-logo.svg'
import shopify from '../images/shopify-2.svg'
import firebase from '../images/firebase-1.svg'
import postgreSQL from '../images/postgresql.svg'


import data from '../content/skill.json'

const photos = [
  html,
  css,
  python,
  js,
  node,
  ex,
  django,
  heroku,
  netlify,
  react,
  mongo,
  git,
  gatsby,
  shopify,
  firebase,
  postgreSQL
]


export default class Technologies extends Component {
  constructor(){
    super()

    this.state = {
      image: photos[0],
      skill: data,
      animate: false
    }


}

  cycleImages = () => {
    let number = 1
    this.cycleTechImage = setInterval(() => {
      this.setState({
        image: photos[number]
      })
      number ++
      if (number === 15) {
        number = 0
      }
    }, 1500)
  }



  componentDidMount(){
    this.cycleImages()
    gsap.to('.tech-child-1', {marginLeft: '8em', marginTop: '8em', duration: 1, repeat: -1, yoyo: true})
    gsap.to('.tech-child-2', {marginLeft: '7em', marginTop: '7em', duration: 1, repeat: -1, yoyo: true})
    gsap.to('.tech-child-3', {marginLeft: '6em', marginTop: '6em', duration: 1, repeat: -1, yoyo: true})
  }

  componentWillUnmount(){
    document.querySelector('.tech-image-child')
    clearInterval(this.cycleTechImage)
  }

  render(){
    let skill = this.state.skill.map((item, index) => {
      return (
        <p style={{marginRight: '10px', marginLeft: '10px'}}>{item.skill}</p>
      )
    })

    return(
      <div id='technologies-section'>
        <div className='technologies-container-content'>


          <div className='technologies-details'>
            <div className='tech-parent'>
              <div className='tech-child-1'></div>
              <div className='tech-child-2'></div>
              <div className='tech-child-3'></div>
              <div onMouseOver={this.animateElement} onMouseOut={this.animateElement2} className='tech-image' >
                <img style={{ height: '100%', width: '100%'}} src={this.state.image} alt='rotating-gallery-of-tech-logos'/>
              </div>
            </div>

          </div>

          <div className='technologies'>
            <div className='technologies-top'>
              <h1><span style={{color: '#b007a8'}}>Technologies</span></h1>
              <hr/>
              <p>I'm a passionate and curious
               engineer who is always looking to learn and
               build with new technologies.
               These are some of the technologies I've
               been working with recently</p>
            </div>

            <div className='technologies-bottom'>
              {skill}
            </div>
          </div>

        </div>
      </div>
    )
  }
}
