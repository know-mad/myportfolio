import React from 'react'
import './contact.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import PageBreak from '../../components/PageBreak'
import ContactForm from '../../components/ContactForm'


const ContactPage = () => (
  <Layout>

    <SEO title="Contact" />
    <div className='contact-container'>
      <div className='contact-intro'>
      <h1>Contact</h1>
      <p>Please fill out the form below and I will reach out as soon as possible...</p>
      <p>I'm looking forward to seeing what we can create together !</p>
      </div>

      <PageBreak />

      <ContactForm />

    </div>

  </Layout>
)

export default ContactPage
