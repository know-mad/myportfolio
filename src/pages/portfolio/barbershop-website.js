import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/site1.jpg'
import figma from '../../images/figma.svg'
import adobe from '../../images/adobe.svg'
import gatsby from '../../images/gatsby-logo.svg'

const BarbershopPage = () => (
  <Layout>
    <SEO title="Client Website" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        alt={'image-of-barbershop-website-landing-page'}
        title={'Aziatic Hair Studio'}
        description={'A barbershop website'}
        clientInfo={'Aziatic Hair Studio is a single chair barber experience located in Manassas, VA.'}
        projectGoal={'The goal was to create a website that was informative, easy to navigate and helped clients book appointments easily without having to leave the home page. '}
        buttonContent={'Visit Website'}
        buttonLink={'https://priceless-kilby-97b7f4.netlify.app/'}
        tech0={gatsby}
        tech0Name={'Gatsby'}
        tech1={figma}
        tech1Name={'Figma'}
        tech2={adobe}
        tech2Name={'Adobe'}
       />

    </div>

  </Layout>
)

export default BarbershopPage
