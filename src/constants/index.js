import {
  frontend,
  backend,
  ux,
  techwriting,
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
  sectioneng,
  logrocket,
  stackoverflow,
  refine,
  ninetailed,
  wolfmart,
  requestmechanic,
  dashboard,
  
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
    id: 'articles',
    title: 'Articles',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Technical Writing',
    icon: techwriting,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
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
    name: 'Rails',
    icon: rubyrails,
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
    title: 'Technical Writer',
    company_name: 'Section Engineering Education',
    icon: sectioneng,
    iconBg: '#333333',
    date: 'February 2020 - April 2022',
  },
  {
    title: 'Technical Writer',
    company_name: 'LogRocket',
    icon: logrocket,
    iconBg: '#7152a1',
    date: ' September 2020 - March 2022',
  },
  {
    title: 'Technical Writer',
    company_name: 'Stack Overflow',
    icon: stackoverflow,
    iconBg: '#fff',
    date: 'February 2021 - February 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Wolfmart',
    icon: wolfmart,
    iconBg: '#fff',
    date: 'Sep 2022 - Present',
  },
  {
    title: 'Technical Writer',
    company_name: 'Refine Dev',
    icon: refine,
    iconBg: '#1c2c31',
    date: 'December 2021 - April 2023',
  },
  {
    title: 'Technical Writer',
    company_name: 'Ninetailed',
    icon: ninetailed,
    iconBg: '#fff',
    date: 'September 2022 - February 2023',
  },
  {
    title: 'Frontend Developer',
    company_name: 'RequestMechanic',
    icon: requestmechanic,
    iconBg: '#333333',
    date: 'March 2023 - Current',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Request Mechanic',
    description: 'RequestMechanic is a platform that provides you one-click instant access to a network of certified mechanics and auto-experts',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/RequestMechanic/Web-Landing-Page',
    demo: 'https://requestmechanic.com/',
  },
  {
    id: 'project-2',
    name: 'Management Dashboard',
    description: 'A Business Management Dashboard for RequestMechanic',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: dashboard,
    repo: 'https://github.com/RequestMechanic/Web-Landing-Page',
    demo: 'https://requestmechanic.com/dashboard',
  },
  {
    id: 'project-3',
    name: 'Tekky Guide',
    description: 'A Tech education startup that specialize in showing upcoming tech talents a road map to success in web development',
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
    repo: 'https://github.com/Nomzy-kush/Tekky-Guide-Landing-Page',
    demo: 'https://tekkyguide.com/',
  },
  {
    id: 'project-4',
    name: 'Web Calculator',
    description: `A math Calculator built with just HTML5, CSS3 and JavaScript. The app is capable of performing your common math operations like addition, deletion, subtraction, multiplication, and division.`,
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
    repo: 'https://github.com/Nomzy-kush/CalculatorJS-Section',
    demo: 'https://splendorous-sopapillas-fe8421.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Task Manager with React',
    description:
      'A local storage task management application with features that allow users to save tasks that they do not intend to forget. The app also allows users to check the tasks they have completed and the ones they are still yet to finish.',
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
    image: nyeusi,
    repo: 'https://github.com/Nomzy-kush/Task-Manager-with-React',
    demo: 'https://task-manager-with-react.vercel.app/',
  },
];



const articles = [
  {
    id: 'article-1',
    name: 'Section Eng. Ed.',
    description: 'Composed seven project-based JavaScript articles in collaboration with a content reviewer and technical editor, resulting in over 200,000 page views on the company blog.',
    image: sectioneng,
    demo: 'https://www.section.io/engineering-education/',
  },
  {
    id: 'article-2',
    name: 'LogRocket',
    description:
      'Authored a wide range of technically-focused articles, thoughtfully curated to align with LogRocket strategic objectives and target audience',
      image: logrocket,
      demo: 'https://logrocket.com/',
  },
  {
    id: 'article-3',
    name: 'Stack Overflow',
    description: 'Developed comprehensive documentation sets for Stack Overflow Tech cloud-based SaaS products, including user guides, API documentation, developer manuals, and release notes',
    image: stackoverflow,
    demo: 'https://stackoverflow.com/',
  },
  {
    id: 'article-4',
    name: 'Refine Dev',
    description: `Created context-sensitive online help, troubleshooting guides, FAQs, and knowledge base articles, ensuring that users can effectively utilize our products`,
    image: refine,
    demo: 'https://refine.dev/',
  },
  {
    id: 'article-5',
    name: 'Ninetailed',
    description: `Developed comprehensive documentation sets for Ninetailed Tech's cloud-based SaaS products, including user guides, API documentation, developer manuals, and release notes`,
    image: ninetailed,
    demo: 'https://ninetailed.io/',
  },
];

export { services, technologies, experiences, projects, articles };
