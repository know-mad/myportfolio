import React from 'react'
import './ProjectCard.css'
import Button from './Button'





const ProjectCard = ({
  title,
  technology1,
  technology2,
  technology3,
  technology4,
  technology5,
  technology6,
  description,
  image,
  demoLink,
  githubLink}) => {

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
      fontSize: '1rem',
      height: '85%',
      width: '100%',
      fontWeight: 'bold',
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
            <h3 style={{color: '#fff'}}>{technology4}</h3>
            <h3 style={{color: '#32ab9c'}}>{technology5}</h3>
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
          <Button
          content={'demo'}
          margin={'-10px'}
          padding={'0.5rem 1.5rem'}
          fontColor={'#deac70'}
          backgroundColor={'#deac70'}
          borderColor={'#deac70'}
          link={demoLink}
          />

            <Button
            content={'github'}
            margin={'-10px'}
            padding={'0.5rem 1.5rem'}
            fontColor={'#deac70'}
            backgroundColor={'#deac70'}
            borderColor={'#deac70'}
            link={githubLink}
            />
        </div>
      </div>
    </div>
  )

}


export default ProjectCard
