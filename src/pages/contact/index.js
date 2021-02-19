import React from 'react'
import Layout from '../../components/layout'
import ContactForm from '../../components/ContactForm'
import SEO from "../../components/seo"
import './index.css'


const ContactPage = () => (
  <Layout>
  <SEO title="NYC Web Design Services" />
    <div className='contact-page-container'>
    <section>
      <div className='contact-me-banner'>
        <div className='banner-inner'>
          <h1>CONTACT ME</h1>
        </div>
      </div>
    </section>

    <section>
      <div className='contact-message'>
        <p>
          Please leave your details and a brief project description and I'll reach out as soon as posible.
          <br/>
          <br/>
          I'm looking forward to working with you and seeing what we can create toghether.
        </p>
      </div>
    </section>

    <section>
      <div className='contact-page-form-container'>
        <ContactForm/ >
      </div>
    </section>
    </div>
  </Layout>
)

export default ContactPage
