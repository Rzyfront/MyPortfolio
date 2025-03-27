import React, { useEffect } from 'react'
import {Projects_EN} from '../../Languages/EN'
import {Projects_ES} from '../../Languages/ES'
import './Projects.css'
import ProjectsCard from './ProjectsCard/ProjectsCard';
import { useSelector } from 'react-redux';

function Projects() {
  const {Languages} = useSelector(state=>state)
  
  useEffect(() => {
    // Configuramos el Intersection Observer
    const options = {
      root: null, // usar el viewport como contenedor de referencia
      rootMargin: '0px',
      threshold: 0.1 // cuando al menos 10% del elemento sea visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Cuando un elemento entra en la vista, añadimos la clase 'visible'
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Una vez que se ha hecho visible, ya no necesitamos observarlo
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Observamos todas las cards de proyectos
    const projectCards = document.querySelectorAll('.Card-Project');
    projectCards.forEach(card => {
      observer.observe(card);
    });
    
    // Limpiamos el observer cuando el componente se desmonte
    return () => {
      projectCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [Languages]); // Ejecutamos el efecto cuando cambia el idioma para observar las nuevas cards
  
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