import React from 'react'
import ContentHeader from './Content/ContentHeader'

import coverLetter from "../assets/cover_letter.pdf";

const CoverLetter = () => {
  return (
    <>
      <ContentHeader title='Cover Letter' />
      <div className='cover-letter'>
        <iframe
          style={{minHeight: '82vh'}} 
          src={`${coverLetter}#toolbar=0&navpanes=0`} 
          width='100%' 
          height={500}
          frameborder="0"
        />
      </div>
    </>
  )
}

export default CoverLetter