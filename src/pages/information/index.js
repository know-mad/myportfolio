import React from 'react'
import './Information.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import PageBreak from '../../components/PageBreak'
import BlogComponent from '../../components/BlogComponent'


const InfoPage = () => (
  <Layout>
    <SEO title="Information" />
    <div className='info-container'>

      <div className='info-intro'>
      <h1>Information</h1>
      <p>FAQ's and General Information</p>
      </div>

      <PageBreak />

      <BlogComponent />

    </div>

  </Layout>
)

export default InfoPage
