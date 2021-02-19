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
      <div className='extra-page-container'>
        <p>
          You did it!
          <br/>
          <br/>
          I can't wait to see what we create together!
        </p>

        <img src={logo} alt='web-designer-logo'/>
      </div>
    </section>
  </Layout>
)

export default SuccessPage
