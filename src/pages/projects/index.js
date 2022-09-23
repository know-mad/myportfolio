import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Projects from '../../components/Projects'
import { Link } from 'gatsby'

// import az from '../../images/az.jpg'
// import cpa from '../../images/cpa.jpg'
import toboot from '../../images/toboot.jpg'
import jqueen from '../../images/jqueen.jpg'
import arch from '../../images/architessa.jpg'
import portfolio from '../../images/portfolio.jpg'
import blog from '../../images/blog.jpg'
import onewsq from '../../images/1wsq.jpg'
import cotripp from '../../images/cotripp.jpg'
import ecommerce from '../../images/ecommerce.jpg'

const PortfolioPage = () => (
  <Layout>
  <SEO 
    title='NYC Website Design Company'
    description='David Velez provides quality web design services for businesses and individuals looking to enhance their digital marketing outreach'
  />
    <div className='portfolio-page-container'>
      <section>
        <div className='portfolio-banner'>
          <div className='banner-inner'>
            <h1>PROJECTS</h1>
          </div>
        </div>
      </section>

      <section>
        <div className='info-section-sm'>
          <h2>WEB DESIGN & DEVELOPMENT</h2>
            <p>
            My skillset is built on relationships – it sounds cliche, but it’s true. I 
            believe that repeat business and growth stems from great work that keeps clients 
            coming back and NOT on sales pitches, but a true partnership with measurable results. 
            <br/>
            <br/>
            I take your investment in your business’ website and online marketing very seriously. With 
            critical focus on providing my clients the best web design solutions in New York City and worldwide creating hand-crafted, bespoke 
            user friendly websites and digital marketing that delivers actual results.  
            </p>
        </div>
      </section>

      <section>
        <Projects
        toPage1={'/projects/project5/'} 
        toPage2={'/projects/project6/'} 
        backgroundImage={jqueen}
        backgroundImage2={onewsq}
        content1='J. Queen New York is a traditional bedding manufacturer that originally sold exclusively B2B to retailers like Macy’s, Bed Bath & Beyond, and more.'
        content2='1 Willoughby Square, is Brooklyn’s first ground-up office tower in a generation. 1WSQ opens directly to the 1-acre Willoughby Square Park and climbs 34 stories above Brooklyn to offer unobstructed views of New York’s skylines and waterways.'
        />
      </section>

      <section>
        <Projects
        toPage1={'/projects/project1/'}
        toPage2={'/projects/project2/'}
        backgroundImage={portfolio}
        backgroundImage2={blog}
        content1='In order to showcase my front end skills, I decided to code my business website using unique colors, interesting fonts and creative user interface layouts in order to immerse the user in a rich and engaging user experience.'
        content2="Boasting a decoupled architecture, this blog features breakneck page load speeds and was created as a dynamic website that pulls all of its data from a content management system (CMS) via modern web stacks."
        />
      </section>

      <section>
        <Projects
        toPage1={'/projects/project3/'} 
        toPage2={'/projects/project4/'} 
        backgroundImage={ecommerce}
        backgroundImage2={arch}
        content1='Fully custom e-commerce store built on a decoupled architecture. The store features dynamically generated items fetched via GraphQL from the Shopify API.'
        content2="Architessa is a new trade name for Architectural Ceramics launched in early 2021. It arose from Betty Sullivan securing a majority women-owned status in Architectural Ceramics, founded in 1985, which she joined in 1990 and started running in 2001."
        />
      </section>

      <section>
        <Projects
        toPage1={'/projects/project7/'}
        toPage2={'/projects/project8/'}
        backgroundImage={cotripp}
        backgroundImage2={toboot}
        content1='CoTripper is a Washington DC based startup built to assist traveling single moms with booking vacations. While working on a team of 8 engineers in an AGILE environment.'
        content2='To Boot’s designer Adam Derrick is the men’s footwear specialist.  He approaches each season with his customer’s lifestyle in mind and presents options that work to fulfill all their footwear needs.'/>
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


export default PortfolioPage
