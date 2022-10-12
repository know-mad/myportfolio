import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import me from '../../images/portfolio.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Website Developers NYC' />
    <div className='portfolio-page-container'>
      <section>
        <div className='portfolio-banner'>
          <div className='banner-inner'>
            <h1>WEBSITE</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='section-sm'>
          <div className='section-sm-left'>
            <h2>DavidVelez.io</h2>
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
            <p>HTML</p>
            <p>CSS</p>
            <p>Gatsby</p>
            <p>Netlify</p>
          </div>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='reverse-section-md-left'>
            <p style={{margin: '0'}}>project</p>
            <h2 style={{margin: '0', fontWeight: 'bold', color: '#0984e3'}}>Info</h2>
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
            <br/>
            <br/>
            This project features:
            <ul>
              <li>Performance driven design</li>
              <li>On site SEO</li>
              <li>Custom theme</li>
            </ul>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div style={{marginBottom: `0`}} className='contact-banner'>
          <div className='contact-banner-left'>
            <p>
             Ready to start your web project?
            </p>
          </div>
          <div className='contact-banner-right'>
            <Link style={{width: `25em`}} id='contact-link' to='/contact/'>START YOUR WEB PROJECT</Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ProjectPage
