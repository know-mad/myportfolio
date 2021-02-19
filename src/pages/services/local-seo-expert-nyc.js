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
            title='SEO firm NYC' 
            description='David Velez provides SEO services for businesses looking to get their websites ranking higher on search engines.'
            />
        <div className='services-page-container'>
            <section>
                <div className='seo-banner'>
                    <div className='banner-inner'>
                        <h1>SEO</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2>SEO: IT’S ALL ABOUT RETURN ON INVESTMENT</h2>
                    <p>
                    SEO has become quite the trendy acronym amongst aspiring ‘entrepreneurs’, ‘gurus’ and ‘digital 
                    marketing experts’ amongst other fly-by-night snake oil salesmen. It is a buzzword that is often 
                    used to convince someone that they know what they’re talking about without carrying any weight 
                    behind their words. 
                    <br/>
                    <br/>
                    I however have been proudly providing quality SEO since 2015. As an 
                    authority in SEO many would expect that I may take offense to the fakers, however I see it 
                    as a chance to educate my clients and the world and use it as an opportunity to show the light!
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <p>
                            It is paramount that an SEO budget receives the investment it needs to 
                            nurture your online business. For this reason I simply do not onboard those who do not understand 
                            the importance of this principle.
                            <br/>
                            <br/>
                            With a budget of four, five, six hundred dollars a month, I will not 
                            be able to achieve a great ROI.  Over the last 6+ years I have seen the positive effect that a 
                            proper SEO strategy can have on a business and the amount of happiness it can muster. On the other 
                            hand I have also seen the ineffectiveness of an SEO strategy that lacks luster, and the mill of
                            frustration one may find themselves in without a proper understanding of their investment.
                        </p>
                    </div>
                    <div className='section-md-right'>
                        <img style={{height: '100%', width: '100%'}} src={growth} alt='nyc-seo-specialist' />
                    </div>
                </div>
            </section>

            <section>
                <div className='info-section-sm'>
                    <h2> SEO is an ongoing competition </h2>
                    <p>
                    SEO is a search engine 
                    ranking race where the goal is to not simply finish first, but to remain at the front of the pack; to influence the direction of those behind you.
                    Assuming there are many in front of you, it is important to understand just how fast you have to run to 
                    surpass the competition. If you keep running at the same speed you will never catch up.
                    <br/>
                    <br/>
                    Your investment in SEO is what will determine your speed and your ranking. You want to run faster? Invest 
                    more! More budget means more time. Akin to a personal trainer, the more time you spend, the more progress
                    you will see. If you are investing $200 a month, and those ahead of you are investing $2500 a month, how are you 
                    supposed to surpass them? You cannot. It is important to calculate work on your speed so that results can 
                    be guaranteed. If you were to invest $2000 a month, you could open up many avenues to revenue and strategically 
                    place yourself at the top of Google. With active leads and an additional $10,000 – $50,000 coming in, you would 
                    have an excellent return on investment.
                    </p>
                </div>
            </section>

            <section>
                <div className='section-md'>
                    <div className='section-md-left'>
                        <p>
                            Put it this way: if you were to hire an in-house full time SEO expert, a salary of $120,000 a year or more would not 
                            require so much thought.  So why do you bat an eye at the idea of having a dedicated SEO expert working with the success of your business 
                            as their entire goal for as little as $6000 a year? 
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
                Request an SEO consultation today!
            </p>
            <Link to='/contact/' id='page-link'>Contact Me</Link>
          </div>
            </section>
        </div>
     </Layout>
)

export default SEOPage