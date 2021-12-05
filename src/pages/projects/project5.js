import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import jqueen from '../../images/jqueen.jpg'

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
            <h2>J. Queen New York</h2>
            <a href='https://jqueen-ny.com/' target="_blank"  rel="noreferrer" id='page-link'>VISIT SITE</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={jqueen} alt='web-design-project' />
          </div>
        </div>
      </section>

      <section>
        <div className='built-with-banner'>
          <div className='built-with-banner-left'>
            <p style={{color: '#0984e3'}}>Built with:</p>
          </div>
          <div className='built-with-banner-right'>
            <p>Shopify</p>
            <p>Liquid</p>
            <p>HTML</p>
            <p>CSS</p>
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
              Kevin Rich is a certified public accountant with an accounting practice in the 
              Baltimore-Washington DC corridor. The client already had a wewbsite that was not getting 
              him any results. He wanted to be able to leverage his website to gain new prospective 
              clients for his business.
              <br/>
              <br/>
              This project was a complete overhaul of his previeous web strategy,
              which included a new logo design, custom lead generation funnels, custom forms,
              social media outreach and SEO services for marketing campaigns.
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
              The outcome for this project was a successful implementation and rebranding 
              of the clients web presence via an fully optimized and responsive
              web asset that allows for potential clients in their local market to find and
              ultimately contact the business for their services.
              <br/>
              <br/>
              The website is built on a(n) static architecture that boasts blazing fast page load
              speeds, on page SEO, and social media integration so that the client is able to 
              market his services with more flexibility and within more avenues to increase the visibility
              of his business and ultimately land more leads. 
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