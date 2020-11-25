import React, { useEffect } from 'react'
import './BannerImage.css'
import { gsap } from 'gsap'
import hero from '../images/hero_background.jpg'

const BannerImage = (props) => {
  const banner = React.createRef()

  useEffect(() => {
    gsap.to(banner.current, {opacity: 1, delay: 1, duration: 2})
  }, [banner])

  return (
    <div ref={banner} className='banner-image'></div>
  )

}


export default BannerImage
