import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import { Link } from 'gatsby'
import logo from '../images/footer-logo.svg'


const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className='container'>
      
      <main>{children}</main>


        <footer>
          <div className='footer-top'>
            <div className='footer-top-left'>
              <img style={imageStyle} src={logo} alt='web-designer-logo'/>
            </div>
            <div className='footer-top-center'>
              <h3>SITEMAP</h3>
              <Link style={linkStyle} to='/'>home</Link>
              <Link style={linkStyle} to='/projects/'>projects</Link>
              <Link style={linkStyle} to='/blog/'>blog</Link>
              <Link style={linkStyle} to='/contact/'>contact</Link>
            </div>
            <div className='footer-top-center'>

              <h3>SOCIALS</h3>
              <a href='https://github.com/know-mad' rel="noopener noreferrer" target="_blank">github</a>
            </div>
            <div className='footer-top-center'>

            </div>
          </div>

          <div className='footer-bottom'>
            <p>© vtechnologies {new Date().getFullYear()}</p>
          </div>
        </footer>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const imageStyle = {
  height: `90%`,
  width: '90%'
}

const linkStyle = {
  color: '#fff',
  marginTop: '5px',
  opacity: '0.5'
}

export default Layout
