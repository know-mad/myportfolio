import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/site6.jpg'
import python from '../../images/python-5.svg'
import postgres from '../../images/postgresql.svg'

const KushPage = () => (
  <Layout>
    <SEO title="Personal API Project" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        alt={'image-of-personal-website-landing-page'}
        title={'Kush API'}
        description={'API for all U.S. dispensaries'}
        clientInfo={'There is no client for this project. This is the personal project on which I built an API for consumption.'}
        projectGoal={'The goal was to create an Application Programming Interface (API), by webscrapping a website to put together a comprehensive list of all of the marijuana dispensaries in the United States.'}
        buttonContent={'Visit Repo'}

        tech0={python}
        tech0Name={'Python'}
        tech1={postgres}
        tech1Name={'PostgreSQL'}
       />

    </div>

  </Layout>
)

export default KushPage
