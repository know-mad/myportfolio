import React, { useState } from 'react'


const Button = ({ padding, margin, content, link }) => {
  const [hover, setHover] = useState(false)

  const buttonStyle = {
    color: hover ?  '#fff' : '#deac70',
    backgroundColor: hover ? '#deac70' : 'transparent',
    border: '1px solid #deac70',
    textDecoration: 'none',
    padding: padding,
    marginTop: margin,
    boxShadow: '5px 10px 20px rgba(0,0,0,0.4)',
    fontWeight: 'bold',
    borderRadius: '30px'
  }

  return(
    <a
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}
    style={buttonStyle}
    href={link}>
    {content}
    </a>
  )
}

export default Button
