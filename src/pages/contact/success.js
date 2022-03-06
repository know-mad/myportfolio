import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import logo from '../../images/color-logo.svg'


const SuccessPage = () => (
  <Layout>
    <section>
      <div className='success-banner'>
        <div className='banner-inner'>
          <h1>AWESOME</h1>
        </div>
      </div>
    </section>

    <section>
      <div className='info-section-sm'>
        <h2>SUCCESS...YOU DID IT!</h2>
        <p>
          I can't wait to see what we create together!
        </p>
      </div>
    </section>
    <section>
      <div className="success-page-logo-container">
        <img src={logo} alt='web-designer-logo'/>
      </div>
    </section>
  </Layout>
)

export default SuccessPage
