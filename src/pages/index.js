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
import webDesign from '../images/web-design-icon.svg'
import coding from '../images/coding.svg'
import rocket from '../images/rocket.svg'
import nike from '../images/nike-logo.svg'
import mailchimp from '../images/mailchimp-logo.png'
import peloton from '../images/peloton-logo.svg'
import lv from '../images/louis-vuitton-logo.svg'
import verizon from '../images/verizon-logo.svg'
import twilio from '../images/twilio-logo.svg'
import doordash from '../images/doordash-logo.svg'
import danone from '../images/danone-logo.svg' 
import figma from '../images/figma-logo.svg'
import facebookLogo from '../images/facebook-logo.svg'
import responsiveDesign from '../images/responsive-design.svg'
import seoPic from '../images/seo-picture.svg'
import mockUp from '../images/mockup.png'
import appDev from '../images/app-development.svg'
import jam from '../images/jamstack-icon.svg'
import arrow from '../images/right-arrow.svg'
import shoppingCart from '../images/shopping-cart-icon.svg'
import video from '../images/video.mp4'
import ecommerce from '../images/ecommerce.svg'
import youtube from '../images/youtube-icon.svg'
import airbnb from '../images/airbnb.svg'
import shopify from '../images/shopify-logo.svg'
import spotify from '../images/spotify-logo.svg'
import sendGrid from '../images/sendgrid-logo.svg'
import me from '../images/me.jpg'




const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Best Website Designers NYC"/>
      <section>
        <div className='hero'>
          <video muted loop autoPlay className='video'>
            <source src={video} type="video/mp4"/>
          </video>
          <div className='hero-overlay'>
            <p style={{color: '#0984e3', margin: '0'}}>FULL STACK DEVELOPER</p>
            <h1 style={{color: '#fff', fontWeight: `900`}}>DAVID VELEZ</h1>
            <p style={{color: '#fff', margin: '0'}}>Providing performance driven technology to help businesses grow in todays digital centric market.</p>
            <Link id='hero-link' to='/contact/'>START YOUR WEB PROJECT</Link>
            <div className='hero-socials-links'>
              <a href='https://www.facebook.com/developerdave/' rel="noopener noreferrer" target="_blank"><img src={facebook} alt='web-designer-social-media-link'/></a>
              <a href='https://github.com/know-mad' rel="noopener noreferrer" target="_blank"><img src={git} alt='web-designer-social-media-link'/></a>
              <a href='https://twitter.com/_devdave' rel="noopener noreferrer" target="_blank"><img src={twitter} alt='web-designer-social-media-link'/></a>
              <a href='https://www.instagram.com/_devdave/' rel="noopener noreferrer" target="_blank"><img src={instagram} alt='web-designer-social-media-link'/></a>
              <a href='https://www.youtube.com/channel/UCNQfqlLyT3kWzGoz65b1iPA' rel="noopener noreferrer" target="_blank"><img src={youtube} alt='web-designer-social-media-link'/></a>
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
          <div className='profile-photo'>
            <img src={me} alt='David Velez is the best web designer in New York City'/>
          </div>
            <p>
                <span style={{fontSize: `2rem`, color: `#0984e3`, fontWeight: `bold`}}>I'm David,</span>
                <br/>
                Your friendly neighborhood full stack developer. Based in New York City, and having a background in software engineering, I specialize in building 
                blazing-fast websites, web applications, and e-commerce solutions by using the latest decoupled architecture that prioritize 
                site/app performance, resulting in breakneck page load speeds, better SEO, as well as aesthetics to match. No longer are clients tied to old and 
                outdated technologies like Wordpress, and forget working with a designer who uses cookie-cutter drag and drop templates that not only look and feel 
                cheap, but also perform terrible on search engines.
                <br/>
                <br/>
                I enjoy creating software and 
                applications that drive technology and streamline tasks, as well as websites that are pixel-perfect, fast, search
                engine optimized and responsive to look and feel great on all devices. I'm passionate and curious about
                technology and am always looking to build with the latest tech in order to provide my clients with the best 
                service and offer the most advanced product on the market. 
              </p>
        </div>
      </section>

      <section>
        <div className='portfolio-banner'>
          <div className='banner-inner'>
            <h1>SERVICES</h1>
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
                  <p>
                  No cookie cutter wordpress sites here! I design and create web assets built on modern technology
                  stacks that generate blazing fast page load speeds coupled with aesthetics to match. 
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/web-design-services-nyc/'}><img src={arrow}  alt='web-design-navigation'/></Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className='individual-service'>
              <div className='individual-service-top'>
                <img src={shoppingCart} alt='nyc-seo-services'/>
              </div>
              <div className='individual-service-bottom'>
                <div className='individual-service-bottom-title'>
                  <h1>E-COMMERCE</h1>
                </div>
                <div className='individual-service-bottom-content'>
                  <p>
                  There's no way around it...doing business in the digital age means having to sell online.
                  I provide robust and scalable e-commerce solutions that allow you or your business to 
                  sell products on the world wide web.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/ecommerce-web-design-nyc/'}><img src={arrow} alt='nyc-web-designer'/></Link>
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
                  Mobile business applications have become a necessary marketing tool for all businesses, regardless of the size 
                  of their industries. A mobile app can help a small business engage with and build their customer 
                  base, drive sales, and improve their reputation.
                  </p>
                </div>
                <div className='individual-service-button-container'>
                  <Link id='services-link' to={'/services/web-development-nyc/'}><img src={arrow} alt='nyc-web-developer'/></Link>
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
        <h2>BLAZING FAST WEBSITES THAT SCALE EFFORTLESSLY</h2>
        <p>
            Statistics show that approximately 4.57 billion people worldwide are active internet users which 
            makes the internet a goldmine of opportunities for all kinds of businesses. <span style={{color: '#b007a8'}}>Leverage its power to your advantage</span>, and establish 
            your digital presence today to discover your market potential. From website design and
            development to search engine optimization (SEO) and site maintenance, I’ve
            got you covered. In today’s digital world because today more than ever, it is crucial to stay connected 
            with your customers and prospects to leverage new markets and expand your business. 
            <br/>
            <br/>
            Because 35% of the web uses an old technology like WordPress for their website, this means that getting your new
            site built by me will give you a competitive advantage over 35% of the web since I build on the modern web
            stack and am able to produce blazing fast page load speeds that beat out the competition on 
            search engines. So whether you're looking for an ecommerce store, a blog, or a business website, rest assured
            you'll get a product that's on the cutting edge of technology...not just another Worpress website built on old and 
            outdated tech.
          </p>
        </div>
      </section>

      <section>
        <div className='section-md'>
          <div className='section-md-left'>
            <h2>PERFORMANCE DRIVEN TECHNOLOGY</h2>
            <p>
              A good website is truly your digital storefront with the best part being... it’s
              always marketing your products and services 24/7/365, even when your office or physical location is closed.
              I develop custom websites built on the <span style={{color: '#b007a8', fontStyle: 'italic'}}>NEW WEB ARCHITECTURE</span> with the Jamstack, that prioritize
              performance to maximize <span style={{color: '#b007a8', fontStyle: 'italic'}}>SEO</span> campaigns, which gets your website discovered on search engines sooner.
              <br/>
              <br/>
              Because let's face it...
              <br/>
              <br/>
              <span style={{color: '#0984e3', fontStyle: 'italic', fontWeight: 'bold'}}>SLOW WEBSITE = </span>  <span style={{color: '#b007a8', fontStyle: 'italic', fontWeight: 'bold'}}>NO ONLINE SALES!</span>
              <br/>
              <br/>
              <span style={{color: '#0984e3', fontStyle: 'italic', fontWeight: 'bold'}}>BAD WEBSITE =</span>  <span style={{color: '#b007a8', fontStyle: 'italic', fontWeight: 'bold'}}>NO ONLINE SALES!</span>
              <br/>
              <br/>
              <span style={{color: '#0984e3', fontStyle: 'italic', fontWeight: 'bold'}}>NO WEBSITE =</span>  <span style={{color: '#b007a8', fontStyle: 'italic', fontWeight: 'bold'}}>NO ONLINE SALES!</span>
            </p>
          </div>
          <div className='section-md-right'>
            <img src={jam} alt='web-design-icon'/>
          </div>
        </div>

        <div className='jamstack-info-section'>
          <p>Companies that use the <span style={{color: `#b007a8`}}>Jamstack</span></p>
        </div>

        <div className='logos-ticker'>
            <div className='logos-ticker-fade' aria-hidden='true'></div>
            <div className='logos-ticker-container'>
              <div className='image-container'>
                <img style ={{height: `50%`}} src={spotify} alt='spotify-logo' />
              </div>
              <div className='image-container'>
                <img style ={{height: `100%`}} src={nike} alt='nike-logo' />
              </div>
              <div className='image-container'>
                <img style={{height: `60%`}} src={mailchimp} alt='mailchimp-logo' />
              </div>
              <div className='image-container'>
                <img style={{height: `100%`}} src={peloton} alt='peloton-logo' />
              </div>
              <div className='image-container'>
                <img src={lv} alt='louis-vuitton-logo'/>
              </div>
              <div className='image-container'>
                <img style={{height: `40%`}} src={verizon} alt='verizon-logo'/>
              </div>
              <div className='image-container'>
                <img style={{height: `50%`}} src={airbnb} alt='airbnb-logo'/>
              </div>
            </div>
            <div className='logos-ticker-container'>
              <div className='image-container'>
                <img style ={{height: `40%`}} src={sendGrid} alt='sendgrid-logo' />
              </div>
              <div className='image-container'>
                <img style={{height: `50%`}} src={shopify} alt='shopify-logo'/>
              </div>
              <div className='image-container'>
                <img style={{height: `50%`}} src={twilio} alt='twilio-logo' />
              </div>
              <div className='image-container'>
                <img style={{height: `30%`}} src={doordash} alt='doordash-logo'/>
              </div>
              <div className='image-container'>
                <img src={danone} alt='danone-logo'/>
              </div>
              <div className='image-container'>
                <img style={{height: `30%`}} src={facebookLogo} alt='facebook-logo'/>
              </div>
              <div className='image-container'>
                <img src={figma} alt='figma-logo'/>
              </div>
            </div>
        </div>
      </section>

      <section>
      <div className='section-md reversed'>
          <div className='reverse-section-md-left'>
            <img style={{height: `60%`, width: `70%`}} src={rocket} alt='rocket-ship'/>
          </div>

          <div className='reverse-section-md-right'>
          <h2>IF IT'S NOT FAST, IT'S BROKEN</h2>
            <p>
            Page loading speeds have an impact on user experience and conversion. My websites 
            remove the need to generate page views on a server at request time by instead generating 
            pages ahead of time during a build.
            <br/>
            <br/>
            When all the pages are already available on a CDN close to the user and ready to serve, very 
            high performance is possible without introducing expensive or complex infrastructure.
            <br/>
            <br/>
            But don't take my word for it!, <a style={{color: '#0984e3',  textDecoration: 'underline'}} href='https://developers.google.com/speed/pagespeed/insights/' rel="noopener noreferrer" target="_blank">Go ahead! Measure the pagespeed of this
            website</a>. And then measure your own page....or your competitions!
            <br/>
            <br/>
            You’re welcome!!!
            </p>
          </div>
        </div>
      </section>

        <section>
          <div className='info-section-sm'>
            <h2>HELP YOUR BUSINESS GET IN FRONT OF NEW CUSTOMERS</h2>
            <p>
              For local B2C businesses, thousands of consumers a day in a 10 mile radius of your business are typing in "<span style={{color: '#b007a8'}}>(insert
              desired service)</span> near me".  And people are also just as much searching for solutions from B2B companies.
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
          <h2>MOBILE FIRST</h2>
            <p>
              There is absolutely no reason to have a web asset that isn't optimized
              for mobile devices in {new Date().getFullYear()}! Because 54% of web traffic is now coming from mobile devices, every website or web app is built
              with a <span style={{color: '#b007a8', fontStyle: 'italic'}}>MOBILE FIRST</span> methodology in
              mind so that your web asset is optimized to look and perform great on phones,
              tablets, and desktops.
              <br/>
              <br/>
              This is important for enhancing features of your web page or web app and taking advantage
              of the mobile market by giving your customers a website or web app that has an overall cohesive feel from
              device to device so that they can experience your brand no matter how they find you.
            </p>
          </div>
          <div className='section-md-right'>
            <img src={responsiveDesign} alt='web-design-icon'/>
          </div>
        </div>
      </section>

      <section>
        <div className='contact-banner'>
          <div className='contact-banner-left'>
            <p>
             Get a FREE website evaluation today!
            </p>
          </div>
          <div className='contact-banner-right'>
            <Link style={{width: `25em`}} id='contact-link' to='/contact/'>START YOUR WEB PROJECT</Link>
          </div>
        </div>
      </section>

      <section>
        <div className='e-commerce-banner'>
            <div className='banner-inner'>
              <h1>E-COMMERCE</h1>
            </div>
          </div>

          <div className='info-section-sm'>
            <h2>SELL YOUR PRODUCTS ONLINE</h2>
            <p>
              From startups to small businesses right through to huge brands, there are a huge number of 
              companies that can benefit from their own ecommerce website, where they can sell their own 
              products or services. In todays competitive and convenience focused society, no longer do 
              consumers want to venture to the high street in order to buy items, instead consumers want 
              to shop from their own homes, making ecommerce a flexible solution for both businesses and buyers. 
              <br/>
              <br/>
              Couople your new ecommerce store with the latest technology by going headless
              and gain a competitive advantage by not only having a regular old ecommerce
              store, but having an ecommerce store that is blazing fast, and scales effortelssly.
            </p>
          </div>
        </section>

        <section>
        <div className='section-md reversed'>
          <div className='reverse-section-md-left'>
            <img  src={ecommerce} alt='website-seo' />
          </div>
          <div className='reverse-section-md-right'>
            <h2>HEADLESS COMMERCE</h2>
            <p>
            In its simplest form, headless commerce is a separation of the front end and back end of an ecommerce 
            application. This architecture offers brands freedom of expression to build whatever and however they 
            want. Most importantly, it enables brands to enrich the customer experience
            <br/>
            <br/>
            Businesses should consider headless commerce as an evolutionary shift in traditional e-commerce. While 
            original e-commerce platforms offered front-end tools that enabled fast deployments for companies that 
            had little internet selling experience, many businesses now employ highly trained software developers 
            that want to remove the front-end training wheels...
            <br/>
            <br/>
            <span style={{color: `#b007a8`}}>I am that developer for your brand!</span>  
            </p>
          </div>
          </div>
        </section>

        <section>
        <div className='contact-banner'>
          <div className='contact-banner-left'>
            <p>
             Build your e-commerce store today!
            </p>
          </div>
          <div className='contact-banner-right'>
            <Link style={{width: `25em`}} id='contact-link' to='/contact/'>START YOUR WEB PROJECT</Link>
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
            <img  src={seoPic} alt='website-seo' />
          </div>
          <div className='reverse-section-md-right'>
            <h2>ALWAYS OPTIMIZED</h2>
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
            In {new Date().getFullYear()}, SEO is not just about ranking for popular terms, it’s about being
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
              Get your FREE SEO evaluation!
              </p>
            </div>
            <div className='contact-banner-right'>
              <Link style={{width: `25em`}} id='contact-link' to='/contact/'>START YOUR WEB PROJECT</Link>
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
              As consumer behaviour continues to evolve, businesses need to adapt their strategy to be where their 
              customers are. As a result, companies are moving rapidly toward making mobile apps commonplace as 
              business tools and assets. One of the key questions in business is <span style={{color: `#b007a8`}}>‘how can I give my brand a competitive 
              edge?’</span>. The answer... mobile apps! Industry leading companies are designing holistic experiences that leverage 
              the personal nature of mobile. 
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
          <h2>APPS BUILT RIGHT</h2>
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
            <img  src={appDev} alt='app-development'/>
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

        </div>
      </section>

      <section>
          <Testimonials />
      </section>

      <section>
        <div className='review-banner'>
          <a id='review-link' href='https://g.page/r/CeZLEXVUyuw8EAg/review' rel="noopener noreferrer" target="_blank">LEAVE ME A REVIEW</a>
        </div>
      </section>

      <section>
      <div className='contact-me-banner'>
        <div className='banner-inner'>
          <h1>CONTACT ME</h1>
        </div>
      </div>
        <div className='contact-section'>
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
