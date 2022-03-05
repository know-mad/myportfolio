import React from 'react'
import './index.css'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { Link } from 'gatsby'

import onewsq from '../../images/1wsq.jpg'

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
            <h2>1 Willoughby Square</h2>
            <a href='https://hungry-feynman-7e3a89.netlify.app/' target="_blank"  rel="noreferrer" id='page-link'>VISIT APP</a>
            <Link to='/projects/' id='contact-link'>BACK</Link>
          </div>
          <div className='section-sm-right'>
            <img src={onewsq} alt='web-design-project' />
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
              1 Willoughby Square, is Brooklyn’s first ground-up office tower in a generation. 1WSQ 
              opens directly to the 1-acre Willoughby Square Park and climbs 34 stories above Brooklyn 
              to offer unobstructed views of New York’s skylines and waterways.
              <br/>
              <br/>
              The 14,500-square-foot floorplates at 1WSQ feature impressive column-free lease spans 
              and 14-foot slab heights. Interiors and landscaped terraces overlook the new Willoughby 
              Square Park and reveal 360-degree vistas from New York Harbor to Prospect Park. Multilevel 
              occupants will experience connected floors with 28-foot clearances.
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
              The successful implementation and deployment of the company web asset is a fully
              custom web app built on React. With direction from the company's design team, I was 
              able to bring to life it's vision of a unique user interface coupled with an immersive 
              user experience.
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
