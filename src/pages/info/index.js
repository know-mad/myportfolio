import React from 'react'
import './info.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import PageBreak from '../../components/PageBreak'
import Info from '../../components/Info'


const AboutPage = () => (
  <Layout>
    <SEO title="Information" />
    <div className='info-container'>

      <div className='info-intro'>
      <h1>Information</h1>
      <p>You've got questions, I've got answers.</p>
      </div>

      <PageBreak />

      <Info />

    </div>

  </Layout>
)

export default AboutPage
