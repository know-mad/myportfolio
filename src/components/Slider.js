import React, {useEffect} from 'react'
import './Slider.css'
import shopifyAlt from "../images/shopify-plus-logo--black.svg"

const Slider = () => {
    useEffect(() => {
        const slider = document.querySelector('.mobile-slider'),
              slides = Array.from(document.querySelectorAll('.partners-card-mobile'));

        let isDragging = false,
            startPos = 0,
            currentTranslate = 0,
            prevTranslate = 0,
            animationID = 0,
            currentIndex = 0

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
        window.oncontextmenu = function(e) {
            e.preventDefault()
            e.stopPropagation()
            return false
        }

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
            }

            if(movedBy > 100 && currentIndex > 0) {
                currentIndex -= 1
            }

            setPositionByIndex()

            slider.classList.remove('grabbing')
            console.log('end')
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
                        <img src={shopifyAlt} />
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                        <img src={shopifyAlt} />
                    </div>
                </div>
                <div className="partners-card-mobile">
                    <div className="partners-card-mobile-inner">
                        <img src={shopifyAlt} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider