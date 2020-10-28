import React, { useState } from 'react'


const Button = ({ padding, margin, content, link, backgroundColor, fontColor, borderColor}) => {
  const [hover, setHover] = useState(false)

  const buttonStyle = {
    color: hover ?  '#fff' : fontColor,
    backgroundColor: hover ? backgroundColor : 'transparent',
    border: `1px solid ${borderColor}`,
    textDecoration: 'none',
    padding: padding,
    marginTop: margin,
    fontWeight: 'bold',
    borderRadius: '30px',
    cursor: 'pointer'
  }

  return(
    <a
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}
    style={buttonStyle}
    href={link}
    target="_blank">
    {content}
    </a>
  )
}

export default Button