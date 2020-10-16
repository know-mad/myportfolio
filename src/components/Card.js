import React, { useState } from 'react'

const Card = (props) => {
  const [mouseOver, setMouseOver] = useState(false)


    return(
      <div
      className='card-container'
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onClick={props.click}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '20px 3px 0',
        backgroundColor: mouseOver ? '#fff' : props.defaultBackground,
        color: mouseOver ? '#2d3436' : props.color,
        border: props.border,
        height: props.height,
        width: props.width,
        boxShadow: props.shadow,
        backgroundImage: props.image,
        cursor: 'pointer'
        }}>
        <h4>{props.skill}</h4>
      </div>
    )
}

export default Card
