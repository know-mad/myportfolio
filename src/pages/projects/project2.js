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
            <h2>"Dave Does Tech" Blog</h2>
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
              boast fast page load speeds to maximize any SEO efforts built into the site.
              <br/>
              <br/>
              Because of the nature of a blog, this site is built as a decoupled architecture website
              that displays all of its information from data that is retreived from a content management system
              that is used as a platform for creating blog posts.
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
              and boasts blazing fast page load speeds, on-page SEO, pagination, and a custom user interface
              for easy and intuitive navigation throuhout the site.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ProjectPage