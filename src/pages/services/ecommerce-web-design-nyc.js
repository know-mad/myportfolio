import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Link } from 'gatsby'

import payment from '../../images/payment.svg'
import growth from '../../images/money-tree.svg'

const SEOPage = () => (
    <Layout>
        <SEO 
            title='Ecommerce website design NYC' 
            description='David Velez provides SEO services for businesses looking to get their websites ranking higher on search engines.'
            />
        <div className='services-page-container'>
            <section>
                <div className='e-commerce-banner'>
                    <div className='banner-inner'>
                        <h1>E-COMMERCE</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2>E-COMMERCE: It's all about maximizing your reach</h2>
                    <p>
                        Ecommerce is a huge part of the economy and is vital to businesses that sell their products 
                        or services online. Ecommerce gives businesses the ability to reach more customers than 
                        traditional retail reaches. With so many people making their purchases online, It is the 
                        fastest-growing retail market. Statistics show that 96% of Americans with access to the 
                        internet have made a purchase online. Ecommerce offers consumers a more convenient 
                        way to shop for the products or services they need without having to visit a retailer's physical 
                        location to make a purchase.
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <h2>GLOBAL REACH</h2>
                        <p>
                        With a physical shop or office you are often geographically limited to nearby markets, so if you 
                        have a New York City shop and want to sell in Los Angeles, you’ll need to open another physical location.
                        This restriction does not extend to your online shop. You can market your digital e-commerce 
                        business to anyone and everyone, anywhere in the world! This obviously increases the potential 
                        customer base greatly and at no real extra cost after your eCommerce business has been put 
                        live. Furthermore, even your local customers are likely to shop more online, even if they don’t 
                        convert as often.
                        </p>
                    </div>
                    <div className='section-md-right'>
                        <img style={{height: '100%', width: '100%'}} src={growth} alt='nyc-seo-specialist' />
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2> Always open for business </h2>
                    <p>
                        In general, traditional companies have restricted hours, but an online e-commerce shop can be 
                        open 24 hours a day, 7 days a week, 365 days a year. This is highly customer friendly as people 
                        can choose when they shop. While merchants can see revenue rolling in while they are sleeping. From 
                        looking at statistical data, online customers make purchases around 8pm. Many offices and physical 
                        shops are closed around this time, missing peak purchasing hours.
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <h2>COLLECT ANALYTICS</h2>
                        <p>
                            An E-commerce store can provide you a lot of insight into customer behaviour and shopping 
                            habits. Tools, such as Hotjar’s heatmap and Google Analytics pairs with Google Tag Manager 
                            can provide amazing detail in your shoppers browsing path. This can give you further 
                            information into what customers are interested in and at which stages of a marketing funnel
                            they get stuck! Finding out these patterns in physical stores relies on customer surveys and 
                            questioning which is a time consuming and costly task.
                        </p>
                    </div>
                    <div className='section-md-right'>
                        <img style={{height: '100%', width: '100%'}} src={payment} alt='nyc-seo-specialist' />
                    </div>
                </div>
            </section>

            <section>
            <div className='showcase-projects-bottom'>
            <p>
                Request an e-commerce consultation today!
            </p>
            <Link to='/contact/' id='page-link'>CONTACT ME</Link>
          </div>
            </section>
        </div>
     </Layout>
)

export default SEOPage