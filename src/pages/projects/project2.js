import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import blog from '../../images/blog.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Custom Website Design NYC' />
    <div className='portfolio-page-container'>
      <section>
        <div className='project-page-banner'>
          <div className='banner-inner'>
            <h1>BLOG</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='section-sm'>
          <div className='section-sm-left'>
            <h2>Tech Blog</h2>
            <a href='https://blog.davidvelez.io' target="_blank"  rel="noreferrer" id='page-link'>VISIT BLOG</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={blog} alt='web-design-project' />
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
            <p>GraphQL</p>
            <p>Netlify</p>
            <p>Contentful</p>
            <p>MailChimp</p>
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
              In order to take advantage of a content marketing strategy, I decided to build a blog.
              The goal of this project was to build a platform that allowed me to create content in 
              an efficient manner. This platform needed to be easy to navigate on the back end, and still 
              boast fast page load speeds to maximize any SEO efforts built into the site. Another feature of 
              the site is an email gathering funnel to build an email list for marketting purposes.
              <br/>
              <br/>
              Because of the nature of a blog, this site is built as a decoupled architecture website
              that displays all of its information from data that is retreived from a content management system
              that is used as a platform for creating blog posts. The content needed to update on the website
              whenever it was modified on the back end.
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
              The outcome for this project was a successful implementation of a website built with a
              decoupled architecture. The blog is a fully optimized and responsive
              web asset that allows for the implementation of a content marketing strategy 
              and boasts an email gathering feature through Mailchimp, blazing fast page load speeds with Gatsby.js, on-page SEO, 
              pagination, a custom user interface for easy and intuitive navigation throughout the site and webhooks that trigger
              a build on the website whenever content is modified on the content management system.
            <br/>
            <br/>
            This project features:
            <ul>
              <li>Dynamic content served via CMS</li>
              <li>Programatically created pages</li>
              <li>Decoupled CMS architecture</li>
              <li>Pagintation</li>
              <li>Dark/Light theme toggle</li>
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