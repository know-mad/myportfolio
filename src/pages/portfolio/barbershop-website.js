import React from "react"
import './portfolio.css'
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import SingleProject from '../../components/SingleProject'

import photo from '../../images/az-studio.jpg'

const BarbershopPage = () => (
  <Layout>
    <SEO title="Client Website" />

    <div className='portfolio-container'>


      <SingleProject
        image={photo}
        title={'Aziatic Hair Studio'}
        description={'A barbershop website'}
       />

    </div>

  </Layout>
)

export default BarbershopPage
