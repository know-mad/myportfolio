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
            title='NYC Web Designer' 
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
                    <h2>FASTER, BETTER, STRONGER</h2>
                    <p>
                    By building with the latest technology, I empower businesses with web assets that are faster, better, and have stronger
                    results than those other agencies and "wanna-be" developers who use old and antiquated technologies like Wordpress. The problem with 
                    these wordpress developers is that they offer a sub-par product that lacks any real value in both performance or optimization and 
                    often provides no real return on investment. With collaboration at my core, I 
                    am ready to work with you to hand craft winning web solutions because I excel at listening and then acting 
                    on your needs, to deliver a successful web asset that provides a return on your investment.
                    <br/>
                    <br/>
                    I take your investment in your business’ website and online marketing very seriously. With critical focus 
                    on providing  the best web design solutions in the market.  My websites are hand-crafted and user friendly while 
                    providing innovative website development and digital marketing that delivers actual results. 
                    I have designed a great number of websites for clients in many different industries and have had the opportunity to 
                    work with some great clients in NYC, Canada, South America, Asia and globally. Whether you choose to go with me for your
                    web project or not, please take in to consideration the technologies being used to build your product. Ask any development 
                    agency or developer to prove to you that they can deliver the results you need and expect rather than simply a website
                    that provides no real return. <span style={{color: `#b007a8`}}>And when they tell you they build wordpress websites....go ahead and contact me to get the job done right :-)</span>
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <h2>NOT ALL WEBSITES ARE CREATED EQUAL</h2>
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
                        <h2>I LOVE THIS STUFF</h2>
                        <p>
                            I am an experienced and passionate professional that lives and breathe web design and development. All of my
                            services are offered in-house and are integrated to exceed your business requirements. I am a  pioneer in presenting 
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
                <div style={{marginBottom: `0`}} className='contact-banner'>
                <div className='contact-banner-left'>
                    <p>
                    Ready to start your web project?
                    </p>
                </div>
                <div className='contact-banner-right'>
                    <Link style={{width: `25em`}} id='contact-link' to='/contact/'>START YOUR WEB PROJECT</Link>
                </div>
                </div>
            </section>
        </div>
     </Layout>
)

export default WebDesignPage