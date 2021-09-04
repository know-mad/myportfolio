import React from 'react'
import { Link } from 'gatsby'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import arrow from '../../images/right-arrow.svg'
import webDesign from '../../images/web-design-icon.svg'
import coding from '../../images/coding.svg'
import shoppingCart from '../../images/shopping-cart-icon.svg'


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
        <div className='section-md-column'>
          <div className='services-container'>
            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={webDesign} alt='web-design-services'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>WEB DESIGN</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>
                  No cookie cutter wordpress sites here! I design and create custom websites built on modern technology
                  stacks that generate blazing fast page load speeds coupled with aesthetics to match.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/web-design-services-nyc/'}><img src={arrow} alt='right-arrow-icon'/></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={shoppingCart} alt='seo-services'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>E-COMMERCE</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>
                  There's no way around it...doing business in the digital age means having to sell online.
                  I provide robust and scalable e-commerce solutions that allow you or your business to 
                  sell products on the world wide web.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/ecommerce-web-design-nyc/'}><img src={arrow} alt='right-arrow-icon'/></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={coding} alt='web-developmen-code'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>APPS</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>
                  Mobile business applications have become a necessary marketing tool for all businesses, regardless of the size 
                  of their industries. A mobile app can help a small business engage with and build their customer 
                  base, drive sales, and improve their reputation.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/web-development-nyc/'}><img src={arrow} alt='right-arrow-icon'/></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section>
  <div className='service-info-section'>
    <h2>SERVICE PACKAGES</h2>
        <p>
            My professional approach to web development is reflected in my process
           and collaborative approach. I have a highly transparent and collaborative
           style and detail all tasks involved with your project so that it is
           to your standards along the way. 
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
                <li style={{color: '#0984e3'}}>No e-commerce</li>
              </ul>
            <li>5 pages maximum</li>
              <ul>
                <li style={{color: '#0984e3'}}>Extra charge per page beyond 5</li>
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
