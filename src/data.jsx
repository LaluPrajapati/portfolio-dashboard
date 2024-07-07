import { FaChartLine, FaDiagramProject, FaBook, FaUser, FaEye, FaRegNewspaper, FaRegFileLines } from "react-icons/fa6";

import Heathrow from "./assets/heathrow-logo.svg";
import Dryice from "./assets/dryice.png";
import VideoReady from "./assets/vedio-ready-logo.svg";
import SpellingBee from "./assets/spellingbee.svg";
import Idfc from "./assets/idfcmutualfund.svg";
import Channel4 from "./assets/channel4_logo.svg";
import Mytoll from "./assets/mytoll.png";
import Brightstar from "./assets/brightstar.jpg";
import Rayban from "./assets/ray_ban.svg";

export const sidebarRoutes = [
  {
    id: "about",
    label: "About",
    linkText: "/portfolio-dashboard/",
    icon: <FaUser />,
  },
  {
    id: "projects",
    label: "Projects",
    linkText: "projects",
    icon: <FaDiagramProject />,
  },
  {
    id: "skills",
    label: "Skills",
    linkText: "skills",
    icon: <FaBook />,
  },
  {
    id: "workexperience",
    label: "Work Experience",
    linkText: "work-experience",
    icon: <FaChartLine />,
  },
  {
    id: "findme",
    label: "Find me",
    linkText: "find-me",
    icon: <FaEye />,
  },
  {
    id: "coverletter",
    label: "Cover Letter",
    linkText: "cover-letter",
    icon: <FaRegNewspaper />,
  },
];

export const workExpData = [
  {
    organization: 'Capgemini',
    designation: 'Technical Lead',
    role: 'Technical Lead',
    from: 'Aug-2022',
    to: 'till now',
    location: 'Noida, India',
  },
  {
    organization: 'HCL Technology',
    designation: 'Associate Consultant',
    role: 'Associate Consultant',
    from: 'April-2021',
    to: 'Aug-2022',
    location: 'Noida'
  },
  {
    organization: 'TO THE NEW',
    designation: 'Senior Software Engineer',
    role: 'Senior Software Engineer',
    from: 'Oct-2018',
    to: 'April-2021',
    location: 'Noida'
  },
  {
    organization: 'HCL Technology',
    designation: 'Software Engineer',
    role: 'Software Engineer',
    from: 'Dec-2014',
    to: 'Oct-2018',
    location: 'Noida'
  },
  {
    organization: 'Hybrid Coding',
    designation: 'Web Designer',
    role: 'UI Developer',
    from: 'Sep-2013',
    to: 'Sep-2014',
    location: 'New Delhi'
  }
];

export const projects = [
  {
    title: 'Heathrow Boutique',
    overview: 'Heathrow Boutique from Heathrow Airport offers Reserve & Collect a free shopping service. Reserve the latest fashion, technology, fragrance and more at Heathrow prices and it will be ready to collect and pay for when you fly.',
    responsibilities: [
      'Team Lead and self-contributor.',
      'Creating page designer component, custom preferences and content assets.',
      'Creating UI component from Zeplin designs.',
      'PR review and code optimization.',
      'Working closely with onsite team for module deliveries.',
      'Working in Agile Methodologies for incremental development to deliver better application.',
    ],
    tools: 'Salesforce Commerce Cloud, jQuery, VS Code, Azure, Zeplin',
    org: 'Capgemini',
    client: 'Heathrow',
    domain: 'e-Commerce (B2C)',
    module: 'Desktop Mega Menu, Mobile Navigation, Hero Banner Carousel, Flight Widget, Product Slider',
    website: 'https://boutique.heathrow.com/',
    img: Heathrow
  },
  {
    title: 'DRYiCE Connect',
    overview: `DRYiCE Connect is a service management tool. It is an in-house development product which will 
    be replacement of Remedy ticketing tool. With help of it an organization can maintained their 
    service ticket category wise and a complete view with Dashboard functionality.`,
    responsibilities: [
      'Develop web application using ReactJS, Redux, React Hooks, React Router, HTML5, CSS3, SCSS',
      'Build custom components for UI consisting Accordion, Filter, Input, Checkbox, Button etc.',
      'JWT token management and implement interceptors to embed custom headers.',
      'Maintained high-level expertise in React state management.',
      'Used React-Hooks to handle application life-cycle processes.',
      'Used Middleware, Redux-Thunk in application to store data for multiple use.',
      'Implement ES6 features to enhance code standard and maintainability.',
      'Worked in Agile Methodologies for incremental development to deliver better application.'
    ],
    tools: 'ReactJS, Formik, react-query, react-table, react-router, axios, bootstrap',
    org: 'HCL Technology',
    client: 'HCL Technology',
    domain: 'Product, SIAM application',
    module: 'Authentication, Node API points, Listing',
    website: 'http://www.dryice-connect-siamaas.com/',
    img: Dryice
  },
  {
    title: 'VideoReady',
    overview: `VideoReady is a framework of flexible and reusable components that help to build and 
    maintain OTT platform. It is a professional end-to-end online video and live streaming platform 
    with support for DRM (Digital Rights Management) and provide everything you need to publish.`,
    responsibilities: [
      'Project development environment setup and lead team of 3 front-end developer.',
      'Implement Recursive component functionality to create reusable component from JSON data.',
      'Develop web application using ReactJS, Redux, React Hooks, React Router, HTML5, CSS3, SCSS',
      'Used Zeplin and Invision to collaborate with UX.',
      'Worked extensively with API team to implement from UI perspective.',
      'Implement ES6 features to enhance code standard and maintainability.',
      'JWT token management and implement interceptors to embed custom headers.',
      'End-to-End feature development of Login, Dashboard, Movies etc.',
      'Task assignment and guide other front-end developer in their part.',
      'Communicating with team (manager and BA) for requirement.',
      'Mock-up creation with visual design team.',
      'Performed cross-browser development, testing and fixes.',
      'Worked in Agile Methodologies for incremental development to deliver better application.'
    ],
    tools: 'ReactJS, Redux, Bootstrap, Axios, React Router',
    org: 'To The New',
    client: 'To The New',
    domain: 'OTT and TV',
    module: 'Frontend Architect setup, Auth, Navigation, Data upload Model',
    website: 'https://www.videoready.tv/',
    img: VideoReady
  },
  {
    title: 'Spelling Bee',
    overview: `Spelling Bee is an online test platform by spelling bee which has two 
    sections parent and admin. A registered admin can create a Test and assign it to a school or a 
    student.`,
    responsibilities: [
      'Developed custom API layer to handle all CRUD operations.',
      'Worked closely with client to establish specification and system design.',
      'Use Trello to track and managed development.',
      'The sole owner of web app development.',
      'Creation of reusable and optimized component ',
      'Performed cross-browser development, testing and fixes.',
      'Worked in Agile Methodologies for incremental development to deliver better application.',
    ],
    tools: 'Vuejs, Vuex, Vue-router, Tailwind CSS',
    org: 'To The New',
    client: 'Spelling Bee',
    domain: 'Education(online quize)',
    module: 'Login, Register and Quize',
    website: 'https://online-test.spellingbee.com/',
    img: SpellingBee
  },
  {
    title: 'IDFC AMC',
    overview: `IDFC AMC is one of India’s Top 10 Assets Managers with deep on-the-ground presence, 
    Promoted by IDFC Ltd. India’s premier infrastructure finance company set up by the 
    government of India.`,
    responsibilities: [
      'Develop Login module and authentication.',
      'Implement multi-step form functionality for from buying to sell of mutual fund and FATCA details of client.',
      'Implement SSR for landing page due to SEO.',
      'The sole owner of Responsive site development.',
      'Creation of reusable and optimized component ',
      'SEO Friendly HTML',
      'Performed cross-browser development, testing and fixes.',
    ],
    tools: 'ReactJS + Redux, Webpack, Bootstrap (CSS), HTML5, SCSS',
    org: 'To The New',
    client: 'IDFC',
    domain: 'Banking (Mutual Fund)',
    module: 'Checkout, Static Content etc.',
    website: 'https://bandhanmutual.com/',
    img: Idfc
  },
  {
    title: 'Channel4',
    overview: `Channel 4 is British, London based Public-television broadcaster that began transmission on 2 
    November 1982. The channel was established to provide fourth television service to the United 
    Kingdom. Channel4 is originally a subsidiary of the Independent Broadcasting Authority.`,
    responsibilities: [
      'Developing advertise component and content from channel and their partners.',
      'Creation of reusable and optimized component.',
      'Performed cross-browser development, testing and fixes.',
    ],
    tools: 'ReactJS + Redux, JavaScript, Webpack, Bootstrap, HTML5, CSS3, JIRA',
    org: 'HCL Technology',
    client: 'Channel4',
    domain: 'TV',
    module: 'Advertisement content',
    website: 'https://www.channel4.com/',
    img: Channel4
  },
  {
    title: 'MyToll',
    overview: `MyToll is an Australia based digital platform connecting you with Tolls services. Whether you 
    want to track a shipment or book a pickup, MyToll makes managing your parcel shipments easy 
    and accessible.`,
    responsibilities: [
      'Creation of Landing page (Dashboard)', 
      'Creation of Tabs and its content', 
      'Advance search functionalities', 
      'SEO friendly HTML', 
      'Performed cross-browser testing',
    ],
    tools: 'JavaScript, Handlebars, JSP, GIT, HTML5, CSS3, JIRA',
    org: 'HCL Technology',
    client: 'MyToll',
    domain: 'Shipment',
    module: 'Dashboard',
    website: 'https://www.mytoll.com/',
    img: Mytoll
  },
  {
    title: 'Brightstar Corp. Telecommunications',
    overview: `Brightstar is the global leader of end-to-end device lifecycle management solutions.
    They work with carrier, retail and enterprise customers in over 50 countries, touching every stage of a device’s lifecycle, 
    from when it’s manufactured to the moment it’s time to trade it in and re-market it.`,
    responsibilities: [
      'Converting UX into user interface',
      'Browser compatibilities.',
    ],
    tools: 'ISML, JavaScript, jQuery, Bootstrap, HTML, CSS, Intershop',
    org: 'HCL Technology',
    client: 'Brightstar Corp. Telecommunications',
    domain: 'e-Commerce',
    module: 'User Interface',
    website: 'http://www.brightstar.com',
    img: Brightstar
  },
  {
    title: 'Ray & Ban',
    overview: `Luxottica is an Italian eyewear company and the world’s largest company in the eyewear 
    industry. It is based in Milan, Italy. Luxottica Group is a leader in the design, manufacture and 
    distribution of fashion, luxury, sports and performance eyewear. Ray & Ban, one of the world’s 
    best known eyewear brands. The brand is best known for their Wayfarer and Aviator lines of 
    sunglasses.`,
    responsibilities: [
      'Creation of complete delivery and pickup point.',
      'Implemented 3 step checkout.',
      'Error customization according to locals.',
    ],
    tools: 'JavaScript, jQuery, Bootstrap, HTML, CSS, WCS, google maps',
    org: 'HCL Technology',
    client: 'Luxottica',
    domain: 'e-Commerce',
    module: 'pickup point',
    website: 'https://www.ray-ban.com/',
    img: Rayban
  },
]
