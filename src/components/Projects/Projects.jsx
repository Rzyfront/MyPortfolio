import React from 'react'
import {Projects_EN} from '../../Languages/EN'
import {Projects_ES} from '../../Languages/ES'
import './Projects.css'
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { useSelector } from 'react-redux';

function Projects() {
  const {Languages} = useSelector(state=>state)
  return (
    <div id='Projects' className='Container-Proyects'>
        <h2 className='Title-Projects'>{Languages === 'EN' ? Projects_EN.Title : Projects_ES.Title}</h2>
        <div className='Card-Projects-Box'>
        {Languages === 'EN'
          ?  Projects_EN.Projects.map(({id,name,img,description,url},index)=>{
            return <ProjectsCard
            id={id}
            name={name}
            img={img}
            description={description}
            url={url}
            key={index}
            />
          })
          :
          Projects_ES.Projects.map(({id,name,img,description,url},index)=>{
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