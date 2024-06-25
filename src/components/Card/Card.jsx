import React from 'react'
import { FaHtml5 } from 'react-icons/fa6'

import "./Card.scss";

const Card = ({ children }) => {
  return (
      <div className='card'>
        {children}
      </div>
  )
}

export default Card