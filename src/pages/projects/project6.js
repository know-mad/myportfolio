import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import simon from '../../images/simon.jpg'

const ProjectPage = () => (
  <Layout>
  <SEO title='Best Web Designers NYC' />
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
            <h2>Simon</h2>
            <a href='https://hungry-feynman-7e3a89.netlify.app/' target="_blank"  rel="noreferrer" id='page-link'>VISIT APP</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={simon} alt='web-design-project' />
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
              A web version of the popular Hasbro game SIMON built with React.js. I used this
              project to implement many of Reacts advanced features such as conditional rendering,
              context, and portals (aka modals).
              <br/>
              <br/>
              Everything was built from scratch, including the layout and the design of the app, in order
              to get it as close as posible to physical board game created by Hasbro.
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
              Through critical thinking, I was able to replicate the simon logic which allows
              a player to follow along as simon creates a randomized sequence which the player
              must replicate without error in order to move on to the next level. 
              <br/>
              <br/>
              Feel free to go play!
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
