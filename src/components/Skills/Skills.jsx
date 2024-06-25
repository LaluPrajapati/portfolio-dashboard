import React from 'react'
import ContentHeader from '../Content/ContentHeader'
import ProgressBarCard from './ProgressBarCard';

const skills = [
  { title: "Salesforce Commerce Cloud", percentage: "80" },
  { title: "ReactJS", percentage: "85" },
  { title: "Redux", percentage: "85" },
  { title: "VueJS", percentage: "75" },
  { title: "Vuex", percentage: "75" },
  { title: "JavaScript/ES6", percentage: "85" },
  { title: "NodeJS", percentage: "60" },
  { title: "MongoDB", percentage: "50" },
  { title: "HTML", percentage: "98" },
  { title: "CSS", percentage: "98" },
];

const inlineStyle = {
  overflowY: "auto",
  height: "90%",
};

const Skills = () => {
  return (
    <div className='skills'>
      <ContentHeader title='Skills' />
      <div className="skills" style={inlineStyle}>
        {skills.map((skill, index) => {
          return <ProgressBarCard key={index} listDetails={skill} />;
        })}
      </div>
    </div>
  )
}

export default Skills