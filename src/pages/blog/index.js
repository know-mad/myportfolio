import React from 'react'
import './info.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import PageBreak from '../../components/PageBreak'
import Info from '../../components/Info'


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className='info-container'>

      <div className='info-intro'>
      <h1>Blog</h1>
      <p>content coming soon</p>
      </div>

      <PageBreak />

      <Info />

    </div>

  </Layout>
)

export default BlogPage
