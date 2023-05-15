import React from 'react'

function ProjectsCard({id,name,img,description,url}) {
  return (
        <div className={`Card-Project c${id}`}>
          <div className='Cont-Img'>
            <img src={img[0]} alt="Img" className='Card-Img'/>
          </div>
          <div className='Cont-Info'>
            <h3 className='Card-Title'>{name}</h3>
            <p className='Card-Text'>{description}</p>
            <a className='Card-link' target='_blank' href={url}>{url}</a>
          </div>
        </div>
  )
}

export default ProjectsCard