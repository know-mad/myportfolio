import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import ecomm from '../../images/ecommerce.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Ecommerce Website Design NYC' />
    <div className='portfolio-page-container'>
      <section>
        <div className='project-page-banner'>
          <div className='banner-inner'>
            <h1>E-COMMERCE</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='section-sm'>
          <div className='section-sm-left'>
            <h2>Headless Shopify Store</h2>
            <a href='https://geekystickers.io' target="_blank"  rel="noreferrer" id='page-link'>VISIT STORE</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={ecomm} alt='web-design-project' />
          </div>
        </div>
      </section>

      <section>
        <div className='built-with-banner'>
          <div className='built-with-banner-left'>
            <p style={{color: '#0984e3'}}>Built with:</p>
          </div>
          <div className='built-with-banner-right'>
            <p>Gatsby</p>
            <p>Shopify</p>
            <p>Mailchimp</p>
            <p>GraphQL</p>
            <p>Netlify</p>
          </div>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='reverse-section-md-left'>
            <p style={{margin: '0'}}>project</p>
            <h2 style={{ margin: '0', fontWeight: 'bold', color: '#0984e3'}}>Info</h2>
          </div>
          <div className='reverse-section-md-right'>
            <p>
            Objective was to create an e-commerce store built on a decoupled architecture. The store features dynamically generated 
            items fetched via GraphQL from the Shopify API. In order trigger site rebuilds whenever content is modified on the CMS, the 
            project features a serverless function to listen for specific events coming from the Shopify API and trigger a site rebuild 
            updating any data that needs to be displayed on the front end. The shopping cart retains items across sessions, so customers 
            that leave the site before checking out will have their previously added items still available in their shopping cart when 
            they return to the site. The front-end of this site features data pased and shared between components via React's Context API 
            and is built on the Gatsby.js platfrom, not only maximizing page load speeds and SEO, but allowing for the building and implementation 
            of a custom built theme.
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
              This e-commerce site is deployed on Netlify and boasts a decoupled architecture with serverless functions to provide a fully
              functioning e-commerce web store for purchasing items. The decoupled architecture allows for granular
              customization of the user interface, as well as fast page loads to maximize all SEO efforts.
              <br/>
              <br/>
              Features of this project include:
              <ul>
                <li>Dynamic content served via Shopify API</li>
                <li>Programatically created pages</li>
                <li>Decoupled architecture</li>
                <li>Serverless functions</li>
                <li>Checkout cart</li>
                <li>Persistent cart items</li>
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
