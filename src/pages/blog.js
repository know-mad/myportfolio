import React from 'react'
import './blog.css'
import SEO from "../components/seo"
import Layout from '../components/layout'
import PageBreak from '../components/PageBreak'
import BlogComponent from '../components/BlogComponent'


const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className='blog-container'>

      <div className='blog-intro'>
      <h1>Blog</h1>
      <p>Cool content coming soon !</p>
      </div>

      <PageBreak />

      <BlogComponent />

    </div>

  </Layout>
)

export default BlogPage
