import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Computer Engineering',
    company_name: 'UNEG',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2015 - Feb 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Ofimuebles CA',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Aythem',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-2',
    name: 'Memus',
    description:
      'An application made in React where you can create notes and they are saved in a Mongodb database.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Jhonesp/Memus-app',
    demo: 'https://jhonesp.github.io/Memus-app/',
  },
  {
    id: 'project-4',
    name: '3d Model Rotator',
    description: `Project made with React/vite using three.js and Mediapipe/tasks-vision to move a 3D model using hand detection`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Jhonesp/Rotador-3d-React-Mediapipe',
    demo: 'https://jhonesp.github.io/Rotador-3d-React-Mediapipe/',
  },
  {
    id: 'project-3',
    name: 'Aythen-lite',
    description: 'Billing section for the Aythem company. Made with React, Redux. This demo is a part of the development I carried out, it has functional menus but it is not completely functional.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/Jhonesp/aythen_lite',
    demo: 'https://jhonesp.github.io/aythen_lite/',
  },
];

export { services, technologies, experiences, projects };
