import React from 'react'
import { FaXmark } from 'react-icons/fa6';

import "./style.scss";

const Modal = ({handleClose, children, isOpen}) => {
  return (
    <>
      <div className='modal'>
          <FaXmark className='close-btn' onClick={()=> handleClose()} />
          <div className="modal-body">              
              {children}               
          </div>
      </div>
      <div className="modal-backdrop" onClick={()=> handleClose()}></div>
    </>
  )
}

export default Modal