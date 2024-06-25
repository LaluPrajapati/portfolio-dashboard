import React, { useState, useEffect } from 'react'

import "./ProgressBarCard.scss";

const ProgressBarCard = ({ listDetails }) => {
  const { title, percentage } = listDetails;
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setTimeout(() => setCompleted(percentage), 20);
  });

  return (
    <div className="progress-bar-card">
      <label className="title">
        <span>{title}</span>
      </label>
      <span className="progress-bar">
        <span className="percentage-bar" style={{ width: completed + "%" }}>
          {`${completed}%`}
        </span>
      </span>
    </div>
  )
}

export default ProgressBarCard