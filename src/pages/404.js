import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import './index.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <div className='page-404-banner'>
        <div className='banner-inner'>
          <h1>NOT FOUND</h1>
        </div>
      </div>
    </section>

    <section>
      <div className='extra-page-container'>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness :-(</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
