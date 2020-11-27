import React from 'react'
import './contact.css'
import SEO from "../components/seo"
import Layout from '../components/layout'
import PageBreak from '../components/PageBreak'
import ContactForm from '../components/ContactForm'


const ContactPage = () => (
  <Layout>

    <SEO title="Contact" />
    <div className='contact-container'>
      <div className='contact-intro'>
      <h1>Contact</h1>
      <p style={{fontSize: '1.25rem', margin: '2px'}}>Please fill out the form below and I will reach out as soon as possible...</p>
      <p style={{fontSize: '1.25rem', margin: '2px'}}>I'm looking forward to seeing what we can create together !</p>
      </div>
    </div>

    <PageBreak />

    <ContactForm />

  </Layout>
)

export default ContactPage
