import React, { useEffect, useState } from 'react'
import './Slider.css'
import shopifyAlt from "../images/shopify-plus-logo--black.svg"
import netlify from "../images/netlify-logo.svg"
import mailchimpAlt from "../images/mailchimp-alt-logo.svg"
import contentful from "../images/contentful-logo.svg"
import stripe from "../images/stripe.svg"
import jam from "../images/jamstack-icon.svg"

const Slider = () => {


    useEffect(() => {
        const slider = document.querySelector('.mobile-slider'),
              slides = Array.from(document.querySelectorAll('.partners-card-mobile')),
              dots = Array.from(document.querySelectorAll('.progression-dot'))
              console.log('These are the dots', dots)

        let isDragging = false,
            startPos = 0,
            currentTranslate = 0,
            prevTranslate = 0,
            animationID = 0,
            currentIndex = 0

        let active = 0
        dots[active].style.background = '#F446EC';

        slides.forEach((slide, index) => {
            const slideImage = slide.querySelector('img');
            slideImage.addEventListener('dragstart', (e) => e.preventDefault());

            // Touch events
            slide.addEventListener('touchstart', touchStart(index))
            slide.addEventListener('touchend', touchEnd)
            slide.addEventListener('touchmove', touchMove)
            // Mouse events (later)
        });

        // Disabled right click menu
        // window.oncontextmenu = function(e) {
        //     e.preventDefault()
        //     e.stopPropagation()
        //     return false
        // }

        function touchStart(index) {
            return function(event) {
                currentIndex = index
                startPos = getPositionX(event)
                isDragging = true

                animationID = requestAnimationFrame(animation)
                slider.classList.add('grabbing')
                console.log('start')
                // console.log(startPos)
            }
        }

        function touchEnd() {
            isDragging = false
            cancelAnimationFrame(animationID)
            
            const movedBy = currentTranslate - prevTranslate
            if(movedBy < -100 && currentIndex < slides.length - 1) {
                currentIndex += 1
                dots[currentIndex].style.background = '#F446EC';
                dots[currentIndex - 1].style.background = '#4026B6';
                console.log('The index is', currentIndex)
            }

            if(movedBy > 100 && currentIndex > 0) {
                currentIndex -= 1
                dots[currentIndex + 1].style.background = '#4026B6';
                dots[currentIndex].style.background = '#F446EC';
                console.log('The index blah', currentIndex)
            }

            setPositionByIndex()

            slider.classList.remove('grabbing')
        }

        function touchMove(event) {
            if(isDragging) {
                const currentPosition = getPositionX(event)
                currentTranslate = prevTranslate + currentPosition - startPos
             console.log('move')
            }
        }

        function getPositionX(event) {
            return event.touches[0].clientX
        }

        function animation() {
            setSliderPosition()
            if(isDragging) requestAnimationFrame(animation)
        }

        function setSliderPosition() {
            slider.style.transform = `translateX(${currentTranslate}px)`
        }

        function setPositionByIndex() {
            currentTranslate = currentIndex * -window.innerWidth
            prevTranslate = currentTranslate
            setSliderPosition()
        }
        // console.log("These are the slides", slides)
    })
    return (
        <div className="mobile-slider-container">
            <div className="mobile-slider">
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                        <p className="partners-card-header">e-commerce</p>
                        <img src={shopifyAlt} />
                        <p className="partners-card-content">
                            Working closely with Shopify, I'm able to deliver best-in-class
                            commerce experiences for high-growth Direct To Consumer (DTC)
                            brands.
                        </p>
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                    <p className="partners-card-header">content management</p>
                    <img src={contentful} />
                    <p className="partners-card-content">
                        As a Contentful partner, I create insanley fast e-commerce
                        experiences by leveraging the power of Headless Content
                        Management.
                    </p>
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                        <p className="partners-card-header">headless architecture</p>
                        <img src={jam} />
                        <p className="partners-card-content">
                            Removing the requirement to manage or run web servers, I create
                            fast, secure sites and dynamic headless e-commerce websites.
                        </p>
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                        <p className="partners-card-header">hosting</p>
                        <img src={netlify} />
                        <p className="partners-card-content">
                            Netlify makes CI/CD, deployment and scaled hosting a commodity
                            and helps enterprises focus on creating great dynamic consumer
                            experiences.
                        </p>
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                        <p className="partners-card-header">payment solutions</p>
                        <img src={stripe} />
                        <p className="partners-card-content">
                            Through my Stripe partnership I'm able to integrate a fast and
                            lightweight payment processing system for internet businesses of
                            all sizes.
                        </p>
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
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
            <div className="progression-container">
                <div className="progression-dot"></div>
                <div className="progression-dot"></div>
                <div className="progression-dot"></div>
                <div className="progression-dot"></div>
                <div className="progression-dot"></div>
                <div className="progression-dot"></div>
            </div>
        </div>
    )
}

export default Slider