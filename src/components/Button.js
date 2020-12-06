import React from 'react'



const Button = ({
  padding,
  margin,
  content,
  link,
  backgroundColor,
  fontColor,
  borderColor }) => {

  const buttonStyle = {
    color: '#fff',
    backgroundColor: 'transparent',
    border: `1px solid ${borderColor}`,
    textDecoration: 'none',
    padding: padding,
    marginTop: margin,
    fontWeight: 'bold',
    borderRadius: '30px',
    cursor: 'pointer',
    textAlign: 'center'
  }

  return(
    <a
    style={buttonStyle}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    >
    {content}
    </a>
  )
}

export default Button
