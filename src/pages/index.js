import React from "react"
import "./index.css"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Testimonials from "../components/Testimonials"
import ContactForm from "../components/ContactForm"
import Slider from "../components/Slider"

import webDesign from "../images/web-design-icon.svg"
import coding from "../images/coding.svg"
import speedometer from "../images/speedometer.svg"
import responsiveDesign from "../images/responsive-design.svg"
import seoPic from "../images/seo-picture.svg"
import mockUp from "../images/mockup.png"
import appDev from "../images/app-development.svg"
import jam from "../images/jamstack-icon.svg"
import arrow from "../images/right-arrow.svg"
import shoppingCart from "../images/shopping-cart-icon.svg"
import video from "../images/video.mp4"
import ecommerce from "../images/ecommerce.svg"
import me from "../images/me.jpg"

import netlify from "../images/netlify-logo.svg"
import shopifyAlt from "../images/shopify-plus-logo--black.svg"
import mailchimpAlt from "../images/mailchimp-alt-logo.svg"
import contentful from "../images/contentful-logo.svg"
import stripe from "../images/stripe.svg"

import onewsq from "../images/1wsq.svg"
import panasonic from "../images/panasonic-1.svg"
import ewc from "../images/EWC.png"
import zenb from "../images/zenb.png"
import jqueen from "../images/JQueen_Logo.png"
import toboot from "../images/toboot-logo.jpeg"
import architessa from "../images/architessa-logo.png"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Best Website Designers NYC" />
      <section>
        <div className="hero">
          <video muted loop autoPlay className="video">
            <source src={video} type="video/mp4" />
          </video>
          <div className="hero-overlay">
            <p className="hero-title">FULL STACK DEVELOPER</p>
            <p className="my-name">DAVID VELEZ</p>
            <p className="hero-pitch">
              Creative web developer providing beautifully designed web
              solutions so you or your business can win online.
            </p>
            <Link id="hero-link" to="/contact/">
              CONTACT ME
            </Link>
            {/* <div className='hero-socials-links'>
              <a href='https://www.facebook.com/developerdave/' rel="noopener noreferrer" target="_blank"><img src={facebook} alt='web-designer-social-media-link'/></a>
              <a href='https://github.com/know-mad' rel="noopener noreferrer" target="_blank"><img src={git} alt='web-designer-social-media-link'/></a>
              <a href='https://twitter.com/_devdave' rel="noopener noreferrer" target="_blank"><img src={twitter} alt='web-designer-social-media-link'/></a>
              <a href='https://www.instagram.com/_devdave/' rel="noopener noreferrer" target="_blank"><img src={instagram} alt='web-designer-social-media-link'/></a>
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className="hello-banner">
          <div className="banner-inner">
            <h1>HELLO</h1>
          </div>
        </div>
        <div className="profile-intro">
          <div className="profile-photo">
            <img
              src={me}
              alt="David Velez is the best web designer in New York City"
            />
          </div>
          <p>
            <span className="hero-title">I'm David,</span>
            <br />
            <span className="hero-pitch">
              Your friendly neighborhood web developer. Based in New York City,
              and having a background in software engineering, I specialize in
              building blazing-fast websites, web applications, and e-commerce
              solutions by using the latest technologies to prioritize site/app
              performance ultimately resulting in breakneck page load speeds and
              better SEO all delivered with beautifully and functionally
              designed custom user interfaces.
            </span>
          </p>
        </div>
      </section>

      <section>
        <Slider />
        <div className="partners-list-desktop">
          <div className="partners-list-top">
            <p className="my-name">Trusted Partners</p>
          </div>
          <div className="partners-list-bottom">
            <div className="partners-card">
              <p className="partners-card-header">e-commerce</p>
              <img src={shopifyAlt} />
              <p className="partners-card-content">
                Working closely with Shopify, I'm able to deliver best-in-class
                commerce experiences for high-growth Direct To Consumer (DTC)
                brands.
              </p>
            </div>
            <div className="partners-card">
              <p className="partners-card-header">content management</p>
              <img src={contentful} />
              <p className="partners-card-content">
                As a Contentful partner, I create insanley fast e-commerce
                experiences by leveraging the power of Headless Content
                Management.
              </p>
            </div>
            <div className="partners-card">
              <p className="partners-card-header">headless architecture</p>
              <img src={jam} />
              <p className="partners-card-content">
                Removing the requirement to manage or run web servers, I create
                fast, secure sites and dynamic headless e-commerce websites.
              </p>
            </div>
            <div className="partners-card">
              <p className="partners-card-header">hosting</p>
              <img src={netlify} />
              <p className="partners-card-content">
                Netlify makes CI/CD, deployment and scaled hosting a commodity
                and helps enterprises focus on creating great dynamic consumer
                experiences.
              </p>
            </div>
            <div className="partners-card">
              <p className="partners-card-header">payment solutions</p>
              <img src={stripe} />
              <p className="partners-card-content">
                Through my Stripe partnership I'm able to integrate a fast and
                lightweight payment processing system for internet businesses of
                all sizes.
              </p>
            </div>
            <div className="partners-card">
              <p className="partners-card-header">email marketing</p>
              <img src={mailchimpAlt} />
              <p className="partners-card-content">
                I partner with Mailchimp to provide revenue-generating email
                marketing services, fueling your brand’s growth and retargetting
                campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="portfolio-banner">
          <div className="banner-inner">
            <h1>SKILLS</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="section-md-column">
          <div className="services-container">
            <div className="individual-service">
              <div className="individual-service-top">
                <img src={webDesign} alt="web-design-services" />
              </div>
              <div className="individual-service-bottom">
                <div className="individual-service-bottom-title">
                  <h1>WEB DESIGN</h1>
                </div>
                <div className="individual-service-bottom-content">
                  <p>
                    No cookie cutter wordpress sites here! I design and create
                    custom websites built on modern technology stacks that
                    generate blazing fast page load speeds coupled with
                    aesthetics to match.
                  </p>
                </div>
                <div className="individual-service-button-container">
                  <Link
                    id="services-link"
                    to={"/services/web-design-services-nyc/"}
                  >
                    <img src={arrow} alt="web-design-navigation" />
                  </Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className="individual-service">
              <div className="individual-service-top">
                <img src={shoppingCart} alt="nyc-seo-services" />
              </div>
              <div className="individual-service-bottom">
                <div className="individual-service-bottom-title">
                  <h1>E-COMMERCE</h1>
                </div>
                <div className="individual-service-bottom-content">
                  <p>
                    There's no way around it...doing business in the digital age
                    means having to sell online. I provide robust and scalable
                    e-commerce solutions that allow you or your business to sell
                    products on the world wide web.
                  </p>
                </div>
                <div className="individual-service-button-container">
                  <Link
                    id="services-link"
                    to={"/services/ecommerce-web-design-nyc/"}
                  >
                    <img src={arrow} alt="nyc-web-designer" />
                  </Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>

            <div className="individual-service">
              <div className="individual-service-top">
                <img src={coding} alt="web-developmen-code" />
              </div>
              <div className="individual-service-bottom">
                <div className="individual-service-bottom-title">
                  <h1>APPS</h1>
                </div>
                <div className="individual-service-bottom-content">
                  <p>
                    Web applications have become a necessary marketing tool for
                    all businesses, regardless of the size of their industries.
                    A mobile app can help a small business engage with and build
                    their customer base, drive sales, and improve their
                    reputation.
                  </p>
                </div>
                <div className="individual-service-button-container">
                  <Link
                    id="services-link"
                    to={"/services/web-development-nyc/"}
                  >
                    <img src={arrow} alt="nyc-web-developer" />
                  </Link>
                  <p>DETAILS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="web-banner">
          <div className="banner-inner">
            <h1>WEB DESIGN</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="section-md">
          <div className="section-md-left">
            <h2>PERFORMANCE DRIVEN TECHNOLOGY</h2>
            <p>
              A good website is truly your digital storefront with the best part
              being... it’s always marketing your products and services
              24/7/365, even when your office or physical location is closed. I
              develop custom websites built on the{" "}
              <span style={{ color: "#F446EC", fontStyle: "italic" }}>
                NEW WEB ARCHITECTURE
              </span>{" "}
              with the Jamstack, that prioritize performance to maximize{" "}
              <span style={{ color: "#F446EC", fontStyle: "italic" }}>SEO</span>{" "}
              campaigns, which gets your website discovered on search engines
              sooner.
              <br />
              <br />
              Because let's face it...
              <br />
              <span
                style={{
                  color: "#0984e3",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                SLOW WEBSITE ={" "}
              </span>{" "}
              <span
                style={{
                  color: "#F446EC",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                NO ONLINE SALES!
              </span>
              <br />
              <span
                style={{
                  color: "#0984e3",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                BAD WEBSITE =
              </span>{" "}
              <span
                style={{
                  color: "#F446EC",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                NO ONLINE SALES!
              </span>
              <br />
              <span
                style={{
                  color: "#0984e3",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                NO WEBSITE =
              </span>{" "}
              <span
                style={{
                  color: "#F446EC",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                NO ONLINE SALES!
              </span>
            </p>
          </div>
          <div className="section-md-right">
            <img src={jam} alt="web-design-icon" />
          </div>
        </div>

        <div className="jamstack-info-section">
          <p>
            <span style={{ color: `#F446EC` }}>Projects</span> I've Worked On
          </p>
          <div className="projects-mobile-slider">
            <div className="projects-mobile-slider-inner">
              <img className="marquee-logo" src={onewsq} alt=""/>
              <img className="marquee-logo" src={panasonic} alt=""/>
              <img className="marquee-logo-ewc" src={ewc} alt=""/>
              <img className="marquee-logo" src={zenb} alt=""/>
              <img className="marquee-logo" src={jqueen} alt=""/>
              <img className="marquee-logo-architessa" src={architessa} alt=""/>
              <img className="marquee-logo" src={toboot} alt=""/>
            </div>
          </div>
          <div className="marquee">
          <div className="marquee-inner">
            <div className="marquee-logos">
              <img className="marquee-logo" src={onewsq} alt=""/>
              <img className="marquee-logo" src={panasonic} alt=""/>
              <img className="marquee-logo-ewc" src={ewc} alt=""/>
              <img className="marquee-logo" src={zenb} alt=""/>
              <img className="marquee-logo" src={jqueen} alt=""/>
              <img className="marquee-logo-architessa" src={architessa} alt=""/>
              <img className="marquee-logo" src={toboot} alt=""/>
            </div>
            <div className="marquee-logos">
              <img className="marquee-logo" src={onewsq} alt=""/>
              <img className="marquee-logo" src={panasonic} alt=""/>
              <img className="marquee-logo-ewc" src={ewc} alt=""/>
              <img className="marquee-logo" src={zenb} alt=""/>
              <img className="marquee-logo" src={jqueen} alt=""/>
              <img className="marquee-logo-architessa" src={architessa} alt=""/>
              <img className="marquee-logo" src={toboot} alt=""/>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section>
        <div className="section-md reversed">
          <div className="reverse-section-md-left">
            <img src={speedometer} alt="rocket-ship" />
          </div>

          <div className="reverse-section-md-right">
            <h2>IF IT'S NOT FAST, IT'S BROKEN</h2>
            <p>
              Page loading speeds have a crucial impact on user experience and
              conversion. My websites remove the need to generate page views on
              a server at request time by instead generating pages ahead of time
              during a build.
              <br />
              <br />
              When all the pages are already available on a CDN close to the
              user and ready to serve, very high performance is possible without
              introducing expensive or complex infrastructure.
              <br />
              <br />
              But don't take my word for it!,{" "}
              <a
                style={{ color: "#F446EC", textDecoration: "underline" }}
                href="https://developers.google.com/speed/pagespeed/insights/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Measure the pagespeed of this website here.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="info-section-sm">
          <h2>HELP YOUR BUSINESS GET IN FRONT OF NEW CUSTOMERS</h2>
          <p>
            For local B2C businesses, thousands of consumers a day in a 10 mile
            radius of your business are typing in "
            <span style={{ color: "#F446EC" }}>(insert desired service)</span>{" "}
            near me". And people are also just as much searching for solutions
            from B2B companies. Guess what? The companies with websites compete
            to be near the top result. And the companies without a website
            aren’t even in the game. They have a 0% chance to bring in any of
            these active online customers.
            <br />
            <br />
            While also having the ability to pair Google ads or Facebook ads
            with your website to jump to the top of these searches and promote
            your services at a very cheap rate of a few dollars per click. With
            no website, you can’t use the best modern advertising methods—Google
            and Facebook ads—to your advantage. If you get in the game of
            attracting new customers by having a website built, marketing your
            business will take a giant leap forward.
          </p>
        </div>
      </section>

      <section>
        <div className="section-md">
          <div className="section-md-left">
            <h2>MOBILE FIRST</h2>
            <p>
              There is absolutely no reason to have a web asset that isn't
              optimized for mobile devices in {new Date().getFullYear()}!
              Because 54% of web traffic is now coming from mobile devices,
              every website or web app is built with a{" "}
              <span style={{ color: "#F446EC", fontStyle: "italic" }}>
                MOBILE FIRST
              </span>{" "}
              methodology in mind so that your web asset is optimized to look
              and perform great on phones, tablets, and desktops.
              <br />
              <br />
              This is important for enhancing features of your web page or web
              app and taking advantage of the mobile market by giving your
              customers a website or web app that has an overall cohesive feel
              from device to device so that they can experience your brand no
              matter how they find you.
            </p>
          </div>
          <div className="section-md-right">
            <img src={responsiveDesign} alt="web-design-icon" />
          </div>
        </div>
      </section>

      <section>
        <div className="contact-banner">
          <div className="contact-banner-left">
            <p>Get a FREE website evaluation today!</p>
          </div>
          <div className="contact-banner-right">
            <Link style={{ width: `25em` }} id="contact-link" to="/contact/">
              START YOUR WEB PROJECT
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="e-commerce-banner">
          <div className="banner-inner">
            <h1>E-COMMERCE</h1>
          </div>
        </div>

        <div className="info-section-sm">
          <h2>SELL YOUR PRODUCTS ONLINE</h2>
          <p>
            From startups to small businesses right through to huge brands,
            there are a huge number of companies that can benefit from their own
            ecommerce website, where they can sell their own products or
            services. In todays competitive and convenience focused society, no
            longer do consumers want to venture to the high street in order to
            buy items, instead consumers want to shop from their own homes,
            making ecommerce a flexible solution for both businesses and buyers.
            Couople your new ecommerce store with the latest technology by going
            headless and gain a competitive advantage by not only having a
            regular old ecommerce store, but having an ecommerce store that is
            blazing fast, and scales effortelssly.
          </p>
        </div>
      </section>

      <section>
        <div className="section-md reversed">
          <div className="reverse-section-md-left">
            <img src={ecommerce} alt="website-seo" />
          </div>
          <div className="reverse-section-md-right">
            <h2>HEADLESS COMMERCE</h2>
            <p>
              In its simplest form, headless commerce offers brands freedom of
              expression to build whatever and however they want. Most
              importantly, it enables brands to enrich the customer experience
              <br />
              <br />
              Businesses should consider headless commerce as an evolutionary
              shift in traditional e-commerce. While original e-commerce
              platforms offered front-end tools that enabled fast deployments
              for companies that had little internet selling experience, many
              businesses now employ highly trained software developers that want
              to remove the front-end training wheels.
              <br />
              <br />
              <span style={{ color: `#F446EC` }}>
                I am that developer for your brand!
              </span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-banner">
          <div className="contact-banner-left">
            <p>Build your e-commerce store today!</p>
          </div>
          <div className="contact-banner-right">
            <Link style={{ width: `25em` }} id="contact-link" to="/contact/">
              START YOUR WEB PROJECT
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="seo-banner">
          <div className="banner-inner">
            <h1>SEO</h1>
          </div>
        </div>

        <div className="info-section-sm">
          <h2> OPTIMIZED WEBSITES BRING IN MORE PROFITS FOR YOUR BUSINESS</h2>
          <p>
            It gets better than just marketing. With a well-designed website
            optimized for business conversions, your inbox will be filled with
            new leads and sales orders for you to wake up to. That’s the
            definition of making money while you sleep, which is every sales rep
            and business owner’s dream come true. Your website then becomes your
            master marketer and salesperson!
          </p>
        </div>
      </section>

      <section>
        <div className="section-md reversed">
          <div className="reverse-section-md-left">
            <img src={seoPic} alt="website-seo" />
          </div>
          <div className="reverse-section-md-right">
            <h2>ALWAYS OPTIMIZED</h2>
            <p>
              Most internet users begin their session by searching for
              something. If that "something" is your service or product... then
              you should be at the top of the list!
              <br />
              <br />
              <span style={{ color: "#F446EC" }}>
                Search engine optimization (SEO)
              </span>{" "}
              is the process of helping your customers connect with your
              business online. I start every new SEO campaign with an audit of
              the business and the goals of the business owner to maximize SEO
              results.
              <br />
              <br />
              In {new Date().getFullYear()}, SEO is not just about ranking for
              popular terms, it’s about being found when it matters most. I'm a
              skilled search engine optimization expert who carefully researches
              the right keywords for your business, ensuring you are gaining
              qualified traffic that converts to your bottom line.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-banner">
          <div className="contact-banner-left">
            <p>Get your FREE SEO evaluation!</p>
          </div>
          <div className="contact-banner-right">
            <Link style={{ width: `25em` }} id="contact-link" to="/contact/">
              START YOUR WEB PROJECT
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="app-banner">
          <div className="banner-inner">
            <h1>APPLICATIONS</h1>
          </div>
        </div>

        <div className="info-section-sm">
          <h2> APPS ENCOURAGE BRAND LOYALTY </h2>
          <p>
            As consumer behaviour continues to evolve, businesses need to adapt
            their strategy to be where their customers are. As a result,
            companies are moving rapidly toward making mobile apps commonplace
            as business tools and assets. One of the key questions in business
            is{" "}
            <span style={{ color: `#F446EC` }}>
              ‘how can I give my brand a competitive edge?’
            </span>
            . The answer... mobile apps! Industry leading companies are
            designing holistic experiences that leverage the personal nature of
            mobile.
            <br />
            <br />A mobile-first approach is imperative for successful
            businesses, yet many still are behind in adopting a mobile app
            strategy. Where mobile web can help raise awareness and increase
            traffic, mobile apps, on the other hand, allow you to foster the
            customer relationship and increase retention. Without a mobile
            presence, significant marketing opportunities are missed.
          </p>
        </div>

        <div className="section-md">
          <div className="section-md-left">
            <h2>APPS BUILT RIGHT</h2>
            <p>
              I enjoy the challenges of solving problems programatically in
              order to achieve a disired result, and trully enjoy the creation
              process each project takes me on. From concept to deployment, I’m
              constantly in touch with my clients ensuring their technology
              asset is custom made to their standards.
              <br />
              <br />
              So whether you need a sleek front-end, a robust back-end, or a
              full stack application, I've got you covered.
            </p>
          </div>
          <div className="section-md-right">
            <img src={appDev} alt="app-development" />
          </div>
        </div>
        <div className="showcase-projects">
          <div className="showcase-projects-top">
            <div className="showcase">
              <p>
                Your new web asset is meticulously designed to look and perform
                great on all devices...
                <br />
                <br />
                So whether on desktop or mobile...your customers experience your
                brand in all its glory!
              </p>
            </div>
            <div className="showcase">
              <img src={mockUp} alt="web-design-project" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <div className="review-banner">
          <a
            id="review-link"
            href="https://g.page/r/CeZLEXVUyuw8EAg/review"
            rel="noopener noreferrer"
            target="_blank"
          >
            LEAVE ME A REVIEW
          </a>
        </div>
      </section>

      <section>
        <div className="contact-me-banner">
          <div className="banner-inner">
            <h1>CONTACT ME</h1>
          </div>
        </div>
        <div className="contact-section">
          <div className="contact-section-bottom">
            <div className="contact-section-left">
              <p>
                I'm looking forward to seeing what we create together!
                <br />
                <br />
                For any questions, inquiries, or collaborations, feel free to
                contact me. I'd love to hear from you!
              </p>
            </div>
            <div className="contact-section-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
