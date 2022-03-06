import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import cotripp from '../../images/cotripp.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Web Developers New York' />
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
            <h2>CoTripper</h2>
            <a href='https://www.cotripper.co/' target="_blank"  rel="noreferrer" id='page-link'>VISIT APP</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={cotripp} alt='web-design-project' />
          </div>
        </div>
      </section>

      <section>
        <div className='built-with-banner'>
          <div className='built-with-banner-left'>
            <p style={{color: '#0984e3'}}>Built with:</p>
          </div>
          <div className='built-with-banner-right'>
            <p>PostgreSQL</p>
            <p>Django</p>
            <p>React</p>
            <p>AWS</p>
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
              CoTripper is a Washington DC based startup built to assist traveling single
              moms with booking vacations, While working on a team of 8 engineers in an AGILE
              environment, we solved various problems and created a full stack application
              complete with a Django back end and a(n) React front end in order to provide
              users of the app a robust and user friendly experience when booking vacations.
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
              The outcome of this project is a fully functional app that allows single parents
              to book family frindly trips around the world. The CEO was fully satisfied with the
              outcome of the project and has since launched a marketing campaign to get more
              brand recognition and daily users.
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
