import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Link } from 'gatsby'

import webDesign from '../../images/gummy-app-development.svg'
import webDesign2 from '../../images/gummy-programming.svg'

const WebDesignPage = () => (
    <Layout>
        <SEO 
            title='Web Design NYC' 
            description='As a creative David Velez produces custom websites to fit all of your business needs'
            />
        <div className='services-page-container'>
            <section>
                <div className='web-banner'>
                    <div className='banner-inner'>
                        <h1>WEB DESIGN</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2>WEB DESIGN & DEVELOPMENT</h2>
                    <p>
                    I love taking on challenges! With collaboration at my core, I 
                    am ready to work with you to hand craft winning web solutions. I excel at listening and then acting 
                    on your needs, to deliver a successful web design. I'm a New York City experts who is equipped with the 
                    knowledge, experience and passion needed to get the job done and am poised to deliver a wide range 
                    of website design and development services.
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <p>
                        I have worked with startups, small businesses and large corporations to provide professional and reliable website 
                        design and SEO with measurable results. I've also helped companies in New York City and around the globe gain 
                        a competitive edge in their industry while providing an unmatched level of personal attention and customer support.
                        </p>
                    </div>
                    <div className='section-md-right'>
                        <img style={{height: '100%', width: '100%'}} src={webDesign} alt='web-design-icons' />
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2> MY BUSINESS IS BUILT ON RELATIONSHIPS </h2>
                    <p>
                        It sounds cliche, but it’s true. I believe that repeat business 
                        and growth stems from great work that keeps my clients coming back and NOT on sales pitches, but 
                        a true partnership with measurable results. This is why many of my clients that have been with me throughout my career return again and again.
                        I take your investment in your business’ website and online marketing very seriously.  With critical focus 
                        on providing my clients the best web design solutions in New York City and beyond.
                        <br/>
                        <br/>
                        I'm always sharpening my skills and utilizing the latest and greatest technologies to help my clients achieve their 
                        online sales goals year in and year out. I stay true to my philosophy that effective website and eCommerce solutions 
                        combine a great web design, user experience, rock-solid technology and integrated web marketing.
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <p>
                            I am an experienced and passionate professional that lives and breathe web design and development. All of my
                            services are offered in-house and are integrated to exceed your business requirements.  I am a  pioneer in presenting 
                            genuine & inventive web design, web development and search engine optimization solutions in slicing, adaptation, assimilation 
                            and customization services.
                        </p>
                    </div>
                    <div className='section-md-right'>
                        <img style={{height: '100%', width: '100%'}} src={webDesign2} alt='web-design-icon'/>
                    </div>
                </div>
            </section>

            <section>
            <div className='showcase-projects-bottom'>
            <p>
                Request a web design consultation today!
            </p>
            <Link to='/contact/' id='page-link'>Contact Me</Link>
          </div>
            </section>
        </div>
     </Layout>
)

export default WebDesignPage