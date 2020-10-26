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
import Technologies from '../components/Technologies'
import WebDesign from '../components/WebDesign'
import Development from '../components/Development'

import background1 from '../images/quotes_image.jpg'
import background2 from '../images/background2.png'



const IndexPage = () => (
  <div className='container'>
    <SEO title="Home" />
      <Nav />
        <Intro />
          <About />
          <Quote
            background={background1}
            content={'Through technology, we are actively inventing tomorrow'}/>
            <Services />
              <WebDesign />
              <Development />
              <Quote
                background={background2}
                content={"Cheap work isn't good, and good work isn't cheap"}/>
              <Technologies />
                <Projects />
                  <Contact />
                    <Footer />
  </div>
)

export default IndexPage
