import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import toboot from '../../images/toboot.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Freelance Web Designers NYC' />
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
            <h2>To Boot New York</h2>
            <a href='https://priceless-kilby-97b7f4.netlify.app/' target="_blank"  rel="noreferrer" id='page-link'>VISIT SITE</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={toboot} alt='web-design-project' />
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
            <p>React</p>
            <p>Gatsby</p>
            <p>Netlify</p>
          </div>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='reverse-section-md-left'>
            <p style={{margin: '0'}}>project</p>
            <h2 style={{ margin: '0', fontWeight: 'bold', color: '#0984e3'}}>Information</h2>
          </div>
          <div className='reverse-section-md-right'>
            <p>
              Aziatic Hair Studio is a barbershop operating in Manassas, VA. The
              owner was in the market for an aggressive marketing strategy that
              involved a streamlined website that was clean on both desktops and
              mobile devices and allowed his clients to book appointments straight
              from the website. He also wanted the website to be optimized so that
              potential clients could find his services when looking on search engines.
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
              The website was built on the Gatsby.js platform to ensure blazing fast
              page load speeds which directly affects how the website ranks on search engines.
              Through the platform, I built a streamlined SPA type of website that allows
              clients to view all of the important business information and perform all of
              the business actions requested by the client without navigating away from the home page.
              <br/>
              <br/>
              Followed by an aggressive SEO strategy involving key word implementation for the clients desired
              outcome, I was able to get this site ranked locally for the client wich has resulted
              in a 30% uptick in inquiries for services rendered per the client.
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
