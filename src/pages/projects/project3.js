import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import me from '../../images/portfolio.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='project2' />
    <div className='portfolio-page-container'>
      <section>
        <div className='project-page-banner'>
          <div className='banner-inner'>
            <h1>WEBSITE</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='section-sm'>
          <div className='section-sm-left'>
            <h2>Personal Business Site</h2>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={me} alt='web-design-project' />
          </div>
        </div>
      </section>

      <section>
        <div className='built-with-banner'>
          <div className='built-with-banner-left'>
            <p style={{color: '#0984e3'}}>Built with:</p>
          </div>
          <div className='built-with-banner-right'>
            <p>React</p>
            <p>Figma</p>
            <p>Gatsby</p>
            <p>Netlify</p>
          </div>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='reverse-section-md-left'>
            <p style={{margin: '0'}}>project</p>
            <h2 style={{margin: '0', fontWeight: 'bold', color: '#0984e3'}}>Information</h2>
          </div>
          <div className='reverse-section-md-right'>
            <p>
              In order to showcase my front end skills, I decided to code my business
              website using unique colors, interesting fonts and creative layouts. This project
              was a complete branding, SEO, and digital marketing strategy for my business as
              a freelance web developer.
              <br/>
              <br/>
              From design to deployment, everything was originally handcrafted and metriculously
              thought out in order to create a brandable solution based web asset for
              businesses and individuals needing web development services.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='reverse-section-md-left'>
            <p style={{margin: '0'}}>project</p>
            <h2 style={{margin: '0', fontWeight: 'bold', color: '#0984e3'}}>Outcome</h2>
          </div>
          <div className='reverse-section-md-right'>
            <p>
              The outcome of this project was a successful brand and an optimized
              web asset that is responsively designed to look and feel great on all devices
              from mobile to 4K monitors. Complete with an aggressive SEO strategy, this web asset
              has yielded a 20% monthly increase in lead generation since its deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ProjectPage
