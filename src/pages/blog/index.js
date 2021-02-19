import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'


const BlogPage = () => (
  <Layout>
  <SEO title='Blog'/>
  <div className='blog-page-container'>
    <section>
      <div className='blog-banner'>
        <div className='banner-inner'>
          <h1>BLOG</h1>
        </div>
      </div>
    </section>

    <div className='blog-content'>
      <h2>Under Construction</h2>
    </div>
  </div>
  </Layout>
)

export default BlogPage
