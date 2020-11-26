import React from "react"
import './portfolio.css'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Projects from '../components/Projects'
import PageBreak from '../components/PageBreak'
import Contact from '../components/Contact'

import site1 from '../images/site1.jpg'
import site2 from '../images/site2.jpg'
import site3 from '../images/site3.jpg'
import site4 from '../images/site4.jpg'

const PortfolioPage = () => (
  <Layout>

    <SEO title="Portfolio" />
    <div className='portfolio-container'>

      <div className='portfolio-intro'>
      <h1>Portfolio</h1>
      <p style={{fontSize: '1.25rem'}}>A collection of websites and applications that I've created and worked on</p>
      </div>

    </div>

    <PageBreak />

    <Projects
    image1={site1}
    image2={site2}
    content1={'The goal of this website was to create an online asset for the client that was simple to navigate, informative, and allowed for customers to book appointments...'}
    content2={'This is the website for my personal portfolio. The goal was to create something that had a unique style and...'}
    info1={'Barbershop Website'}
    info2={'Personal Portfolio Website'}
    />

    <Projects
    image1={site3}
    image2={site4}
    content1={'A web version of the popular Hasbro game SIMON built with React.js...'}
    content2={'CoTripper is a full stack application built for the traveling single parent....'}
    info1={'Simon App'}
    info2={'CoTripper App'}
    />

  </Layout>
)

export default PortfolioPage
