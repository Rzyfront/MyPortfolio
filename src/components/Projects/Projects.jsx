import React from 'react'
import {Info} from './ProjectsCard/ProjectsInfo';
import './Projects.css'
import ProjectsCard from './ProjectsCard/ProjectsCard';

function Projects() {
  return (
    <div id='Projects' className='Container-Proyects'>
        <h2 className='Title-Projects'>Projects</h2>
        <div className='Card-Projects-Box'>
        {
          Info.map(({id,name,img,description,url},index)=>{
            return <ProjectsCard
            id={id}
            name={name}
            img={img}
            description={description}
            url={url}
            key={index}
            />
          })
        }
       
        </div>
    </div>
  )
}

export default Projects