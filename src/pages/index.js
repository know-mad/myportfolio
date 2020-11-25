import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"


import Intro from '../components/Intro'
import About from '../components/About'
import Contact from '../components/Contact'
import Quote from '../components/Quote'
import Technologies from '../components/Technologies'
import DesignPortfolio from '../components/DesignPortfolio'
import WebDesign from '../components/WebDesign'
import BannerImage from '../components/BannerImage'
import PageBreak from '../components/PageBreak'




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BannerImage />
    <Intro />
    <About />
    <Quote content={'through technology we are actively inventing tomorrow'}/>
    <Technologies />
    <PageBreak />
    <WebDesign />
    <PageBreak />
    <DesignPortfolio />
    <Contact />
  </Layout>
)

export default IndexPage





// import Nav from '../components/Nav'




//
// <div className='container'>
//   <SEO title="Home" />
//
//     <div className='banner-container'>
//       <BannerImage />
//     </div>
//
//     <Nav
//       link1={<Link><li>home</li></Link>}
//       link2={<Link to='/portfolio/'><li>portfolio</li></Link>}
//       link3={<Link to='/blog/'><li>blog</li></Link>}
//       link4={<Link to='contact/'><li>contact</li></Link>}
//     />
//     <Intro />
//     <About />
//     <Quote
//       content={'through technology we are actively inventing tomorrow'}/>
//     <Technologies />
//     <PageBreak />
//     <WebDesign />
//     <PageBreak />
//     <DesignPortfolio />
//     <Contact />
//     <Footer />
//   </div>
