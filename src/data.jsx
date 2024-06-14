import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiExternalLink, FiGithub } from 'react-icons/fi';

import Work1 from './assets/projects/project-1.jpg';
import Work2 from './assets/projects/project-2.jpg';
import Work3 from './assets/projects/project-3.jpg';
import Work4 from './assets/projects/project-4.jpg';
import Work5 from './assets/projects/project-5.jpg';
import Work6 from './assets/projects/project-6.jpg';
import Work7 from './assets/projects/project-7.jpg';
import Work8 from './assets/projects/project-8.jpg';
import Work9 from './assets/projects/project-9.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Jaspreet',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Singh',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ward No. 5, Near Govt. Sen. Sec. School, Parla Bhuntar (Kullu) - 175125, Himachal Pradesh, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9817048588',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'jaspreetsingh44555@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: 'Jaspreet000',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English. Hindi, Punjabi',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '8.2+',
    title: 'Current <br /> CGPA',
  },

  {
    id: 4,
    no: '10+',
    title: ' Live <br /> Sites',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Club Head <span> University </span>',
    desc: 'Head of the club, responsible for managing the club, organizing events, and mainly in this club, Full Stack Development is taught to the club members.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Full Stack Development Intern <span> IBM Partner </span>',
    desc: 'Interned at AllSoft Solutions Pvt. Ltd. , an IBM partner, where I learnt HTML, CSS, JavaScript, MongoDB, and ExpressJS. Contributed to the entire software development life cycle, showcasing proficiency in web development and database management.'
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-Present',
    title: 'B.Tech in CSE <span> ABVGIET </span>',
    desc: 'Pursuing my B.Tech in Computer Science and Engineering from Atal Bihari Vajpayee Government Institute of Engineering and Technology, Himachal Pradesh, India. Currently in 3rd year with 8.2 CGPA.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Senior Secondary <span> Snower Valley Public School </span>',
    desc: 'Completed my Senior Secondary from Snower Valley Public School, Kullu, Himachal Pradesh, India with 96% i.e. 480/500 marks.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '92',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '95',
  },

  {
    id: 4,
    title: 'C++',
    percentage: '86',
  },

  {
    id: 5,
    title: 'Express.JS',
    percentage: '87',
  },

  {
    id: 6,
    title: 'Node.JS',
    percentage: '85',
  },

  {
    id: 7,
    title: 'Next.JS',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
  {
    id: 9,
    title: 'TypeScript',
    percentage: '45',
  },
  {
    id: 10,
    title: 'SEO',
    percentage: '75',
  },
    {
      id: 11,
      title: 'Github',
      percentage: '90',
    },
    {
      id: 12,
      title: 'Shopify',
      percentage: '40',
    },
    {
      id: 13,
      title: 'MongoDB',
      percentage: '93',
    },
    {
      id: 14,
      title: 'MySQL',
      percentage: '85',
    },
    {
      id: 15,
      title: 'API Development',
      percentage: '80',
    },
    {
      id: 16,
      title: 'Communication',
      percentage: '85',
    },
];

export const portfolio = [
  {
    id: 2,
    img: Work2,
    title: 'To Do List',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'To Do List Web App',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/todolist',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://todolist-tau-tan.vercel.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Music Player',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Music Player',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/music-player',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS, React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://music-player-eight-orpin.vercel.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'E-Commerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E-Commerce Site',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/e-comm',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next JS, React JS, Node JS, Express JS, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://e-comm-two-pied.vercel.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Clone App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Gemini Clone',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/gemini-clone-repo',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'https://gemini-clone-repo.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing Page',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/landing-page-purehtmlcss',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://jaspreet000.github.io/landing-page-purehtmlcss/',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Secure Sign-Up Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Sign-Up Page',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/signup-page-react-express',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Express JS, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://signup-page-react-express.vercel.app/',
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Weather API Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather API Page',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/weather-app',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://jaspreet000.github.io/weather-app/',
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Cleverbooks Landing Page',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/cleverbooks',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://jaspreet000.github.io/cleverbooks/',
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: 'Patchd quiz app',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Quiz Web App',
      },
      {
        icon: <FiGithub />,
        title: 'Repo : ',
        desc: 'https://github.com/Jaspreet000/fsprom',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JavaScript, Node JS, Express JS, MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://patchdquiz.vercel.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
