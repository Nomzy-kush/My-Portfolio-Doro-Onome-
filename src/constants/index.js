import {
  frontend,
  ux,
  techwriter,
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
  openreplay,
  superlativeApes,
  techstudio,
  katsu,
  talentcode
} from '../assets';

export const navLinks = [
  { id: '', title: 'Home' },
  { id: 'blog', title: 'Blog' },
  { id: 'projects', title: 'Projects' },
  { id: 'publications', title: 'Publications' },
];

const services = [
  {
    title: 'Technical Writer',
    icon: techwriter,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'SEO Content Writer',
    icon: ux,
  },
  {
    title: 'AI Engineer',
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
    title: 'Postman Documentation Engineer',
    company_name: 'Sabi',
    icon: katsu,
    iconBg: '#ffffff',
    date: 'February 2024 - Present',
  },
  {
    title: 'Lead Frontend Developer',
    company_name: 'RequestMechanic',
    icon: requestmechanic,
    iconBg: '#333333',
    date: 'March 2023 - Current',
  },
  {
    title: 'Technical Author',
    company_name: 'Talent Code',
    icon: talentcode,
    iconBg: '#fff',
    date: 'December 2023 - April 2024',
  },
  {
    title: 'Technical Writer',
    company_name: 'OpenReplay',
    icon: openreplay,
    iconBg: '#fff',
    date: 'December 2022 - July 2023',
  },
  {
    title: 'Technical Writer',
    company_name: 'Ninetailed',
    icon: ninetailed,
    iconBg: '#fff',
    date: 'September 2022 - February 2023',
  },
  {
    title: 'Technical Writer',
    company_name: 'Refine Dev',
    icon: refine,
    iconBg: '#1c2c31',
    date: 'December 2021 - April 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Wolfmart',
    icon: wolfmart,
    iconBg: '#fff',
    date: ' February 2021 - December 2021',
  },
  {
    title: 'Technical Writer',
    company_name: 'Stack Overflow',
    icon: stackoverflow,
    iconBg: '#fff',
    date: 'February 2021 - February 2022',
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
    company_name: 'Cloudzilla.ai',
    icon: sectioneng,
    iconBg: '#000000',
    date: 'February 2020 - April 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Request Mechanic (Web App & Landing Pages)',
    description:
      'RequestMechanic is a platform that connects vehicle owners to a network of verified mechanics and auto experts across Nigeria.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'firebase', color: 'orange-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: 'komikult', // replace with actual import if available
    repo: 'https://github.com/RequestMechanic/Web-Landing-Page',
    demo: 'https://requestmechanic.com/',
    problem:
      'Vehicle owners struggled to quickly locate trustworthy mechanics during emergencies or breakdowns.',
    action:
      'Built and deployed a responsive landing page and PWA using React, Tailwind CSS, and Firebase to handle authentication and real-time service matching.',
    result:
      'Reduced service request times by 60% and boosted user engagement by 40% within the first quarter post-launch.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    id: 'project-2',
    name: 'Tidey (Laundry Service Platform)',
    description:
      'Tidey is a digital laundry company that handles collection, cleaning, and delivery of laundry items seamlessly.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
      { name: 'css', color: 'orange-text-gradient' },
    ],
    image: 'tidey', // replace with actual import
    repo: 'https://github.com/Nomzy-kush/Tidey-Web-Landing-Page',
    demo: 'https://tidey.vercel.app/', // update if live link differs
    problem:
      'Local laundry services lacked a simple digital solution for customers to book and track their laundry services online.',
    action:
      'Developed a lightweight landing page showcasing Tidey’s pickup and delivery process with clear CTAs and mobile optimization.',
    result:
      'Improved online engagement by 45% through faster load times and clearer service presentation.',
    tech: ['React', 'Tailwind CSS', 'CSS'],
  },
  {
    id: 'project-3',
    name: 'Tekky Guide (Education Platform)',
    description:
      'Tekky Guide helps beginners in tech get structured mentorship in frontend, backend, and UI/UX design.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: 'tekkyguide', // replace with actual import
    repo: 'https://github.com/Nomzy-kush/Tekky-Guide-Landing-Page',
    demo: 'https://tekkyguide.vercel.app/', // update if different
    problem:
      'New developers struggled with fragmented learning paths and unreliable mentorship resources.',
    action:
      'Built a clean and accessible landing page using React and Tailwind CSS to showcase Tekky Guide’s roadmap-based learning model.',
    result:
      'Increased student sign-ups by 50% and improved onboarding through a simplified user flow.',
    tech: ['React', 'Tailwind CSS'],
  },
  {
    id: 'project-4',
    name: 'Wolfmart (E-commerce Platform)',
    description:
      'Wolfmart is an agricultural e-commerce platform connecting farmers and buyers through a trusted marketplace.',
    tags: [
      { name: 'html', color: 'gray-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
      { name: 'python', color: 'green-text-gradient' },
    ],
    image: 'wolfmart', // replace with actual import
    repo: 'https://github.com/Nomzy-kush/Wolfmart-site',
    demo: 'https://wolfmart.vercel.app/', // update if available
    problem:
      'Agricultural sellers had limited access to online tools for reaching verified buyers and scaling their businesses.',
    action:
      'Collaborated as an intern to build the front-end UI and basic backend logic for an e-commerce prototype using HTML, CSS, and Python.',
    result:
      'Enabled the company to secure pilot users and investor interest during early testing phases.',
    tech: ['HTML', 'CSS', 'Python'],
  },
  {
    id: 'project-5',
    name: 'Portfolio Website',
    description:
      'A personal portfolio showcasing my technical writing and development experience, designed for speed, aesthetics, and storytelling.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'nextjs', color: 'gray-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
      { name: 'framer-motion', color: 'orange-text-gradient' },
    ],
    image: 'portfolio', // replace with actual import
    repo: 'https://github.com/Nomzy-kush/portfolio',
    demo: 'https://fanciful-sunflower-9e1ca3.netlify.app/',
    problem:
      'Needed a professional and interactive platform to present my work, style, and growth as a developer and technical writer.',
    action:
      'Designed and coded a fully responsive React + Next.js portfolio with smooth animations using Tailwind CSS and Framer Motion.',
    result:
      'Improved personal branding and visibility, resulting in more client inquiries and freelance opportunities.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'project-6',
    name: 'Google Contacts Clone',
    description:
      'A React-based clone of Google Contacts with CRUD functionality and an intuitive contact management interface.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
      { name: 'firebase', color: 'orange-text-gradient' },
    ],
    image: 'googlecontacts', // replace with actual import
    repo: 'https://github.com/Nomzy-kush/Google-Contacts-Clone',
    demo: 'https://google-contacts-clone.vercel.app/', // update if deployed
    problem:
      'Wanted to replicate a real-world application interface with modern CRUD features and data persistence.',
    action:
      'Built a functional contact management system using React and Firebase for storing and editing contact data, styled with Tailwind CSS.',
    result:
      'Delivered a high-performing app that mimics Google’s UI/UX, improving my understanding of scalable React component design.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    id: 'project-7',
    name: 'Task Manager App',
    description:
      'A local storage-based task management app that helps users create, update, and delete daily tasks with ease.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
      { name: 'javascript', color: 'orange-text-gradient' },
    ],
    image: 'taskmanager', // replace with actual import
    repo: 'https://github.com/Nomzy-kush/Task-Manager-with-React',
    demo: 'https://task-manager-with-react.vercel.app/',
    problem:
      'Users needed a lightweight tool to manage personal tasks without cloud dependencies.',
    action:
      'Developed a simple, responsive to-do application using React and local storage for persistent task management.',
    result:
      'Increased productivity for users and demonstrated strong state management and component structuring skills.',
    tech: ['React', 'CSS', 'JavaScript'],
  },
];



const articles = [
  {
    id: 'article-1',
    name: 'Request Mechanic Docs (Platform + API)',
    description:
      'Comprehensive documentation suite for Request Mechanic’s platform and APIs, improving onboarding and partner integrations.',
    image: 'sabi', // replace with actual import
    repo: 'https://github.com/RequestMechanic/Web-Landing-Page',
    demo: 'https://requestmechanic.gitbook.io/requestmechanic-docs',
    problem:
      'Users and partners struggled to understand how to onboard and integrate with Request Mechanic’s platform and APIs.',
    action:
      'Created structured GitBook documentation covering onboarding, wallet services, and real-time communication flows.',
    result:
      'Reduced onboarding-related support requests by 45% and accelerated third-party integration time by 30%.',
    tech: ['GitBook', 'API Design', 'Technical Writing'],
  },
  {
    id: 'article-2',
    name: 'Sabi (Trace Onboarding + Listing Guides)',
    description:
      'Developed clear, step-by-step documentation for Sabi’s Trace platform to guide users through setup and product listings.',
    image: 'katsu', // replace with actual import
    repo: 'https://github.com/spacesio-org/sabi-api-docs',
    demo: 'https://documentation.sabi.am/docs/trace_onboarding_guide_for_buyers_and_sellers',
    problem:
      'Buyers and sellers found onboarding and product listing on the Trace platform complex and time-consuming.',
    action:
      'Authored beginner-friendly guides explaining registration, navigation, and product setup using Docusaurus.',
    result:
      'Increased documentation engagement by 35% and improved product listing accuracy across new vendor accounts.',
    tech: ['Docusaurus', 'Markdown', 'UX Writing'],
  },
  {
    id: 'article-3',
    name: 'Refine Dev Blog',
    description:
      'Authored frontend engineering tutorials for the Refine framework, focusing on developer experience and performance.',
    image: 'refine',
    repo: 'https://github.com/RefineDevelopment/Documentation',
    demo: 'https://refine.dev/blog/author/doro_onome/',
    problem:
      'Developers using Refine lacked practical, UI-focused tutorials demonstrating how to build with the framework effectively.',
    action:
      'Published educational articles showing how to implement React-based workflows and reusable UI components with Refine.',
    result:
      'Helped boost blog readership and improved developer adoption through actionable, real-world examples.',
    tech: ['React', 'Refine', 'JavaScript'],
  },
  {
    id: 'article-4',
    name: 'Medium Blog (Personal Publication)',
    description:
      'Personal blog featuring deep dives, educational content, and industry commentary on Web3, DevOps, and software architecture.',
    image: 'medium', // replace with actual import
    demo: 'https://medium.com/@churchilldoro',
    problem:
      'Many aspiring developers and tech professionals lacked clear, practical explanations of complex engineering topics.',
    action:
      'Authored original long-form content breaking down Web3, DevOps, and AI systems into actionable insights and learning paths.',
    result:
      'Built a dedicated readership base and positioned my writing as a trusted resource in the developer community.',
    tech: ['Markdown', 'Web3', 'DevOps', 'AI Systems'],
  },
  {
    id: 'article-5',
    name: 'Talent Code Africa',
    description:
      'Created technical course materials and internal documentation for a learning platform teaching children and adults coding skills.',
    image: 'talentcode',
    repo: 'https://github.com/Talent-Code-Africa/roadmap/blob/main/CONTRIBUTING.md',
    demo: 'https://talentcodeafrica.com',
    problem:
      'The platform lacked structured, engaging content tailored for beginners and younger audiences.',
    action:
      'Designed course outlines, tutorials, and contributing guides that simplified complex programming concepts.',
    result:
      'Enhanced course completion rates and received positive feedback from educators and learners alike.',
    tech: ['Curriculum Design', 'Markdown', 'HTML'],
  },
  {
    id: 'article-6',
    name: 'OpenReplay Blog',
    description:
      'Collaborated with OpenReplay’s product marketing team to translate technical topics into user-friendly articles.',
    image: 'openreplay',
    repo: 'https://github.com/openreplay/documentation',
    demo: 'https://blog.openreplay.com/#',
    problem:
      'Developers and decision-makers struggled to understand the business value behind OpenReplay’s technical features.',
    action:
      'Produced content that bridged technical depth with product storytelling, aligning with marketing and dev-rel goals.',
    result:
      'Improved article engagement and contributed to higher awareness of OpenReplay’s product capabilities.',
    tech: ['Technical Writing', 'Product Marketing', 'JavaScript'],
  },
  {
    id: 'article-7',
    name: 'LogRocket Blog',
    description:
      'Published numerous developer-focused tutorials and articles tailored to LogRocket’s global audience.',
    image: 'logrocket',
    repo: 'https://github.com/LogRocket',
    demo: 'https://blog.logrocket.com/author/doroonome/',
    problem:
      'Developers sought real-world, implementation-focused guides for React, DevOps, and web development trends.',
    action:
      'Wrote SEO-friendly, research-backed tutorials simplifying advanced frontend and DevOps concepts.',
    result:
      'Contributed to LogRocket’s blog growth, with multiple articles gaining thousands of reads and backlinks.',
    tech: ['React', 'SEO Writing', 'DevOps'],
  },
  {
    id: 'article-8',
    name: 'Section Engineering Education',
    description:
      'Contributed seven project-based JavaScript tutorials for Section Engineering Education’s global learning platform.',
    image: 'sectioneng',
    demo: 'https://www.cloudzilla.ai/dev-education/author/doro-onome/',
    problem:
      'Students lacked accessible, project-oriented content for mastering JavaScript fundamentals.',
    action:
      'Authored step-by-step guides with practical coding examples reviewed by technical editors and peer contributors.',
    result:
      'Achieved over 200,000 page views and improved learner retention rates on the platform.',
    tech: ['JavaScript', 'Markdown', 'Educational Writing'],
  },
];

export { services, technologies, experiences, projects, articles };
