import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({
  number,
  title,
  technology1,
  technology2,
  technology3,
  technology4,
  technology5,
  technology6,
  description,
  image }) => {

    const bottomStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '70%',
      width: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }

    const descriptionStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '1.25rem',
      height: '85%',
      width: '100%',
      fontWeight: 'bold'
      // backgroundColor: 'orange'
    }

    const demoStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '15%',
      width: '100%',
      // backgroundColor: 'blue',
    }


    return (
    <div className='single-project'>
      <div className='single-project-top'>

        <div className='project-description-container'>
          <div className='project-title'>
            <h1>{title}</h1>
          </div>
          <div className='technologies-used'>
            <div className='technologies-used-top'>
              <p>Built With</p>
            </div>
            <div className='technologies-used-bottom'>
              <div className='technologies-used-container '>
            <h3 style={{color: '#0984e3'}}>{technology1}</h3>
            <h3 style={{color: '#deac70'}}>{technology2}</h3>
            <h3 style={{color: '#b007a8'}}>{technology3}</h3>
            <h3 style={{color: '#2d3436'}}>{technology4}</h3>
            <h3>{technology5}</h3>
            <h3 style={{color: '#0984e3'}}>{technology6}</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div style={bottomStyle}>
        <div style={descriptionStyle}>
          <p>{description}</p>
        </div>
        <div style={demoStyle}>
          <button type="button">Click Me!</button>
          <button type="button">Click Me!</button>
        </div>
      </div>
    </div>
  )

}


export default ProjectCard
