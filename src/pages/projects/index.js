import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Projects from '../../components/Projects'
import { Link } from 'gatsby'

import az from '../../images/az.jpg'
import md from '../../images/mdbest.jpg'
import portfolio from '../../images/portfolio.jpg'
import simon from '../../images/simon.jpg'
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
        <div className='portfolio-intro'>
          <h1>FEATURED PROJECTS</h1>
        </div>
      </section>

      <section>
        <Projects
        toPage1={'/projects/project1/'}
        toPage2={'/projects/project2/'}
        backgroundImage={az}
        backgroundImage2={md}
        content1='Aziatic Hair Studio is a barbershop operating in Manassas, VA. The owner was in the market for an aggressive marketing strategy that involved...'
        content2="Maryland's Best Home Improvements is a home renovations company operating out of Baltimore, MD. In order to gain more clients they..."
        />
      </section>

      <section>
        <Projects
        toPage1={'/projects/project3/'}
        toPage2={'/projects/project4/'}
        backgroundImage={portfolio}
        backgroundImage2={simon}
        content1='In order to showcase my front end skills, I decided to code my business website using unique colors, interesting fonts and creative....'
        content2='A web version of the popular Hasbro game SIMON built with React.js. I used this project to implement many of Reacts advanced...'
        />
      </section>

      <section>
        <Projects
        toPage1={'/projects/project5/'}
        toPage2={'/projects/project6/'}
        backgroundImage={cotripp}
        backgroundImage2={ecommerce}
        content1='CoTripper is a Washington DC based startup built to assist traveling single moms with booking vacations. While working on a team of 8 engineers in an AGILE environment...'
        content2='Fullstack e-commerce web app for selling coding and technology related books. Built on the MERN stack this app...'
        />
      </section>

      <section>
        <div className='portfolio-outro'>
          <p>
            Ready to get started on your project?
          </p>
          <Link id='page-link' to='/contact/'>GET STARTED</Link>
        </div>
      </section>
    </div>
  </Layout>
)


export default PortfolioPage