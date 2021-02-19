import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import './index.css'



import facebook from '../images/facebook-icon.svg'
import instagram from '../images/instagram-icon.svg'
import git from '../images/git-icon.svg'
import twitter from '../images/twitter-icon.svg'
import linkedIn from '../images/linked-in-icon.svg'
import webDesign from '../images/web-design-icon.svg'
import seo from '../images/seo-icon.svg'
import coding from '../images/coding.svg'
import chart from '../images/chart.svg'
import html from '../images/html-5.svg'
import css from '../images/css-5.svg'
import js from '../images/javascript.svg'
import react from '../images/react-2.svg'
import gatsby from '../images/gatsby.svg'
import python from '../images/python-5.svg'
import node from '../images/nodejs-1.svg'
import mongo from '../images/mongodb-icon-1.svg'
import django from '../images/django.svg'
import figma from '../images/figma-1.svg'
import icon from '../images/hero-icon.svg'
import responsiveDesign from '../images/responsive-design.svg'
import seoPic from '../images/seo-picture.svg'
import mockUp from '../images/mockup.png'
import appDev from '../images/app-development.svg'
import jam from '../images/jamstack-icon.svg'
import arrow from '../images/right-arrow.svg'
import video from '../images/video.mp4'





const IndexPage = () => {


  return (
    <Layout>
      <SEO title="NYC Web Designer"/>
      <section>
        <div className='hero'>
          <video muted loop autoPlay className='video'>
            <source src={video} type="video/mp4"/>
          </video>
          <div className='hero-overlay'>
            <p style={{color: '#0984e3', margin: '0'}}>FULL STACK DEVELOPER</p>
            <h1 style={{color: '#fff'}}>DAVID VELEZ</h1>
            <p style={{color: '#fff', margin: '0'}}>Building the technology that powers the digital age.</p>
            <Link id='hero-link' to='/best-web-design-companies-in-nyc/'>LETS WORK TOGETHER</Link>
            <div className='hero-socials-links'>
              <a href='https://www.facebook.com/UndercoverAlien/' rel="noopener noreferrer" target="_blank"><img src={facebook} alt='web-designer-social-media-link'/></a>
              <a href='https://www.instagram.com/_devdave/' rel="noopener noreferrer" target="_blank"><img src={instagram} alt='web-designer-social-media-link'/></a>
              <a href='https://github.com/know-mad' rel="noopener noreferrer" target="_blank"><img src={git} alt='web-designer-social-media-link'/></a>
              <a href='https://twitter.com/_devdave' rel="noopener noreferrer" target="_blank"><img src={twitter} alt='web-designer-social-media-link'/></a>
              <a href='https://www.linkedin.com/in/david-velez-a16b2492/' rel="noopener noreferrer" target="_blank"><img src={linkedIn} alt='web-designer-social-media-link'/></a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='hello-banner'>
          <div className='banner-inner'>
            <h1>HELLO</h1>
          </div>
        </div>
        <div className='profile-intro'>
          <div className='profile-intro-left'>
            <div className='profile-content'>
              <h1>I'M DAVID</h1>
              <div className='profile-photo'></div>
              <p>Nice to meet you!</p>
            </div>
          </div>

          <div className='profile-intro-right'>
            <p>
                Your friendly neighborhood  full stack developer. Based in New York City, I  specialize in building 
                exceptional applications, clean websites, and everything in between. 
                <br/>
                <br/>
                I enjoy creating software and 
                applications that drive technology and streamline tasks, as well as websites that are pixel-perfect, fast, search
                engine optimized and responsive to look and feel great on all devices. I'm passionate and curious about
                technology and am always looking to  build with the latest tech  in order to provide my clients with the best 
                service and offer the most advanced products possible. 
              </p>
          </div>
        </div>
      </section>


      <section>
        <div className='section-md-column'>
          <div className='services-container'>
            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={webDesign} alt='web-design-services'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>WEB DESIGN</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>I aim to deliver aesthetically pleasing and clean
                  web content for my clients and always use the latest technology to
                  deliver custom made, fast, and optimized websites that look great on any device !
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/web-design-services-nyc/'}><img src={arrow} /></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={seo} alt='seo-services'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>SEO</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>
                  There's no point in having a beautiful new website if no one is
                  going to see it. I optimize your new web asset so that it is
                  found by the customers looking for your service or product.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/local-seo-expert-nyc/'}><img src={arrow} /></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={coding} alt='web-developmen-code'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>APPS</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>
                  I enjoy the challenges of solving problems programatically in order
                  to achieve the disired result. I code each application from scratch
                  using the latest technologies in order to deliver the highest quality
                  product to market.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/web-development-nyc/'}><img src={arrow} /></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='web-banner'>
            <div className='banner-inner'>
              <h1>WEB DESIGN</h1>
            </div>
          </div>

        <div className='info-section-sm'>
        <p>
            Statistics show that approximately 4.57 billion people worldwide are active internet users which 
            makes the internet a goldmine of opportunities for all kinds of businesses. <span style={{color: '#b007a8'}}>Leverage its power to your advantage</span>, and establish 
            your digital presence today to discover your market potential. From website design and
            development to search engine optimization (SEO) and site maintenance, I’ve
            got you covered. In today’s digital world because today more than ever, it is crucial to stay connected 
            with your customers and prospects to leverage new markets and expand your business. 
            <br/>
            <br/>
            My professional approach to Web development is reflected in my process
           and collaborative approach. I have a highly transparent and collaborative
           style and detail all tasks involved with your project so that it is
           to your standards along the way.
          </p>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='section-md-left'>
            <p>
            If you are doing business in today’s market, you’re going to need a website.
            There’s no way around it. A website is truly your digital storefront with the best part being... it’s
            always marketing your products and services 24/7/365, even when your office or physical location is closed.
            </p>
            <p>
              I develop custom websites built on the <span style={{color: '#b007a8', fontStyle: 'italic'}}>NEW WEB</span> with the Jamstack, that are
              blazing fast and maximize <span style={{color: '#b007a8', fontStyle: 'italic'}}>SEO</span> campaigns, which gets your website discovered on search engines sooner.
              <br/>
              <br/>
              Because let's face it...
              <br/>
              <br/>
              <span style={{color: '#b007a8', fontStyle: 'italic'}}>CHEAP WEBSITE = NO ONLINE SALES!</span>
              <br/>
              <span style={{color: '#b007a8', fontStyle: 'italic'}}>BAD WEBSITE = NO ONLINE SALES!</span>
              <br/>
              <span style={{color: '#b007a8', fontStyle: 'italic'}}>NO WEBSITE = NO ONLINE SALES!</span>
            </p>
          </div>
          <div className='section-md-right'>
            <img src={jam} alt='web-design-icon'/>
          </div>
        </div>

        <div className='logos-ticker'>
            <div className='logos-ticker-fade' aria-hidden='true'></div>
            <div className='logos-ticker-container'>
              <div style={{backgroundImage: `url(${html})`}}></div>
              <div style={{backgroundImage: `url(${css})`}}></div>
              <div style={{backgroundImage: `url(${js})`}}></div>
              <div style={{backgroundImage: `url(${react})`}}></div>
              <div style={{backgroundImage: `url(${gatsby})`}}></div>
            </div>
            <div className='logos-ticker-container'>
              <div style={{backgroundImage: `url(${python})`}}></div>
              <div style={{backgroundImage: `url(${node})`}}></div>
              <div style={{backgroundImage: `url(${mongo})`}}></div>
              <div style={{backgroundImage: `url(${django})`}}></div>
              <div style={{backgroundImage: `url(${figma})`}}></div>
            </div>
        </div>
      </section>

      <section>
      <div className='section-md reversed'>
          <div className='reverse-section-md-left'>
            <img style={{height: '90%'}} src={chart} alt='web-development-chart'/>
          </div>

          <div className='reverse-section-md-right'>
          <h1 style={{fontSize: '3rem', margin: '0'}}>NEW WEB???</h1>
            <p>
            Yep...but it's not as complicated as you think.
            <br/>
            <br/>
            Basically what it all comes down to is... with less moving parts, your website is fast, scales effortlessly, and  is super secure!
            <br/>
            <br/>
            Competitive advantage?...Check!
            <br/>
            <br/>
            But don't take my word for it!, Check out the pagespeed of this
            website <a style={{color: '#b007a8',  textDecoration: 'underline'}} href='https://developers.google.com/speed/pagespeed/insights/' rel="noopener noreferrer" target="_blank">here</a>. And
            then measure your own page....or your competitions!
            <br/>
            <br/>
            You’re welcome. :-)
            </p>
          </div>
        </div>
      </section>

        <section>
          <div className='info-section-sm'>
            <h2> WEBSITES HELP YOUR BUSINESS GET IN FRONT OF NEW CUSTOMERS</h2>
            <p>
              For local B2C businesses, thousands of consumers a day in a 10 mile radius of your business are typing in "<span style={{fontWeight: 'bolder', color: '#b007a8'}}>(insert
              desired service) near me</span>".  And people are also just as much searching for solutions from B2B companies.
              Guess what? The companies with websites compete to be near the top result. And the companies without a website aren’t 
              even in the game. They have a 0% chance to bring in any of these active online customers.
              <br/>
              <br/>
              While also having the ability to pair Google ads or Facebook ads with your website to jump to the top of these searches and promote your
              services at a very cheap rate of a few dollars per click. With no website, you can’t use the best modern 
              advertising methods—Google and Facebook ads—to your advantage.
              If you get in the game of attracting new customers by having a website built, marketing your business will take a giant leap forward
            </p>
          </div>
        </section>
      
        <section>
        <div className='section-md'>
          <div className='section-md-left'>
          <h1 style={{fontSize: '3rem', margin: '0'}}>MOBILE FIRST</h1>
            <p>
              Because 54% of web traffic is now coming from mobile devices, every website or web app is built
              with a <span style={{color: '#b007a8', fontStyle: 'italic'}}>MOBILE FIRST</span> methodology in
              mind so that your web asset is optimized to look and perform great on mobile devices,
              tablets, and desktops.
              <br/>
              <br/>
              This is important for enhancing features of your web page or web app and taking advantage
              of the mobile market by giving your customers a website or web app that has an overall cohesive feel from
              device to device so that they can experience your brand no matter how they find you.
              <br/>
              <br/>
              There is absolutely no reason to have a web asset that isn't optimized
              for mobile devices in {new Date().getFullYear()}!
            </p>
          </div>
          <div className='section-md-right'>
            <img style={{height: '100%', width: '100%'}} src={responsiveDesign} alt='web-design-icon'/>
          </div>
        </div>
      </section>

      <section>
        <div className='contact-banner'>
          <div className='contact-banner-left'>
            <p>
             Get a FREE website audit today!
            </p>
          </div>
          <div className='contact-banner-right'>
            <input style={{width: '60%', margin: '10px', border: '2px solid #4026B6'}} placeHolder='www.yourwebsite.com'/>
            <Link id='contact-link' to='/contact/'>FREE AUDIT</Link>
          </div>
        </div>
      </section>

        <section>
          <div className='seo-banner'>
            <div className='banner-inner'>
              <h1>SEO</h1>
            </div>
          </div>

          <div className='info-section-sm'>
            <h2> OPTIMIZED WEBSITES BRING IN MORE PROFITS FOR YOUR BUSINESS</h2>
            <p>
            It gets better than just marketing. With a well-designed website optimized for business conversions, your inbox will
            be filled with new leads and sales orders for you to wake up to. That’s the definition of making money while you sleep,
            which is every sales rep and business owner’s dream come true. Your website then becomes your master marketer and salesperson!
            </p>
          </div>
        </section>

      <section>
        <div className='section-md reversed'>
          <div className='reverse-section-md-left'>
            <img style={{height: '100%', width: '100%'}} src={seoPic} alt='website-seo' />
          </div>
          <div className='reverse-section-md-right'>
            <p>
            Most internet users begin their session by searching for something.
            If that "something" is your service or product... then you should be at the top
            of the list!
            <br/>
            <br/>
            <span style={{color: '#b007a8'}}>Search engine optimization (SEO)</span> is the process of helping your customers
            connect with your business online. I start every new SEO campaign with an audit of the business and
            the goals of the business owner to maximize SEO results.
            <br/>
            <br/>
            In {new Date().getFullYear()}, SEO is not about ranking for popular terms; it’s about being
            found when it matters most. I'm a skilled search engine optimization expert who
            carefully researches the right keywords for your business, ensuring you
            are gaining qualified traffic that converts to your bottom line.
            </p>
          </div>
          </div>
        </section>

         <section>
           <div className='contact-banner'>
            <div className='contact-banner-left'>
              <p>
              Get your FREE SEO audit!
              </p>
            </div>
            <div className='contact-banner-right'>
              <input style={{width: '60%', margin: '10px', border: '2px solid #4026B6'}} placeHolder='www.yourwebsite.com'/>
              <Link id='contact-link' to='/contact/'>FREE AUDIT</Link>
            </div>
          </div>
        </section>

        <section>
          <div className='app-banner'>
            <div className='banner-inner'>
              <h1>APPLICATIONS</h1>
            </div>
          </div>

          <div className='info-section-sm'>
            <h2> APPS ENCOURAGE BRAND LOYALTY </h2>
            <p>
              As consumer behaviour continues to evolve, businesses need to adapt their strategy to be ‘where their 
              customers are’. As a result, companies are moving rapidly toward making mobile apps commonplace as 
              business tools and assets. One of the key questions in business is ‘how you can give your brand a competitive 
              edge’. The answer; mobile apps. Industry leading companies are designing holistic experiences that leverage 
              the personal nature of mobile. While there is still some hesitation surrounding mobile apps, it is important to 
              understand that a native app isn’t just a mobile version of your website but rather an engaging and experience-driven 
              environment crucial for creating a cohesive customer journey.
              <br/>
              <br/>
              A mobile-first approach is imperative for successful businesses, yet many still are behind in adopting a mobile 
              app strategy. Where mobile web can help raise awareness and increase traffic, mobile apps, on the other 
              hand, allow you to foster the customer relationship and increase retention. Without a mobile presence, significant 
              marketing opportunities are missed.
            </p>
          </div>
    
        <div className='section-md'>
          <div className='section-md-left'>
          <h1 style={{fontSize: '3rem', margin: '0'}}>APPS BUILT RIGHT</h1>
            <p>
            I enjoy the challenges of solving problems programatically in order to
            achieve a disired result, and trully enjoy the creation process each
            project takes me on. From concept to deployment, I’m constantly in
            touch with my clients ensuring their technology asset is custom made
            to their standards.
            <br/>
            <br/>
            So whether you need a sleek front-end, a robust back-end, or a full stack
            application, I've got you covered.
            </p>
          </div>
          <div className='section-md-right'>
            <img style={{height: '100%', width: '100%'}} src={appDev} alt='app-development'/>
          </div>
        </div>
        <div className='showcase-projects'>
          <div className='showcase-projects-top'>
            <div className='showcase'>
              <p>
                Your new web asset is meticulously designed to look and perform great
                on all devices...
                <br/>
                <br/>
                So whether on desktop or mobile...your customers experience
                your brand in all its glory!
              </p>
            </div>
            <div className='showcase'>
              <img src={mockUp} alt='web-design-project'/>
            </div>
          </div>

          <div className='showcase-projects-bottom'>
            <p>
            Want to see the websites and apps that I’ve built?
            <br/>
            <br/>
            Check out my work
            </p>
            <Link to='/projects/' id='page-link'>PROJECTS</Link>
          </div>
        </div>
      </section>

      <section>
          <Testimonials />
      </section>

      <section>
        <div className='contact-section'>
          <div className='contact-section-top'>
            <h1 style={{color: '#0984e3'}}>CONTACT</h1>
          </div>
          <div className='contact-section-bottom'>
            <div className='contact-section-left'>
              <p>
                I'm looking forward to seeing what we create together!
                <br/>
                <br/>
                For any questions, inquiries, or collaborations, feel free to contact me.
                I'd love to hear from you!
              </p>
            </div>
            <div className='contact-section-right'>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}


export default IndexPage
