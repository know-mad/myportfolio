import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import arch from '../../images/architessa.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Custom Website Design NYC' />
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
            <h2>Architessa</h2>
            <a href='https://www.marylandsbesthomeimprovements.com/' target="_blank"  rel="noreferrer" id='page-link'>VISIT SITE</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={arch} alt='web-design-project' />
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
              Maryland's Best Home Improvements is a home renovations company operating
              out of Baltimore, Maryland. In order to gain more clients and improve their
              marketing outreach, they asked for a website whose primary focus was to
              generate leads from visitors to the site looking for any of the
              services offered by the company.
              <br/>
              <br/>
              This project was a complete overhaul of the company's previous marketing strategy,
              which included a new logo design, social media outreach and SEO services for
              marketing campaigns.
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
              The outcome for this project was a successful implementation of the
              company's rebranding and web presence via an fully optimized and responsive
              web asset that allows for potential clients in their local market to find and
              ultimately contact the company for their services.
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
