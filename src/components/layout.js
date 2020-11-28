import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './Footer'
import { gsap } from 'gsap'
import "./layout.css"

const Layout = ({ children }) => {


  useEffect(() => {
    gsap.to('#glow-bar', {opacity: 1, duration: 2, repeat: -1, yoyo: true})
  })

  return (
    <>
      <Header />

      <div className='container'>

        <main>{children}</main>

        <Footer />

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
