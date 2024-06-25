import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from 'react-icons/fa6';

import { sidebarRoutes } from "../../data";

import "./Sidebar.scss";
import Profile from '../Profile/Profile';

const Sidebar = () => {
  let location = useLocation();
  let path = location.pathname;
  let updatedPath = path !== '/portfolio-dashboard' ? path.replace('/portfolio-dashboard/','') : path;
  const [currentIndex, setCurrentIndex] = useState(updatedPath);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleNavLinkClick = (linkText) => {
    setCurrentIndex(linkText);
    // setIsOpen(false);
  }

  return (
    <>
      <div className={`sidebar-nav section-bg ${isOpen ? 'open' : ''}`}>
        {isOpen && <span className='mobile-nav expanded' onClick={handleNavbarToggle}>
          <FaXmark />
        </span>}
        <Profile setCurrentIndex={setCurrentIndex} />
        <div className='nav-container'>
          <ul className='nav-menu'>
            {sidebarRoutes.map((item, index) => 
              <li key={item.id}>
                <Link to={item.linkText} className={`nav-item ${item.linkText === currentIndex ? 'active': ''}`} onClick={() => handleNavLinkClick(item.linkText)}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>            
            )}
          </ul>
        </div>
        {!isOpen && <span className='mobile-nav' onClick={handleNavbarToggle}>
          <FaBars />
        </span>}
      </div>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>
    </>
  )
}

export default Sidebar