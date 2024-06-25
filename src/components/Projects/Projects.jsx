import React from 'react'
import ContentHeader from '../Content/ContentHeader'
import { Link } from 'react-router-dom';

import { projects } from '../../data';

import "./Projects.scss";

const Projects = () => {
  return (<>
    <ContentHeader title='Projects' />      
    <div className='projects-container'>
      {projects.map(project =>
          <div className='project-card'>
            <div className='image'>
              <img src={`/src/assets/${project.img}`} alt='' />
            </div>
            <div className='overview'>
              <p>{project.overview}</p>
            <Link className='btn btn-primary btn-primary-hover mt-2' to={project.website} target="_blank">Visit Website</Link>
            </div>
            <div className='project-overlay'>
              <div className='details'>
                <span>Tools </span>
                <p>{project.tools}</p>
              </div>
              <div className='details'>
                <span>Organization </span>
                <p>{project.org}</p>
              </div>
              <div className='details'>
                <span>Client </span>
                <p>{project.client}</p>
              </div>
              <div className='details'>
                <span>Domain</span>
                <p>{project.domain}</p>
              </div>
              <div className='details'>
                <span>Module</span>
                <p>{project.module}</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
    </>
  )
}

export default Projects