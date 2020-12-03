import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/site3.jpg'
import netlify from '../../images/netlify.svg'

const SimonPage = () => (
  <Layout>
    <SEO title="Project Website" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        alt={'image-of-simon-game'}
        title={'SIMON'}
        description={'Web Application of SIMON game'}
        clientInfo={'There is no client for this project'}
        projectGoal={'The goal was to create a fully functional web version of the Hasbro game SIMON using the React.js framework in order to showcase my understanding of the React library by creating the game visuals, and logic using said library. '}
        buttonContent={'Visit App'}
        buttonLink={'https://hungry-feynman-7e3a89.netlify.app/'}
        tech1={netlify}
        tech1Name={'Netlify'}
       />

    </div>

  </Layout>
)

export default SimonPage
