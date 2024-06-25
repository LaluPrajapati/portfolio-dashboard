import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="intro-content">
      <h1 className="heading-primary">Hey, I'm Lalu Prajapati</h1>
      <div className="intro-info">
        <p className="text-primary mb-2">
          A Focused and Self-motivated Front-End Architect and developer with 10+ years of experience in building the
          Frontend of websites and web applications that leads to the success of
          the overall product.

          I also like to create and share content related to stuff that i have learned over 
          the years in Front-End development so that it can help others.
        </p>
      </div>
      <div className="intro-cta">
        <Link to="/projects" className="btn btn-primary btn-primary-hover">Projects</Link>
      </div>
    </div>
  )
}

export default About