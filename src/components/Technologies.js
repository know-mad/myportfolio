import React, { Component } from 'react'
import './Technologies.css'
import Card from './Card'

import programming from '../images/programming.svg'
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
import wordpress from '../images/wordpress-blue.svg'
import shopify from '../images/shopify-2.svg'
import firebase from '../images/firebase-1.svg'
import postgreSQL from '../images/postgresql.svg'


import data from '../images/skill.json'

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
  wordpress,
  shopify,
  firebase,
  postgreSQL
]


export default class Technologies extends Component {
  constructor(){
    super()

    this.state = {
      image: photos[0],
      skill: data
    }


}

  cycleImages = () => {
    let number = 1
    setInterval(() => {
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
  }

  componentWillUnmount(){
    document.querySelector('.tech-image-child')
  }

  render(){
    let skill = this.state.skill.map((item, index) => {
      return <Card
      key={index}
      color={'#fff'}
      height={'50px'}
      width={'25%'}
      defaultBackground={'#b007a8'}
      shadow={'5px 10px 20px rgba(0,0,0,0.4)'}
      skill={item.skill}
      />
    })

    return(
      <div className='technologies-container'>
        <div className='technologies'>
          <div className='technologies-top'>
            <img src={programming} alt='skills_icon' width='90' height='90'/>
            <h1><span style={{color: '#b007a8'}}>Technologies</span></h1>
            <hr/>
            <h3>As a <span style={{color: '#b007a8'}}>passionate</span> and curious
             technologist, I'm always looking to <span style={{color: '#deac70'}}>learn</span> and
              <span style={{color: '#deac70'}}> build</span> with new technologies</h3>
            <h3> these are some of the <span style={{color: '#32ab9c'}}>technologies</span> i've
             been <span style={{color: '#0984e3'}}>working</span> with recently</h3>
          </div>

          <div className='technologies-bottom'>
            {skill}
          </div>
        </div>

        <div className='technologies-details'>
          <div className='tech-image-parent'></div>
          <div className='tech-image-child' style={{backgroundImage: `url(${this.state.image})`}}></div>
        </div>
      </div>
    )
  }
}