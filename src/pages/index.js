import React from "react"
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



const IndexPage = () => (
  <div className='container'>
    <SEO title="Home" />
      <Nav />
        <Intro />
          <About />
          <Quote
            background={background1}
            content={'Through technology we are actively inventing tomorrow'}/>
            <Services />
              <WebDesign />
              <Development />
                <Technologies />
                  <Projects />
                    <Contact />
                      <Footer />
  </div>
)

export default IndexPage
