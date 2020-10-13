import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import BlankService from '../components/BlankService'
import Technologies from '../components/Technologies'





const IndexPage = () => (
  <div className='container'>
    <SEO title="Home" />
      <Nav />
        <Intro />
          <About />
          <Quote />
            <Services />
              <BlankService />
              <Technologies />
                <Projects />
                  <Contact />
                    <Footer />
  </div>
)

export default IndexPage
