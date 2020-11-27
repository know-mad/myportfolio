import React from 'react'
import './blog.css'
import SEO from "../components/seo"
import Layout from '../components/layout'
import PageBreak from '../components/PageBreak'


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className='blog-container'>

      <div className='blog-intro'>
      <h1>Blog</h1>
      <p style={{fontSize: '1.25rem'}}>Check out some cool content</p>
      </div>

    </div>

    <PageBreak />

  </Layout>
)

export default BlogPage
