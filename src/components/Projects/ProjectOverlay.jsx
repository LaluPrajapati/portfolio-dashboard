import React from 'react'

import "./ProjectOverlay.scss";

const ProjectOverlay = ({project}) => {
  return (
    <div className='project-overlay'>
      <div className='details'>
        <span>Responsibilities</span>
        <ul>
          {project?.responsibilities.map(r => <li>{r}</li>)}
        </ul>
      </div>
      <div className='details'>
        <span>Tools </span>
        <p>{project.tools}</p>
      </div>
      <div className='details'>
        <span>Module</span>
        <p>{project.module}</p>
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
    </div>
  )
}

export default ProjectOverlay