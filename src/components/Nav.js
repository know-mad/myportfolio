// import React, { Component } from 'react'
// import './Nav.css'
// import { gsap } from 'gsap'
// import Logo from './Logo'
// import { Link } from 'react-scroll'
//
//
//
// export default class Nav extends Component {
//   constructor(props){
//     super(props)
//
//     this.state = {
//       openNav: false
//     }
//   }
//
//   toggleNav = () => {
//     let toggle = this.state.openNav
//     this.setState({
//       openNav: !toggle
//     })
//   }
//
  // componentDidMount(){
  //   window.addEventListener('scroll', (e) => {
  //     const isTop = window.scrollY > 700
  //     const nav = document.getElementById('nav')
  //     const links = document.getElementById('links')
  //     if (isTop) {
  //       nav.classList.add('scrolled')
  //       links.classList.add('links-scrolled')
  //     } else {
  //       nav.classList.remove('scrolled')
  //       links.classList.remove('links-scrolled')
  //     }
  //   })
  //
  //   gsap.to('.nav', {opacity: 1, delay: 1, duration: 1})
  // }
//
//   componentWillUnmount(){
//     window.removeEventListener('scroll')
//   }
//
//
//   render(){
//     return(
//       <div id='nav' className='nav' style={{height: this.state.openNav ? '280px' : '80px'}}>
//         <div className='content-container' style={{height: this.state.openNav ? '30%' : '100%'}}>
//           <div className='logo-side'>
//             <Logo />
//           </div>
//           <div id='links' className='links-side'>
//
//             {this.props.link1}
//             {this.props.link2}
//             {this.props.link3}
//             {this.props.link4}
//             {this.props.link5}
//
//           <div onClick={this.toggleNav} className='mobile-menu'>
//             <div className='bar'></div>
//             <div className='bar'></div>
//             <div className='bar'></div>
//           </div>
//         </div>
//
//         </div>
//         <div className='mobile-links' style={{display: this.state.openNav ? 'flex' : 'none'}}>
//
//           {this.props.link1}
//           {this.props.link2}
//           {this.props.link3}
//           {this.props.link4}
//           {this.props.link5}
//
//         </div>
//       </div>
//     )
//   }
// }
