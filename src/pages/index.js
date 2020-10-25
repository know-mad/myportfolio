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
              <Quote
                background={background2}
                content={"Cheap websites aren't good, and good websites aren't cheap"}/>
              <Technologies />
                <Projects />
                  <Contact />
                    <Footer />
  </div>
)

export default IndexPage
