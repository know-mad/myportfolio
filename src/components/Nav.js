import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Nav.css'
import Logo from './Logo'




export default class Nav extends Component {
  constructor(){
    super()

    this.state = {
      openNav: true,
      listItems: true
    }
  }


  toggleNav = () => {
    let toggle = this.state.openNav
    let toggleItems = this.state.listItems
    this.setState({
      openNav: !toggle,
      listItems: !toggleItems
    })
  }



  componentDidMount(){
    window.addEventListener('scroll', (e) => {
      const isTop = window.scrollY > 700
      const nav = document.getElementById('nav')
      const items = document.getElementById('list-items')
      if (isTop) {
        nav.classList.add('scrolled')
        items.classList.add('list-scrolled')
      } else {
        nav.classList.remove('scrolled')
        items.classList.remove('list-scrolled')
      }
      // console.log(window.scrollY)
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll')
  }


  render(){
    return(
      <div id='nav' className='navbar' style={{height: this.state.openNav === true ? '80px' : '200px'}}>
      <Logo />

        <div id='list-items' className={this.state.listItems === true ? 'list' : 'list-mobile'}>
            <Link to='about-section' smooth={true} duration={1000}><li>about</li></Link>
              <Link to='services-section' smooth={true} duration={1000}><li>services</li></Link>
                <Link to='technologies-section' smooth={true} duration={1000}><li>technologies</li></Link>
                  <Link to='projects-section' smooth={true} duration={1000}><li>projects</li></Link>
                    <Link to='contact-section' smooth={true} duration={1000}><li>contact</li></Link>
        </div>

          <div onClick={this.toggleNav} className='mobile-menu'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>

      </div>
    )
  }
}
