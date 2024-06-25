import React from 'react'

import ContentHeader from './Content/ContentHeader'
import updatedResume from "../assets/resume.pdf";

const Resume = () => {
  const donloadResume = () => {
    const pdfUrl = updatedResume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ContentHeader title='Resume' />
      <div className='resume-container'>
        <iframe
          style={{minHeight: '75vh'}} 
          src={`${updatedResume}#toolbar=0&navpanes=0`} 
          width='100%' 
          height={500}
          frameborder="0"
        />
      </div>
      <div className='text-center'>
        <button className='btn btn-primary btn-primary-hover mt-2' onClick={donloadResume}>Download Resume</button>
      </div>
    </>
  )
}

export default Resume