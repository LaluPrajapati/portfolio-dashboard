import React from 'react';
import  { Link } from 'react-router-dom'

import UserImg from "../../assets/user-new.jpg";
import "./Profile.scss";

const Profile = ({ setCurrentIndex }) => {
  return (
    <div className='profile'>
      <div className='user-detail'>
        <Link to='/portfolio-dashboard/' onClick={() => setCurrentIndex('/portfolio-dashboard/')}>
          <img src={UserImg} alt='user' />
        </Link>
        <h3 className='user-name'>Lalu Prajapati</h3>
        <span className='designation'>Technical Lead & Mentor</span>      
      </div>
    </div>
  )
}

export default Profile