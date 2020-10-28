import React, { useState } from 'react'

const Card = ({
  click,
  number,
  defaultBackground,
  color,
  border,
  height,
  width,
  shadow,
  image,
  skill,
  highlight,
  pointer}) => {
  const [mouseOver, setMouseOver] = useState(false)


    return(
      <div
      role='button'
      className='card-container'
      onMouseOver={highlight ? () => setMouseOver(true) : null}
      onMouseOut={() => setMouseOver(false)}
      onClick={click}
      id={number}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '20px 3px 0',
        backgroundColor: mouseOver ? '#fff' : defaultBackground,
        color: mouseOver ? '#2d3436' : color,
        border: border,
        height: height,
        width: width,
        boxShadow: shadow,
        backgroundImage: image,
        cursor: pointer === false ? 'cursor' : 'pointer',
        borderRadius: '30px'
        }}>
        <h4>{skill}</h4>
      </div>
    )
}

export default Card
