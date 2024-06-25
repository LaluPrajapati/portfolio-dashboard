import React from 'react'
import ContentHeader from '../Content/ContentHeader'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

import './FindMe.scss';

const contactList = [
  {
    iconName: <FaLinkedin />,
    linkName: "https://www.linkedin.com/in/lalu-prajapati-05338357",
  },
  {
    iconName: <FaGithub />,
    linkName: "https://github.com/laluprajapati",
  },
  {
    iconName: <FaInstagram />,
    linkName: "https://www.instagram.com/lazy.developer_/",
  },
];

const FindMe = () => {
  return (<>
    <ContentHeader title='Find me' />
    <div className='find-me'>
        {contactList.map((item, index) => {
          return (
            <div key={index} className="list-item">
              <a href={item.linkName} target="_blank">
                {item.iconName}
              </a>
            </div>
          );
        })}
    </div>
    </>
  )
}

export default FindMe