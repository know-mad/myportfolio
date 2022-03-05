import React from 'react'
import { Link } from 'gatsby'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import arrow from '../../images/right-arrow.svg'


const ServicesPage = () => (
  <Layout>
  <SEO title='Website Design Agency NYC' />
  <div className='services-page-container'>
   <section>
      <div className='portfolio-banner'>
        <div className='banner-inner'>
          <h1>SERVICES</h1>
        </div>
      </div>
    </section>

  <section>
  <div className='info-section-sm'>
    <h2>SERVICE PACKAGES</h2>
        <p>
           With collaboration at my core, I am ready to work with you to hand craft 
           a winning web solution! I excel at listening and then acting on your needs, to 
           deliver a successful web design collaboration. Equipped with the knowledge, experience 
           and passion needed to get the job done I am poised to deliver a wide range of website 
           design and development services. 
          </p>
        </div>
  </section>

  <section>
    <div className='packages-container'>
      <div className='service-package'>
        <div className='service-package-title'>
          <h2>STARTER</h2>
        </div>
        <div className='service-package-content'>
          <ul>
            <li>Static Web Site</li>
              <ul>
                <li style={{color: '#F446EC'}}>No e-commerce</li>
              </ul>
            <li>5 pages maximum</li>
              <ul>
                <li style={{color: '#F446EC'}}>Extra charge per page beyond 5</li>
              </ul>
            <li>Mobile Responsive</li>
            <li>Contact Form</li>
            <li>1 Revision Round</li>
          </ul>
        </div>
        <div className='service-package-cta'>
          <Link id='services-link' to={'/contact/'}><img src={arrow} alt='right-arrow-icon'/></Link>
          <p>CHOOSE THIS PACKAGE</p>
        </div>
      </div>

      <div className='service-package'>
        <div className='service-package-title'>
          <h2>PRO</h2>
        </div>
        <div className='service-package-content'>
        <ul>
            <li>E-commerce/Dynamic Web Site</li>
            <li>On-page SEO</li>
            <li>Social Media Integration</li>
            <li>Mobile Responsive</li>
            <li>Contact Form</li>
            <li>Google Analytics</li>
            <li>404 Redirect</li>
            <li>XML Sitemap</li>
            <li>Robots.txt file</li>
            <li>2 Revision Rounds</li>
          </ul>
        </div>
        <div className='service-package-cta'>
          <Link id='services-link' to={'/contact/'}><img src={arrow} alt='right-arrow-icon'/></Link>
          <p>CHOOSE THIS PACKAGE</p>
        </div>
      </div>

      <div className='service-package'>
        <div className='service-package-title'>
          <h2>ELITE</h2>
        </div>
        <div className='service-package-content'>
        <ul>
            <li>E-commerce/Dynamic Web Site/App</li>
            <li>Custom Photography</li>
            <li>Social Media Integration</li>
            <li>Mobile Responsive</li>
            <li>Contact Form</li>
            <li>Custom Logo</li>
            <li>Custom User Interface</li>
            <li>Google Maps</li>
            <li>Google Analytics</li>
            <li>Facebook Pixel</li>
            <li>Mailing List Plugin</li>
            <li>On-page SEO</li>
            <li>404 Redirect</li>
            <li>Robots.txt file</li>
            <li>XML Sitemap</li>
            <li>3 Revision Rounds</li>
          </ul>
        </div>
        <div className='service-package-cta'>
          <Link id='services-link' to={'/contact/'}><img src={arrow} alt='right-arrow-icon'/></Link>
          <p>CHOOSE THIS PACKAGE</p>
        </div>
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

export default ServicesPage
