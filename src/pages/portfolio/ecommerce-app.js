import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/site5.jpg'
import mongo from '../../images/mongodb.svg'
import express from '../../images/express-109.svg'
import node from '../../images/nodejs-1.svg'


const EcommPage = () => (
  <Layout>
    <SEO title="Project Application" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        alt={'image-of-application-landing-page'}
        title={'E-commerce'}
        description={'A full stack e-commerce store'}
        clientInfo={'No client for this project. This was a personal project to build a full stack application using the MERN stack in development '}
        projectGoal={'The goal was to create a fully functional full stack application with a NoSQL databasse and a REact front end for the user interface.  This app is built on the MERN stack (MongoDB, Express.js, React.js, Node.js).'}
        buttonContent={'Visit Repo'}
        buttonLink={'https://github.com/know-mad/ecommerce'}
        tech0={mongo}
        tech0Name={'MongoDB'}
        tech1={express}
        tech1Name={'Express.js'}
        tech2={node}
        tech2Name={'Node.js'}
       />

    </div>

  </Layout>
)

export default EcommPage
