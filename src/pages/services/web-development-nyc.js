import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Link } from 'gatsby'

import usingApp from '../../images/using-app.svg'
import laptop from '../../images/gummy-macbook.svg'

const WebDevPage = () => (
    <Layout>
        <SEO 
        title='NYC Web development' 
        description='David Velez devolps custom made web and mobile applications to fit your business needs'
        />
        <div className='services-page-container'>
            <section>
                <div className='app-banner'>
                    <div className='banner-inner'>
                        <h1>APPLICATIONS</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2>APPS INCREASE CUSTOMER ENGAGEMENT</h2>
                    <p>
                    Mobile apps are a great strategy to keep your customers engaged with your brand, offering unique 
                    features that are more engaging than Web. Apps can prompt both potential and current customers to engage, and 
                    continue to engage, with your business. More specifically, they act like gentle reminders that pull your customers
                     back to your business.
                    <br/>
                    <br/>
                    An app offers your customers a more convenient way to browse, shop and interact with a brand, with easily 
                    accessible information right at their fingertips. As a result, your brand is right in the palm of your customer’s hand. More 
                    importantly, the more often your customers are engaged and interact with your brand, the more inclined they will 
                    be to buy your product and/or service. With all the noise out there it is easy for businesses to lose impact on their 
                    customers. 
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                    <p>
                        As the mobile ecosystem continues to expand businesses are creating mobile apps to capture the 
                        connected consumer and reach an even wider and more engaged market than before. A mobile app offers a 
                        unique ‘walled-garden’ environment allowing businesses to increase interactions and make true connections with 
                        their customers. This ‘walled’ branded environment provides app users with a constant and seamless experience; reducing 
                        noise and clutter whilst increasing engagement with your brand.
                    </p>
                    </div>
                    <div className='section-md-right'>
                        <img style={{height: '100%', width: '100%'}} src={usingApp} alt='nyc-web-development'/>
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2>APPS PROVIDE AN IMMERSIVE EXPERIENCE</h2>
                    <p>
                    One significant advantage of a mobile app is that it provides businesses with the opportunity to personalise their 
                    communications. By leveraging user profile information, companies are able to engage their customers individually in
                    real-time. This is extremely important when more than 70% of consumers expect personalised experiences with the brands 
                    they interact with. An app provides brands with the tremendous opportunity to offer a highly personalised user experience 
                    and develop deeper relationships with customers. This, in turn, leads to better outcomes and engagement with the 
                    brand. App user profile information can be leveraged to deliver highly segmented and personalised communications to each 
                    user based on their individual preferences
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <p>
                            One of the most important things an app offers to consumers is awareness of and communication with your brand. It provides 
                            an environment where regular interaction with your target market can foster trust and loyalty. Not to mention, the more 
                            frequently a consumer is exposed to your brand, the higher their intent to purchase becomes. It is for this reason that mobile 
                            apps are considered an effective strategy for promoting and building brands.
                            <br/>
                            <br/>
                            In today’s competitive world, mobile apps are one of the best tools for exponentially enhancing the visibility of your brand. This can 
                            be achieved by creating an app that has features your customers will love, while at the same time is well branded and intuitively designed
                        </p>
                    </div>
                    <div className='section-md-right'>
                    <img style={{height: '100%', width: '100%'}} src={laptop} alt='nyc-web-development'/>
                    </div>
                </div>
            </section>

            <section>
            <div className='showcase-projects-bottom'>
            <p>
                Request an app development consultation today!
            </p>
            <Link to='/contact/' id='page-link'>CONTACT ME</Link>
          </div>
            </section>
         </div>
    </Layout>
)

export default WebDevPage