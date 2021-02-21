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
            <h1>APP</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='section-sm'>
          <div className='section-sm-left'>
            <h2>Custom E-Commerce App</h2>
            <a href='https://github.com/know-mad/ecommerce' target="_blank"  rel="noreferrer" id='page-link'>VISIT REPO</a>
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
            <p>MonogoDB</p>
            <p>Express</p>
            <p>React</p>
            <p>Node</p>
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
              Fullstack e-commerce web app for selling coding and technology related books.
              Built on the MERN stack this app is fully functional with a MonogoDB database,
              Node.js back end, and a React front end. Fully integrated payment system accepting
              all major credit cards via the Braintree API, this is a realworld e-commerce solution.
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
              This e-commerce site is deployed on a Digital Ocean subscription and is a fully
              functioning e-commerce web store for purchasing coding and technology related
              books.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ProjectPage
