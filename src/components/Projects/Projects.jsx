import React, { useState } from 'react'
import ContentHeader from '../Content/ContentHeader'
import { Link } from 'react-router-dom';

import { projects } from '../../data';
import Modal from '../Modal';

import "./Projects.scss";
import ProjectOverlay from './ProjectOverlay';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const handleMoreDetails = (project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (<>
    <ContentHeader title='Projects' />      
    <div className='projects-container'>
      {projects.map(project =>
          <div className='project-card'>
            <div className='image'>
              <img src={project.img} alt={project.title} />
            </div>
            <div className='overview'>
              <p>{project.overview}</p>
              <div className='project-action mt-2'>
                <Link className='btn btn-primary btn-primary-hover' to={project.website} target="_blank">Visit Website</Link>
                <button className='btn btn-primary btn-primary-hover' onClick={() => handleMoreDetails(project)}>More details</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
    {isOpen && <Modal handleClose={handleClose}>
      <ProjectOverlay project={selectedProject} />
    </Modal>}
    </>
  )
}

export default Projects