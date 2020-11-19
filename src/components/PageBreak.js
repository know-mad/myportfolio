import React, { useEffect } from 'react'
import './PageBreak.css'
import { gsap } from 'gsap'

const PageBreak = (props) => {
  const laser = React.createRef()

  useEffect(() => {
    gsap.to(laser.current, {width: '90%', duration: 2, repeat: -1, yoyo: true})
  }, [laser])

  return (
    <div className='page-break'>
      <div ref={laser} className='page-break-inner'></div>
    </div>
  )
}

export default PageBreak
