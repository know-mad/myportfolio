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
            For more than 10 years, J. Queen New York has been creating beautifully crafted, classic 
            bedding and home products. It began in 2009 when their talented team equipped with decades 
            of home textile experience collaborated to design and launch their first inspired collection 
            of luxury bedding, bath and window products.
            <br/>
            <br/>
            Their design inspiration came from their travels around the country and around the world.
            Today they continue to be inspired by all the different lifestyles and aesthetics they encounter 
            worldwide, and their array of brands reflect this diversity. Thier mission is to inspire 
            those looking to create their own special space, be it one that appeals to a traditional 
            aesthetic, contemporary leaning, or their love of all things country and fresh.
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
              The outcome for this project was a successful implementation 
              of the clients vision via a fully optimized and responsive
              e-commerce solution built on the Shopify platform, featuring responsive 
              design and a mobile first approach that allows for potential clients in their 
              space to shop online for the company's goods and services locally, nationally, and globally.
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