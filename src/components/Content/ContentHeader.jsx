import React, { useState, useEffect } from 'react';

import "./Content.scss";

const ContentHeader = ({ title }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setActive('active'), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`content-header ${active}`}>
      <h2 className='header-title'>{title}</h2>
      <span className='title-marker'></span>
    </div>
  )
}

export default ContentHeader