import React, { Component } from 'react'
import './Nav.css'
import Logo from './Logo'
import { Link } from 'react-scroll'


export default class Nav extends Component {
  constructor(){
    super()

    this.state = {
      openNav: false
    }
  }

  toggleNav = () => {
    let toggle = this.state.openNav
    this.setState({
      openNav: !toggle
    })
  }

  componentDidMount(){
    window.addEventListener('scroll', (e) => {
      const isTop = window.scrollY > 700
      const nav = document.getElementById('nav')
      const links = document.getElementById('links')
      if (isTop) {
        nav.classList.add('scrolled')
        links.classList.add('links-scrolled')
      } else {
        nav.classList.remove('scrolled')
        links.classList.remove('links-scrolled')
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll')
  }


  render(){
    return(
      <div id='nav' className='nav' style={{height: this.state.openNav ? '280px' : '80px'}}>
        <div className='content-container' style={{height: this.state.openNav ? '30%' : '100%'}}>
          <div className='logo-side'>
            <Logo />
          </div>
          <div id='links' className='links-side'>
          <Link to='about-section' smooth={true} duration={1000}><li>about</li></Link>
            <Link to='skills-section' smooth={true} duration={1000}><li>skills</li></Link>
              <Link to='technologies-section' smooth={true} duration={1000}><li>technologies</li></Link>
                <Link to='projects-section' smooth={true} duration={1000}><li>projects</li></Link>
                  <Link to='contact-section' smooth={true} duration={1000}><li>contact</li></Link>

                  <div onClick={this.toggleNav} className='mobile-menu'>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                  </div>
          </div>

        </div>
        <div className='mobile-links' style={{display: this.state.openNav ? 'flex' : 'none'}}>
        <Link to='about-section' smooth={true} duration={1000}><li>about</li></Link>
          <Link to='services-section' smooth={true} duration={1000}><li>services</li></Link>
            <Link to='technologies-section' smooth={true} duration={1000}><li>technologies</li></Link>
              <Link to='projects-section' smooth={true} duration={1000}><li>projects</li></Link>
                <Link to='contact-section' smooth={true} duration={1000}><li>contact</li></Link>
        </div>
      </div>
    )
  }
}
