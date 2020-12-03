import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/site2.jpg'
import figma from '../../images/figma.svg'
import adobe from '../../images/adobe.svg'
import netlify from '../../images/netlify.svg'
import gatsby from '../../images/gatsby-logo.svg'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Personal Website" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        alt={'image-of-personal-website-landing-page'}
        title={'Personal Portfolio'}
        description={'My personal portfolio website'}
        clientInfo={'There is no client for this project. This is the personal project on which I built this very website you are currently on.'}
        projectGoal={'The goal was to create a website that not only showcases my skills as a web developer, but is designed creatively for a unique and aesthetically pleasing look. Everything was designed from scratch in order to deliver this site from idea, to wireframe, to deployed product.'}
        buttonContent={'Visit Repo'}
        buttonLink={'https://github.com/know-mad/myportfolio'}
        tech0={gatsby}
        tech0Name={'Gatsby'}
        tech1={figma}
        tech1Name={'Figma'}
        tech2={adobe}
        tech2Name={'Adobe'}
        tech3={netlify}
        tech3Name={'Netlify'}
       />

    </div>

  </Layout>
)

export default PortfolioPage
