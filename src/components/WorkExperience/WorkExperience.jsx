import React from 'react'
import Card from '../Card/Card'
import ContentHeader from '../Content/ContentHeader'

import { workExpData } from '../../data';

import "./WorkExperience.scss";

const WorkExperience = () => {
  return (
    <>
      <ContentHeader title='Work Experience' />
      <div className='card-container'>
        {workExpData && workExpData.map((item, index) => 
          <Card>
            <div className='exp-header'>
              <h4>{item.organization}</h4>
              <h6>{item.designation}</h6>
            </div>
            <div className='work-duration'>
                <span>{item.from} - {item.to} | {item.location}</span>
            </div>
          </Card>
        )}
      </div>
    </>
  )
}

export default WorkExperience