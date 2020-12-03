import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/site4.jpg'
import django from '../../images/django-community.svg'
import python from '../../images/python-5.svg'
import postgres from '../../images/postgresql.svg'


const CotripPage = () => (
  <Layout>
    <SEO title="Project Website" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        alt={'image-of-application-landing-page'}
        title={'CoTripper'}
        description={'Travel Assistance Application'}
        clientInfo={'The client was Krystin Hargrove the CEO of the CoTripper platform which is a Washington DC based startup founded in 2019.'}
        projectGoal={'CoTripper is an all-in-one community and family travel booking platform for single moms. Their experiences are facilitated by sustainable-industry leading travel organizations. With over 12 million US homes led by single mothers, raising over 22 million children, we believe travel should be accessible to all family types. They exist to build community and simplify the way single moms and their children explore the world around us.'}
        buttonContent={'Visit App'}
        buttonLink={'https://www.cotripper.co/'}
        tech0={python}
        tech0Name={'Python'}
        tech1={django}
        tech1Name={'Django'}
        tech2={postgres}
        tech2Name={'PostgreSQL'}
       />

    </div>

  </Layout>
)

export default CotripPage
