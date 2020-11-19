import React from "react"
import SEO from "../components/seo"
import './index.css'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Quote from '../components/Quote'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import WebDesign from '../components/WebDesign'
import BannerImage from '../components/BannerImage'
import PageBreak from '../components/PageBreak'
import { Link } from 'react-scroll'




const IndexPage = () => (

  <div className='container'>
    <SEO title="Home" />
      <div className='banner-container'>
        <BannerImage />
      </div>

      <Nav
        link1={<Link to='about-section' smooth={true} duration={1000}><li>about</li></Link>}
        link2={<Link to='services-section' smooth={true} duration={1000}><li>skills</li></Link>}
        link3={<Link to='technologies-section' smooth={true} duration={1000}><li>technologies</li></Link>}
        link4={<Link to='projects-section' smooth={true} duration={1000}><li>projects</li></Link>}
        link5={<Link to='contact-section' smooth={true} duration={1000}><li>contact</li></Link>}
      />
      <Intro />
      <About />
      <Quote
        content={'through technology we are actively inventing tomorrow'}/>
      <WebDesign />
      <PageBreak />
      <Technologies />
      <PageBreak />
      <Projects />
      <PageBreak />
      <Contact />
      <Footer />
    </div>
)

export default IndexPage
