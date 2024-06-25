import { createBrowserRouter } from "react-router-dom";

import Layout from './Layout.jsx';
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import About from "./components/About/About.jsx";
import FindMe from "./components/FindMe/FindMe.jsx";
import Resume from "./components/Resume.jsx";
import CoverLetter from "./components/CoverLetter.jsx";

const router = createBrowserRouter([
  {
    path: "/portfolio-dashboard",
    element: <Layout />,
    children: [
      {
        path: "work-experience",
        element: <WorkExperience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "/portfolio-dashboard",
        element: <About />,
      },
      {
        path: "find-me",
        element: <FindMe />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "cover-letter",
        element: <CoverLetter />,
      },
    ],
  },
]);

export default router;