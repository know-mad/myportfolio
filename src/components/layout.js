import React from "react"
import PropTypes from "prop-types"


import Header from "./header"
import Footer from './Footer'
import "./layout.css"

const Layout = ({ children }) => {

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
