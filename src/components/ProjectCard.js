import React, {useState} from 'react'

import trees from '../images/trees.jpg'

const ProjectCard = (props) => {
  const [mouseOver, setMouseOver] = useState(false)

  let handleClick = () => {
    let item = document.getElementById(props.item)
    console.log(item.id)
  }



  return (
    <div
      onClick={handleClick}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      id={props.item}
      style={{
      backgroundImage: `url(${props.image})`,
      display: 'flex',
      flexDirection: 'row',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '20%',
      marginBottom: '20px',
      cursor: 'pointer',
      boxShadow: '5px 10px 20px rgba(0,0,0,0.4)',
    }}>

      <div style={{
        backgroundColor: 'rgba(50, 171, 156)',
        display: 'flex',
        height: '100%',
        width: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <h1 style={{color: '#fff'}}>{props.number}</h1>
      </div>

      <div style ={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mouseOver === true ? 'rgba(0,0,0,0.0)' : 'rgba(0,0,0,0.4)',
        height: '100%',
        width: '90%',
      }}>
        <h1 style={{color: '#fff'}}>{props.info}</h1>
      </div>
    </div>
  )
}


export default ProjectCard
